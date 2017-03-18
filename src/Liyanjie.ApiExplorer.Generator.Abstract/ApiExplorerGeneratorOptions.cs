using System;
using System.Collections.Generic;
using System.Linq;

namespace Liyanjie.ApiExplorer.Generator
{
    /// <summary>
    /// 配置选项
    /// </summary>
    public class ApiExplorerGeneratorOptions
    {
        /// <summary>
        /// 
        /// </summary>
        public IEnumerable<ApiExplorerGeneratorSettings> Settings => settings;
        private IList<ApiExplorerGeneratorSettings> settings = new List<ApiExplorerGeneratorSettings>();

        /// <summary>
        /// 
        /// </summary>
        public IEnumerable<string> XmlDocmentations => xmlDocmentations;
        private IList<string> xmlDocmentations = new List<string>();

        /// <summary>
        /// BasePath
        /// </summary>
        public string BasePath { get; set; }

        /// <summary>
        /// 注册Api版本
        /// </summary>
        /// <param name="version"></param>
        /// <param name="configure"></param>
        /// <returns></returns>
        public ApiExplorerGeneratorOptions Add(string version, Action<ApiExplorerGeneratorSettings> configure = null)
        {
            if (string.IsNullOrWhiteSpace(version))
                throw new ArgumentNullException(nameof(version));

            var settings = new ApiExplorerGeneratorSettings(version);
            configure?.Invoke(settings);
            this.settings.Add(settings);

            return this;
        }

        /// <summary>
        /// 附加xml文档注释
        /// </summary>
        /// <param name="xmlPath"></param>
        /// <returns></returns>
        public ApiExplorerGeneratorOptions IncludeXmlDocmentation(string xmlPath)
        {
            if (!XmlDocmentations.Any(_ => _ == xmlPath))
                xmlDocmentations.Add(xmlPath);

            return this;
        }
    }
}
