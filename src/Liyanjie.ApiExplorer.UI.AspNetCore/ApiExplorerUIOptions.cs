using System.Collections.Generic;
using System.Text;

namespace Microsoft.AspNetCore.Builder
{
    /// <summary>
    /// 可配置选项
    /// </summary>
    public class ApiExplorerUIOptions
    {
        /// <summary>
        /// 访问UI的基本路由
        /// </summary>
        public string BaseRoute { get; set; } = "doc";

        /// <summary>
        /// 首页
        /// </summary>
        internal string IndexPath => BaseRoute.Trim('/') + "/index.html";

        /// <summary>
        /// 
        /// </summary>
        internal string InitJsonPath => BaseRoute.Trim('/') + "/init.json";

        private IDictionary<string, bool> jsonPaths = new Dictionary<string, bool>();

        /// <summary>
        /// 添加 doc.json 路径
        /// UI引擎将访问这些路径以获得Api的描述信息用于生成可测试的用户界面
        /// </summary>
        /// <param name="path">路径</param>
        /// <param name="isDefault">是否默认被UI引擎驱动</param>
        /// <returns></returns>
        public ApiExplorerUIOptions AddJsonPath(string path, bool isDefault = false)
        {
            jsonPaths.Add(path, isDefault);
            return this;
        }

        internal string PathsByJson
        {
            get
            {
                var builder = new StringBuilder();
                builder.Append("[");
                foreach (var item in jsonPaths)
                {
                    builder.Append($"{{\"url\":\"{item.Key}\",\"default\":{item.Value.ToString().ToLower()}}}");
                }
                builder.Append("]");
                return builder.ToString();
            }
        }
    }
}
