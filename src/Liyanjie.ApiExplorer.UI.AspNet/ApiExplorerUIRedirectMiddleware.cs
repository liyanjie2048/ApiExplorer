using Liyanjie.TemplateMatching;
using System;
using System.Web;
using System.Web.Routing;

namespace Liyanjie.ApiExplorer.UI.AspNet
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiExplorerUIRedirectMiddleware
    {
        readonly string from;
        readonly string to;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="from"></param>
        /// <param name="to"></param>
        public ApiExplorerUIRedirectMiddleware(
            string from,
            string to)
        {
            this.from = from;
            this.to = to;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public bool Invoke(HttpContext httpContext)
        {
            if (matchRequesting(httpContext.Request))
            {
                respondRedirect(httpContext.Response, "~");
                return true;
            }

            return false;
        }

        bool matchRequesting(HttpRequest request)
        {
            if ("GET".Equals(request.HttpMethod, StringComparison.OrdinalIgnoreCase))
            {
                var routeValues = new RouteValueDictionary();
                var templateMatcher = new TemplateMatcher(TemplateParser.Parse(from), routeValues);
                return templateMatcher.TryMatch(request.Path, new RouteValueDictionary());
            }

            return false;
        }

        void respondRedirect(HttpResponse response, string pathBase)
        {
            response.Redirect(pathBase + "/" + to);
        }
    }
}
