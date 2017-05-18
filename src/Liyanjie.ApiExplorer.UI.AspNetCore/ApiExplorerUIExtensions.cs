using Liyanjie.ApiExplorer.UI;
using Liyanjie.ApiExplorer.UI.AspNetCore;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using System;
using System.Reflection;

namespace Microsoft.AspNetCore.Builder
{
    /// <summary>
    /// 
    /// </summary>
    public static class ApiExplorerUIExtensions
    {
        /// <summary>
        /// 使用ApiExplorer User Interface中间件以生成UI
        /// </summary>
        /// <param name="applicationBuilder"></param>
        /// <param name="setupAction">配置</param>
        /// <returns></returns>
        public static IApplicationBuilder UseApiExplorerUI(
            this IApplicationBuilder applicationBuilder,
            Action<ApiExplorerUIOptions> setupAction = null)
        {
            var options = new ApiExplorerUIOptions();
            setupAction?.Invoke(options);

            applicationBuilder.UseMiddleware<ApiExplorerUIRedirectMiddleware>(options.BaseRoute, options.IndexPath);

            applicationBuilder.UseMiddleware<ApiExplorerUIInitJsonMIddleware>(options);

            var fileServerOptions = new FileServerOptions
            {
                RequestPath = $"/{options.BaseRoute}",
                EnableDefaultFiles = false,
                FileProvider = new EmbeddedFileProvider(typeof(Embedded).GetTypeInfo().Assembly, Embedded.FileNamespace),
            };
            fileServerOptions.StaticFileOptions.ContentTypeProvider = new FileExtensionContentTypeProvider();
            applicationBuilder.UseFileServer(fileServerOptions);

            return applicationBuilder;
        }
    }
}
