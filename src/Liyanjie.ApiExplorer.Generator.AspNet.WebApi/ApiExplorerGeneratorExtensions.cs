using Liyanjie.ApiExplorer.Generator;
using Liyanjie.ApiExplorer.Generator.AspNet.WebApi;
using Liyanjie.ApiExplorer.Generator.AspNet.WebApi.Internals;
using Liyanjie.ApiExplorer.Generator.Defaults;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using System.Web.Http;

namespace System.Web
{
    /// <summary>
    /// 
    /// </summary>
    public static class ApiExplorerGeneratorExtensions
    {
        static ApiExplorerGeneratorOptions generatorOptions = new ApiExplorerGeneratorOptions();
        static IGenerateProvider generateProvider;

        /// <summary>
        /// 注册ApiExplorer生成服务
        /// </summary>
        /// <param name="app"></param>
        /// <param name="configureOptions"></param>
        /// <param name="apiExplorerGenerateProvider"></param>
        /// <returns></returns>
        public static HttpApplication AddApiExplorerGenerator(this HttpApplication app, Action<ApiExplorerGeneratorOptions> configureOptions, IGenerateProvider apiExplorerGenerateProvider = null)
        {
            configureOptions?.Invoke(generatorOptions);

            if (apiExplorerGenerateProvider == null)
            {
                var apiExplorer = GlobalConfiguration.Configuration.Services.GetApiExplorer();
                var jsonSerializerSettings = new Newtonsoft.Json.JsonSerializerSettings();
                var xmlDocmentationReader = new DefaultXmlDocmentationReader(generatorOptions);
                var typeRegister = new DefaultTypeRegister(jsonSerializerSettings, xmlDocmentationReader);
                var apiResolver = new ApiResolver(apiExplorer, jsonSerializerSettings, generatorOptions, typeRegister, xmlDocmentationReader);
                var apiSerializer = new DefaultApiSerializer();

                apiExplorerGenerateProvider = new GenerateProvider(apiResolver, apiSerializer, typeRegister, xmlDocmentationReader);
            }

            generateProvider = apiExplorerGenerateProvider;

            return app;
        }

        /// <summary>
        /// 使用ApiExplorer生成doc.json
        /// </summary>
        /// <param name="app"></param>
        /// <param name="routeTemplate">路由模板，默认“{version}/doc.json”，version为必须路由参数</param>
        /// <returns></returns>
        public static HttpApplication UseApiExplorerGenerator(this HttpApplication app, string routeTemplate = "{version}/doc.json")
        {
            if (new ApiExplorerGeneratorMiddleware(generateProvider, generatorOptions, routeTemplate).Invoke(app.Context))
                app.Context.Response.End();

            return app;
        }
    }
}