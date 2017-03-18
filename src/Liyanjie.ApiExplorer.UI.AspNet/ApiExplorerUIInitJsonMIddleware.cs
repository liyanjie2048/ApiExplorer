using Liyanjie.TemplateMatching;
using System;
using System.IO;
using System.Web;
using System.Web.Routing;

namespace Liyanjie.ApiExplorer.UI.AspNet
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiExplorerUIInitJsonMIddleware
    {
        readonly ApiExplorerUIOptions options;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="options"></param>
        public ApiExplorerUIInitJsonMIddleware(ApiExplorerUIOptions options)
        {
            this.options = options;
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
                respondInitJson(httpContext.Response, options.PathsByJson);
                return true;
            }

            return false;
        }

        bool matchRequesting(HttpRequest request)
        {
            if ("GET".Equals(request.HttpMethod, StringComparison.OrdinalIgnoreCase))
            {
                var routeValues = new RouteValueDictionary();
                var templateMatcher = new TemplateMatcher(TemplateParser.Parse(options.InitJsonPath), routeValues);
                return templateMatcher.TryMatch(request.Path, new RouteValueDictionary());
            }

            return false;
        }

        void respondInitJson(HttpResponse response, string content)
        {
            response.StatusCode = 200;
            response.ContentType = "application/json";
            using (var writter = new StreamWriter(response.OutputStream))
            {
                writter.Write(content);
            }
        }
    }
}
