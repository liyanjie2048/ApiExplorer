using System;
using Microsoft.Extensions.DependencyInjection;
using Liyanjie.ApiExplorer.Generator;

namespace Microsoft.AspNetCore.Builder
{
    /// <summary>
    /// 
    /// </summary>
    public static class ApiExplorerExtensions
    {
        /// <summary>
        /// 注册ApiExplorer服务
        /// </summary>
        /// <param name="builder"></param>
        /// <param name="configure"></param>
        /// <returns></returns>
        public static IMvcCoreBuilder AddApiExplorer(this IMvcCoreBuilder builder, Action<ApiExplorerGeneratorOptions> configure)
        {
            return builder.AddApiExplorerGenerator(configure);
        }

        /// <summary>
        /// 使用ApiExplorer引擎生成doc.json
        /// </summary>
        /// <param name="applicationBuilder"></param>
        /// <param name="routeTemplate">路由模板，默认“{version}/doc.json”，version为必须路由参数</param>
        /// <param name="setupAction"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseApiExplorer(this IApplicationBuilder applicationBuilder, Action<ApiExplorerUIOptions> setupAction, string routeTemplate = "{version}/doc.json")
        {
            return applicationBuilder
                .UseApiExplorerGenerator(routeTemplate)
                .UseApiExplorerUI(setupAction);
        }
    }
}