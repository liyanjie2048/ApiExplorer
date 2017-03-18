using System;
using System.IO;
using System.Threading.Tasks;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using Liyanjie.ApiExplorer.Generator.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Routing.Template;
using Microsoft.Extensions.Options;

namespace Liyanjie.ApiExplorer.Generator.AspNetCore.Mvc
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiExplorerGeneratorMiddleware
    {
        private readonly RequestDelegate next;
        private readonly IGenerateProvider provider;
        private readonly string basePath;
        private readonly string routeTemplate;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="next"></param>
        /// <param name="provider"></param>
        /// <param name="options"></param>
        /// <param name="routeTemplate"></param>
        public ApiExplorerGeneratorMiddleware(
            RequestDelegate next,
            IGenerateProvider provider,
            IOptions<ApiExplorerGeneratorOptions> options,
            string routeTemplate)
        {
            if (next == null)
                throw new ArgumentNullException(nameof(next));

            if (provider == null)
                throw new ArgumentNullException(nameof(provider));

            if (string.IsNullOrWhiteSpace(routeTemplate))
                throw new ArgumentNullException(nameof(routeTemplate));

            this.next = next;
            this.provider = provider;
            this.basePath = options?.Value?.BasePath;
            this.routeTemplate = routeTemplate;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public async Task Invoke(HttpContext httpContext)
        {
            string version;
            if (matchRequesting(httpContext.Request, routeTemplate, out version))
            {
                var basePath = this.basePath ?? (string.IsNullOrEmpty(httpContext.Request.PathBase) ? "/" : httpContext.Request.PathBase.ToString());
                var document = provider.ApiResolver.Create(version, basePath);
                respondDocument(httpContext.Response, document);
                return;
            }

            await next(httpContext);
        }

        private bool matchRequesting(HttpRequest request, string routeTemplate, out string apiVersion)
        {
            apiVersion = null;

            if (request.Method != "GET")
                return false;

            var routeValues = new RouteValueDictionary();
            var templateMatcher = new TemplateMatcher(TemplateParser.Parse(routeTemplate), routeValues);
            if (templateMatcher.TryMatch(request.Path, routeValues))
            {
                apiVersion = routeValues["version"].ToString();
                return true;
            }

            return false;
        }

        private void respondDocument(HttpResponse response, ApiDocument document)
        {
            response.StatusCode = 200;
            response.ContentType = "application/json";

            using (var writer = new StreamWriter(response.Body))
            {
                provider.ApiSerializer.Serialize(writer, document);
            }
        }
    }
}
