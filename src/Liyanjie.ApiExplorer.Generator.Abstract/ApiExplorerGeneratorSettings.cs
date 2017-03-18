using Liyanjie.ApiExplorer.Generator.Interfaces;
using System;
using System.Collections.Generic;

namespace Liyanjie.ApiExplorer.Generator
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiExplorerGeneratorSettings
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="version">版本号</param>
        public ApiExplorerGeneratorSettings(string version)
        {
            if (string.IsNullOrWhiteSpace(version))
                throw new ArgumentNullException(nameof(version));

            Version = version;
        }

        /// <summary>
        /// Version
        /// </summary>
        public string Version { get; private set; }

        /// <summary>
        /// Title
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Description
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// GlobalHeaders
        /// </summary>
        public IEnumerable<KeyValuePair<string, string>> GlobalHeaders => globalHeaders;
        private IList<KeyValuePair<string, string>> globalHeaders = new List<KeyValuePair<string, string>>();

        /// <summary>
        /// Api过滤
        /// </summary>
        public Func<IApiDescription, bool> DescriptionFilter { get; set; }

        /// <summary>
        /// Api排序
        /// </summary>
        public Func<IApiDescription, object> DescriptionOrder { get; set; }

        /// <summary>
        /// 添加自定义全局Header
        /// </summary>
        /// <param name="name"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public ApiExplorerGeneratorSettings ConfigureHeader(string name, string value = null)
        {
            if (!string.IsNullOrWhiteSpace(name))
                globalHeaders.Add(new KeyValuePair<string, string>(name, value ?? string.Empty));

            return this;
        }
    }
}
