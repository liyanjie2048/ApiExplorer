using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Routing.Template;

namespace Liyanjie.ApiExplorer.UI.AspNetCore
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiExplorerUIInitJsonMIddleware
    {
        private readonly RequestDelegate next;
        private readonly TemplateMatcher requestMatcher;
        private readonly ApiExplorerUIOptions options;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="next"></param>
        /// <param name="options"></param>
        public ApiExplorerUIInitJsonMIddleware(
            RequestDelegate next,
            ApiExplorerUIOptions options)
        {
            this.next = next;
            this.requestMatcher = new TemplateMatcher(TemplateParser.Parse(options.InitJsonPath), new RouteValueDictionary());
            this.options = options;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public async Task Invoke(HttpContext httpContext)
        {
            if (matchRequesting(httpContext.Request))
            {
                await respondInitJson(httpContext.Response, options.PathsByJson);
                return;
            }

            await next(httpContext);
        }

        bool matchRequesting(HttpRequest request)
        {
            return "GET".Equals(request.Method, StringComparison.OrdinalIgnoreCase) && requestMatcher.TryMatch(request.Path, new RouteValueDictionary());
        }

        async Task respondInitJson(HttpResponse response, string content)
        {
            response.StatusCode = 200;
            response.ContentType = "application/json";
            using (var writter = new StreamWriter(response.Body))
            {
                await writter.WriteAsync(content);
            }
        }
    }
}
