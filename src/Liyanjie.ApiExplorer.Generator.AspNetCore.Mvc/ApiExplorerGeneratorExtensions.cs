using Liyanjie.ApiExplorer.Generator;
using Liyanjie.ApiExplorer.Generator.AspNetCore.Mvc;
using Liyanjie.ApiExplorer.Generator.AspNetCore.Mvc.Internals;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Microsoft.AspNetCore.Builder
{
    /// <summary>
    /// 
    /// </summary>
    public static class ApiExplorerGeneratorExtensions
    {
        /// <summary>
        /// 注册ApiExplorer生成服务
        /// </summary>
        /// <param name="builder"></param>
        /// <param name="configureOptions"></param>
        /// <returns></returns>
        public static IMvcCoreBuilder AddApiExplorerGenerator(this IMvcCoreBuilder builder, Action<ApiExplorerGeneratorOptions> configureOptions)
        {
            if (configureOptions != null)
                builder.Services
                    .Configure(configureOptions);

            builder.Services.AddTransient<IGenerateProvider>(serviceProvider => new GenerateProvider(serviceProvider));

            return builder.AddApiExplorer();
        }

        /// <summary>
        /// 使用ApiExplorer生成doc.json
        /// </summary>
        /// <param name="applicationBuilder"></param>
        /// <param name="routeTemplate">路由模板，默认“{version}/doc.json”，version为必须路由参数</param>
        /// <returns></returns>
        public static IApplicationBuilder UseApiExplorerGenerator(this IApplicationBuilder applicationBuilder, string routeTemplate = "{version}/doc.json")
        {
            return applicationBuilder.UseMiddleware<ApiExplorerGeneratorMiddleware>(routeTemplate);
        }
    }
}