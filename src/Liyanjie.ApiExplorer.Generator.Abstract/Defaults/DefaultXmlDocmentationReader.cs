using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Xml.Linq;
using Liyanjie.ApiExplorer.Generator.Extensions;
using Liyanjie.ApiExplorer.Generator.Interfaces;

namespace Liyanjie.ApiExplorer.Generator.Defaults
{
    /// <summary>
    /// 
    /// </summary>
    public class DefaultXmlDocmentationReader : IXmlDocmentationReader
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="options"></param>
        public DefaultXmlDocmentationReader(ApiExplorerGeneratorOptions options)
        {
            xmlDocmentations = options?.XmlDocmentations.ToArray();
        }

        private readonly string[] xmlDocmentations;

        /// <inheritdoc />
        public string GetSummary(Type type)
            => getMember(type.GetAssemblyName(), type.GetMemberName())?.Element("summary")?.Value?.NoWrap();

        /// <inheritdoc />
        public string GetSummary(FieldInfo fieldInfo)
            => getMember(fieldInfo.GetAssemblyName(), fieldInfo.GetMemberName())?.Element("summary")?.Value?.NoWrap();

        /// <inheritdoc />
        public string GetSummary(PropertyInfo propertyInfo)
            => getMember(propertyInfo.GetAssemblyName(), propertyInfo.GetMemberName())?.Element("summary")?.Value?.NoWrap();

        /// <inheritdoc />
        public string GetSummary(MethodInfo methodInfo)
            => getMember(methodInfo.GetAssemblyName(), methodInfo.GetMemberName())?.Element("summary")?.Value?.NoWrap();

        /// <inheritdoc />
        public string GetTimestamp(MethodInfo methodInfo)
            => getMember(methodInfo.GetAssemblyName(), methodInfo.GetMemberName())?.Element("timestamp")?.Value?.NoWrap();

        /// <inheritdoc />
        public string GetSummary(MethodInfo methodInfo, string parameterName)
            => getMember(methodInfo.GetAssemblyName(), methodInfo.GetMemberName())?.Elements("param").FirstOrDefault(__ => __.Attribute("name")?.Value == parameterName)?.Value?.NoWrap();

        /// <inheritdoc />
        public string GetSummary(MethodInfo methodInfo, int responseCode)
            => getMember(methodInfo.GetAssemblyName(), methodInfo.GetMemberName())?.Elements("response").FirstOrDefault(__ => __.Attribute("code")?.Value == responseCode.ToString())?.Value?.NoWrap();

        private XElement getMember(string assembly, string memberName)
            => getMembers(assembly)?.FirstOrDefault(_ => _.Attribute("name").Value == memberName);

        private IEnumerable<XElement> getMembers(string assemblyName)
        {
            foreach (var item in xmlDocmentations)
            {
                if (!File.Exists(item))
                    continue;

                var xDoc = XDocument.Load(item).Root;
                if (xDoc.Element("assembly").Element("name").Value != assemblyName)
                    continue;

                return xDoc.Element("members").Elements("member");
            }

            return null;
        }
    }
}
