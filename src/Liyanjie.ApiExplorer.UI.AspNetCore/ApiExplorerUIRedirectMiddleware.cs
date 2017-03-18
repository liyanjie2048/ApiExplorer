using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Routing.Template;

namespace Liyanjie.ApiExplorer.UI.AspNetCore
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiExplorerUIRedirectMiddleware
    {
        private readonly RequestDelegate next;
        private readonly string toPath;
        private readonly TemplateMatcher requestMatcher;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="next"></param>
        /// <param name="fromPath"></param>
        /// <param name="toPath"></param>
        public ApiExplorerUIRedirectMiddleware(
            RequestDelegate next,
            string fromPath,
            string toPath)
        {
            this.next = next;
            this.toPath = toPath;
            requestMatcher = new TemplateMatcher(TemplateParser.Parse(fromPath), new RouteValueDictionary());
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
                respondRedirect(httpContext.Response, httpContext.Request.PathBase);
                return;
            }

            await next(httpContext);
        }

        private bool matchRequesting(HttpRequest request)
        {
            return ("GET".Equals(request.Method, StringComparison.OrdinalIgnoreCase)) && requestMatcher.TryMatch(request.Path, new RouteValueDictionary());
        }

        private void respondRedirect(HttpResponse response, string pathBase)
        {
            response.Redirect(pathBase + "/" + toPath);
        }
    }
}
