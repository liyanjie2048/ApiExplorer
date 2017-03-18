using Liyanjie.ApiExplorer.Generator.Interfaces;
using Liyanjie.ApiExplorer.Generator.Models;
using Liyanjie.TemplateMatching;
using System;
using System.IO;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Liyanjie.ApiExplorer.Generator.AspNet.WebApi
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiExplorerGeneratorMiddleware
    {
        readonly IGenerateProvider provider;
        readonly string basePath;
        readonly string routeTemplate;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="provider"></param>
        /// <param name="options"></param>
        /// <param name="routeTemplate"></param>
        public ApiExplorerGeneratorMiddleware(
            IGenerateProvider provider,
            ApiExplorerGeneratorOptions options,
            string routeTemplate)
        {
            if (provider == null)
                throw new ArgumentNullException(nameof(provider));

            if (string.IsNullOrWhiteSpace(routeTemplate))
                throw new ArgumentNullException(nameof(routeTemplate));

            this.provider = provider;
            this.basePath = options?.BasePath;
            this.routeTemplate = routeTemplate;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public bool Invoke(HttpContext httpContext)
        {
            string version;
            if (matchRequesting(httpContext.Request, routeTemplate, out version))
            {
                var basePath = this.basePath ?? GlobalConfiguration.Configuration.Routes.VirtualPathRoot ?? "/";
                var document = provider.ApiResolver.Create(version, basePath);
                respondDocument(httpContext.Response, document);
                return true;
            }

            return false;
        }

        bool matchRequesting(HttpRequest request, string routeTemplate, out string apiVersion)
        {
            apiVersion = null;

            if ("GET".Equals(request.HttpMethod, StringComparison.OrdinalIgnoreCase))
            {
                var routeValues = new RouteValueDictionary();
                var templateMatcher = new TemplateMatcher(TemplateParser.Parse(routeTemplate), routeValues);
                if (templateMatcher.TryMatch(request.Path, routeValues))
                {
                    apiVersion = routeValues["version"].ToString();
                    return true;
                }
            }

            return false;
        }

        void respondDocument(HttpResponse response, ApiDocument document)
        {
            response.StatusCode = 200;
            response.ContentType = "application/json";

            using (var writer = new StreamWriter(response.OutputStream))
            {
                provider.ApiSerializer.Serialize(writer, document);
            }
        }
    }
}
