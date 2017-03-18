using Newtonsoft.Json.Serialization;
using System;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Liyanjie.ApiExplorer.Generator.Extensions
{
    internal static class Extensions
    {
        public static string NoWrap(this string input)
        {
            return input?.Trim().Replace(Environment.NewLine, " ");
        }

        public static string ToCamelCase(this string input)
        {
            if (input == null)
                return null;

            if (input.Length < 2)
                return input.ToLower();

            var i = 0;
            var find = false;

            for (; i < input.Length; i++)
            {
                var value = (int)input[i];
                if (value < 65 || value > 90)
                {
                    find = true;
                    break;
                }
            }

            if (!find)
                i++;

            if (i < 1)
                return input;
            else if (i == 1)
                return $"{input.Substring(0, 1).ToLower()}{input.Substring(1)}";
            else
                return $"{input.Substring(0, i - 1).ToLower()}{input.Substring(i - 1)}";
        }

        public static bool IsSelfReferencingArrayOrDictionary(this JsonContract jsonContract)
        {
            var arrayContract = jsonContract as JsonArrayContract;
            if (arrayContract != null)
                return arrayContract.UnderlyingType == arrayContract.CollectionItemType;

            var dictionaryContract = jsonContract as JsonDictionaryContract;
            if (dictionaryContract != null)
                return dictionaryContract.UnderlyingType == dictionaryContract.DictionaryValueType;

            return false;
        }

        public static bool IsBasic(this Type type)
        {
            return false
                || (type.FullName == null && type.Name == "T")
                || type == typeof(short)
                || type == typeof(ushort)
                || type == typeof(int)
                || type == typeof(uint)
                || type == typeof(long)
                || type == typeof(ulong)
                || type == typeof(sbyte)
                || type == typeof(byte)
                || type == typeof(float)
                || type == typeof(double)
                || type == typeof(decimal)
                || type == typeof(bool)
                || type == typeof(string)
                || type == typeof(sbyte[])
                || type == typeof(byte[])
                || type == typeof(Guid)
                || type == typeof(DateTime)
                || type == typeof(DateTimeOffset);
        }

        public static string GetAssemblyName(this Type type)
        {
            var name = (type.IsGenericType() ? type.GetGenericTypeDefinition() : type).AssemblyQualifiedName;
            name = name.Substring(name.IndexOf(", ") + 2);
            name = name.Substring(0, name.IndexOf(", Version="));
            return name;
        }

        public static string GetAssemblyName(this FieldInfo fieldInfo)
        {
            return fieldInfo.DeclaringType.GetAssemblyName();
        }

        public static string GetAssemblyName(this PropertyInfo propertyInfo)
        {
            return propertyInfo.DeclaringType.GetAssemblyName();
        }

        public static string GetAssemblyName(this MethodInfo methodInfo)
        {
            return methodInfo.DeclaringType.GetAssemblyName();
        }

        public static string GetMemberName(this Type type)
        {
            var builder = new StringBuilder("T:");
            appendFullTypeName(type, builder, expandGenericArgs: false);

            return builder.ToString();
        }

        public static string GetMemberName(this FieldInfo fieldInfo)
        {
            var builder = new StringBuilder("F:");
            appendFullTypeName(fieldInfo.DeclaringType, builder, false);
            builder.Append(".");
            builder.Append(fieldInfo.Name);

            return builder.ToString();
        }

        public static string GetMemberName(this PropertyInfo propertyInfo)
        {
            var builder = new StringBuilder("P:");
            appendFullTypeName(propertyInfo.DeclaringType, builder, false);
            builder.Append(".");
            builder.Append(propertyInfo.Name);

            return builder.ToString();
        }

        public static string GetMemberName(this MethodInfo methodInfo)
        {
            var builder = new StringBuilder("M:");
            appendFullTypeName(methodInfo.DeclaringType, builder, false);
            builder.Append(".");
            appendMethodName(methodInfo, builder);

            return builder.ToString();
        }

        private static void appendFullTypeName(Type type, StringBuilder builder, bool expandGenericArgs)
        {
            if (type.Namespace != null)
            {
                builder.Append(type.Namespace);
                builder.Append(".");
            }
            appendTypeName(type, builder, expandGenericArgs);
        }

        private static void appendTypeName(Type type, StringBuilder builder, bool expandGenericArgs)
        {
            if (type.IsNested)
            {
                appendTypeName(type.DeclaringType, builder, false);
                builder.Append(".");
            }

            builder.Append(type.Name);

            if (expandGenericArgs)
                expandGenericArgsIfAny(type, builder);
        }

        private static void expandGenericArgsIfAny(Type type, StringBuilder builder)
        {
            if (type.IsGenericType())
            {
                var genericArgsBuilder = new StringBuilder("{");

                var genericArgs = type.GetGenericArguments();
                foreach (var argType in genericArgs)
                {
                    appendFullTypeName(argType, genericArgsBuilder, true);
                    genericArgsBuilder.Append(",");
                }
                genericArgsBuilder.Replace(",", "}", genericArgsBuilder.Length - 1, 1);

                builder.Replace($"`{genericArgs.Length}", genericArgsBuilder.ToString());
            }
            else if (type.IsArray)
                expandGenericArgsIfAny(type.GetElementType(), builder);
        }

        private static void appendMethodName(MethodInfo methodInfo, StringBuilder builder)
        {
            builder.Append(methodInfo.Name);

            var parameters = methodInfo.GetParameters();
            if (parameters.Length == 0) return;

            builder.Append("(");
            foreach (var param in parameters)
            {
                appendFullTypeName(param.ParameterType, builder, true);
                builder.Append(",");
            }
            builder.Replace(",", ")", builder.Length - 1, 1);
        }

        public static string GetFriendlyName(this Type type, bool fullyQualified = false)
        {
            var typeName = fullyQualified
                ? type.FullNameSansTypeParameters().Replace("+", ".")
                : type.Name;

            if (type.IsGenericType())
            {
                var genericArgumentIds = type.GetGenericArguments()
                    .Select(t => t.GetFriendlyName(fullyQualified))
                    .ToArray();

                typeName = new StringBuilder(typeName)
                    .Replace($"`{genericArgumentIds.Length}", string.Empty)
                    .Append($"[{string.Join(",", genericArgumentIds).TrimEnd(',')}]")
                    .ToString();
            }

            return typeName;
        }

        public static string FullNameSansTypeParameters(this Type type)
        {
            var fullName = type.FullName ?? type.Name;// typeof(Class<>)情况，泛型类型参数未指定时type.FullName为null
            var chopIndex = fullName.IndexOf("[[");
            return chopIndex < 0 ? fullName : fullName.Substring(0, chopIndex);
        }

        public static Type GetNonNullableType(this Type type)
        {
            if (!type.IsNullableType())
                return type;

            return type.GetGenericArguments()[0];
        }

        public static bool IsNullableType(this Type type)
        {
            return Nullable.GetUnderlyingType(type) != null;
        }

        public static bool IsGenericType(this Type type)
        {
            return type.GetTypeInfo().IsGenericType;
        }

        public static bool IsEnumType(this Type type)
        {
            return type.GetNonNullableType().GetTypeInfo().IsEnum;
        }
    }
}
