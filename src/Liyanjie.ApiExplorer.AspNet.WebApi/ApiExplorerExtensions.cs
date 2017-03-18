using Liyanjie.ApiExplorer.Generator;
using Liyanjie.ApiExplorer.Generator.Interfaces;

namespace System.Web
{
    /// <summary>
    /// 
    /// </summary>
    public static class ApiExplorerExtensions
    {
        /// <summary>
        /// 注册ApiExplorer服务
        /// </summary>
        /// <param name="app"></param>
        /// <param name="configure"></param>
        /// <param name="apiExplorerGenerateProvider"></param>
        /// <returns></returns>
        public static HttpApplication AddApiExplorer(this HttpApplication app, Action<ApiExplorerGeneratorOptions> configure, IGenerateProvider apiExplorerGenerateProvider = null)
        {
            return app.AddApiExplorerGenerator(configure);
        }

        /// <summary>
        /// 使用ApiExplorer引擎生成doc.json
        /// </summary>
        /// <param name="app"></param>
        /// <param name="routeTemplate">路由模板，默认“{version}/doc.json”，version为必须路由参数</param>
        /// <param name="setupAction"></param>
        /// <returns></returns>
        public static HttpApplication UseApiExplorer(this HttpApplication app, Action<ApiExplorerUIOptions> setupAction, string routeTemplate = "{version}/doc.json")
        {
            return app
                .UseApiExplorerGenerator(routeTemplate)
                .UseApiExplorerUI(setupAction);
        }
    }
}