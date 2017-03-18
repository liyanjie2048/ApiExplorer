using Liyanjie.ApiExplorer.UI;
using Liyanjie.ApiExplorer.UI.AspNet;

namespace System.Web
{
    /// <summary>
    /// 
    /// </summary>
    public static class ApiExplorerUIExtensions
    {
        /// <summary>
        /// 使用ApiExplorer User Interface中间件以生成UI
        /// </summary>
        /// <param name="app"></param>
        /// <param name="setupAction">配置</param>
        /// <returns></returns>
        public static HttpApplication UseApiExplorerUI(
            this HttpApplication app,
            Action<ApiExplorerUIOptions> setupAction = null)
        {
            var options = new ApiExplorerUIOptions();
            setupAction?.Invoke(options);

            if (new ApiExplorerUIRedirectMiddleware(options.RouteBase, options.IndexPath).Invoke(app.Context))
                app.Context.Response.End();

            if (new ApiExplorerUIInitJsonMIddleware(options).Invoke(app.Context))
                app.Context.Response.End();

            if (new ApiExplorerUIEmbeddedMIddleware(typeof(Embedded).Assembly, Embedded.FileNamespace, $"/{options.RouteBase}/").Invoke(app.Context))
                app.Context.Response.End();

            return app;
        }
    }
}
