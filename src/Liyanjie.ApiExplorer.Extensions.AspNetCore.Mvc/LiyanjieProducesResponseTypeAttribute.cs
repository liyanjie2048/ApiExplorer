using System;
using System.Collections.Generic;
using System.Linq;

namespace Microsoft.AspNetCore.Mvc
{
    /// <summary>
    /// 
    /// </summary>
    public class LiyanjieProducesResponseTypeAttribute : ProducesResponseTypeAttribute
    {
        /// <summary>
        /// 对Microsoft.AspNetCore.Mvc.ProducesResponseTypeAttribute的扩展
        /// </summary>
        /// <param name="type">输出类型</param>
        /// <param name="statusCode">HTTP状态码</param>
        /// <param name="excludeProperties">设置不被输出的属性</param>
        public LiyanjieProducesResponseTypeAttribute(Type type, int statusCode, params string[] excludeProperties) : base(type, statusCode)
        {
            var items = new List<string>();
            foreach (var item in excludeProperties)
                items.AddRange(split(item));

            Excludes = items.ToArray();
        }

        /// <summary>
        /// Gets the names of properties to include in model binding.
        /// </summary>
        public string[] Excludes { get; }

        static IEnumerable<string> split(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return new string[0];

            return input.Split(',').Select(piece => piece.Trim()).Where(piece => !string.IsNullOrEmpty(piece));
        }
    }
}
