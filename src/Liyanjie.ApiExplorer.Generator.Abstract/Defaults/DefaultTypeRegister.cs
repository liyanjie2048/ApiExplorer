using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using Liyanjie.ApiExplorer.Generator.Extensions;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using Liyanjie.ApiExplorer.Generator.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace Liyanjie.ApiExplorer.Generator.Defaults
{
    /// <summary>
    /// 
    /// </summary>
    public class DefaultTypeRegister : ITypeRegister
    {
        readonly IDictionary<string, ApiDefinition> definitions = new Dictionary<string, ApiDefinition>();

        readonly IContractResolver contractResolver;

        readonly JsonSerializerSettings jsonSerializerSettings;

        readonly IXmlDocmentationReader xmlDocmentationReader;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="jsonSerializerSettings"></param>
        /// <param name="xmlDocmentationReader"></param>
        public DefaultTypeRegister(JsonSerializerSettings jsonSerializerSettings, IXmlDocmentationReader xmlDocmentationReader)
        {
            this.jsonSerializerSettings = jsonSerializerSettings;
            this.contractResolver = jsonSerializerSettings.ContractResolver ?? new DefaultContractResolver();
            this.xmlDocmentationReader = xmlDocmentationReader;
        }

        /// <inheritdoc />
        public ApiType RegisterType(Type type)
        {
            if (type == null)
                return new ApiType
                {
                    Name = string.Empty
                };

            var typeReferences = new Queue<Type>();

            var result = createType(type, typeReferences);

            while (typeReferences.Any())
            {
                var referencedType = typeReferences.Dequeue();
                var typeName = referencedType.GetFriendlyName(true);

                if (definitions.ContainsKey(typeName))
                    continue;

                definitions.Add(typeName, null);
                definitions[typeName] = getDefinition(referencedType, typeReferences);
            }

            return result;
        }

        private ApiType createType(Type type, Queue<Type> typeReferences)
        {
            var jsonContract = contractResolver.ResolveContract(type);

            var apiType = !primitiveTypeMappings.ContainsKey(type.Name) && type != typeof(object) && (jsonContract is JsonObjectContract || jsonContract.IsSelfReferencingArrayOrDictionary())
                ? createReferenceType(type, typeReferences)
                : createInlineType(type, typeReferences, jsonContract);

            return apiType;
        }

        private ApiType createReferenceType(Type type, Queue<Type> typeReferences)
        {
            typeReferences.Enqueue(type);

            return new ApiType
            {
                Name = "Object",
                Definition = type.GetFriendlyName(true),
            };
        }

        private ApiType createInlineType(Type type, Queue<Type> typeReferences, JsonContract jsonContract)
        {
            if (primitiveTypeMappings.ContainsKey(type.Name))
            {
                var typeMapping = primitiveTypeMappings[type.Name](type);
                return new ApiType
                {
                    Name = typeMapping.Key,
                    Format = typeMapping.Value,
                };
            }

            if (jsonContract is JsonPrimitiveContract)
                return createPrimitiveType((JsonPrimitiveContract)jsonContract, typeReferences);

            if (jsonContract is JsonDictionaryContract)
                return createDictionaryType((JsonDictionaryContract)jsonContract, typeReferences);

            if (jsonContract is JsonArrayContract)
                return createArrayType((JsonArrayContract)jsonContract, typeReferences);

            if (jsonContract is JsonObjectContract && type != typeof(object))
                return createObjectType(type, typeReferences);

            return new ApiType
            {
                Name = "Object"
            };
        }

        private ApiType createArrayType(JsonArrayContract arrayContract, Queue<Type> typeReferences)
        {
            return new ApiType
            {
                Name = "Array",
                ItemType = createType(arrayContract.CollectionItemType ?? typeof(object), typeReferences)
            };
        }

        private ApiType createObjectType(Type type, Queue<Type> typeReferences)
        {
            typeReferences.Enqueue(type);

            return new ApiType
            {
                Name = "Object",
                Definition = type.GetFriendlyName(),
            };
        }

        private ApiType createDictionaryType(JsonDictionaryContract dictionaryContract, Queue<Type> typeReferences)
        {
            var keyType = dictionaryContract.DictionaryKeyType ?? typeof(object);
            var valueType = dictionaryContract.DictionaryValueType ?? typeof(object);

            return new ApiType
            {
                Name = "Object",
                AdditionalTypes = new[]
                {
                    createType(keyType, typeReferences),
                    createType(valueType, typeReferences)
                },
            };
        }

        private ApiType createPrimitiveType(JsonPrimitiveContract primitiveContract, Queue<Type> typeReferences)
        {
            var type = Nullable.GetUnderlyingType(primitiveContract.UnderlyingType) ?? primitiveContract.UnderlyingType;

            if (type.IsEnumType())
            {
                typeReferences.Enqueue(type);

                return new ApiType
                {
                    Name = "Enum",
                    Format = "int32",
                    Definition = type.GetFriendlyName(true),
                };
            }

            if (primitiveTypeMappings.ContainsKey(type.Name))
            {
                var typeMapping = primitiveTypeMappings[type.Name](type);
                return new ApiType
                {
                    Name = typeMapping.Key,
                    Format = typeMapping.Value,
                };
            }

            return new ApiType
            {
                Name = "String"
            };
        }

        /// <inheritdoc />
        public IList<ApiDefinition> GetDefinitions() => definitions.Select(_ => _.Value).ToList();

        private ApiDefinition getDefinition(Type type, Queue<Type> typeReferences)
        {
            if (type.IsBasic())
                return null;

            return new ApiDefinition
            {
                Name = type.GetFriendlyName(true),
                Summary = xmlDocmentationReader.GetSummary(type),
                Properties = getProperties(type, typeReferences),
            };
        }

        private IList<ApiProperty> getProperties(Type type, Queue<Type> typeReferences)
        {
            var toCamelCase = (contractResolver.ResolveContract(type)?.Converter as StringEnumConverter ?? jsonSerializerSettings.Converters.OfType<StringEnumConverter>().FirstOrDefault())?.CamelCaseText ?? true;

            if (type.IsEnumType())
                return type.GetFields(BindingFlags.Static | BindingFlags.Public).Select(_ => new ApiProperty
                {
                    Name = toCamelCase ? _.Name.ToCamelCase() : _.Name,
                    Summary = xmlDocmentationReader.GetSummary(_),
                    Type = new ApiType
                    {
                        Value = _.GetValue(null),
                        Format = "Integer"
                    },
                    Obsolete = _.GetCustomAttributes<ObsoleteAttribute>().Any() ? true : (bool?)null,
                }).ToList();
            else
                return type.GetProperties(BindingFlags.Instance | BindingFlags.Public).Select(_ => new ApiProperty
                {
                    Name = toCamelCase ? _.Name.ToCamelCase() : _.Name,
                    Summary = xmlDocmentationReader.GetSummary(_),
                    Type = createType(_.PropertyType, typeReferences),
                    Required = _.GetCustomAttributes<RequiredAttribute>().Any() ? true : (bool?)null,
                    Obsolete = _.GetCustomAttributes<ObsoleteAttribute>().Any() ? true : (bool?)null,
                }).ToList();
        }

        private IDictionary<string, Func<Type, KeyValuePair<string, string>>> primitiveTypeMappings => new Dictionary<string, Func<Type, KeyValuePair<string, string>>>
        {
            [typeof(sbyte).Name] = type => new KeyValuePair<string, string>("Int8", "byte"),
            [typeof(byte).Name] = type => new KeyValuePair<string, string>("Int8", "byte"),
            [typeof(short).Name] = (type => new KeyValuePair<string, string>(type.Name, "int16")),
            [typeof(ushort).Name] = type => new KeyValuePair<string, string>(type.Name, "int16"),
            [typeof(int).Name] = type => new KeyValuePair<string, string>(type.Name, "int32"),
            [typeof(uint).Name] = type => new KeyValuePair<string, string>(type.Name, "int32"),
            [typeof(long).Name] = type => new KeyValuePair<string, string>(type.Name, "int64"),
            [typeof(ulong).Name] = type => new KeyValuePair<string, string>(type.Name, "int64"),
            [typeof(float).Name] = type => new KeyValuePair<string, string>(type.Name, "float"),
            [typeof(double).Name] = type => new KeyValuePair<string, string>(type.Name, "double"),
            [typeof(decimal).Name] = type => new KeyValuePair<string, string>("Float", "double"),
            [typeof(bool).Name] = type => new KeyValuePair<string, string>(type.Name, null),
            [typeof(string).Name] = type => new KeyValuePair<string, string>(type.Name, null),
            [typeof(sbyte[]).Name] = type => new KeyValuePair<string, string>("String", "string"),
            [typeof(byte[]).Name] = type => new KeyValuePair<string, string>("String", "string"),
            [typeof(Guid).Name] = type => new KeyValuePair<string, string>("String", "uuid"),
            [typeof(DateTime).Name] = type => new KeyValuePair<string, string>("String", "date-time"),
            [typeof(DateTimeOffset).Name] = type => new KeyValuePair<string, string>("String", "date-time"),
            ["T"] = type => new KeyValuePair<string, string>("Object", null),
        };
    }
}
