using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Liyanjie.ApiExplorer.Demo.AspNet.WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            this.AddApiExplorer(options =>
            {
                options.Add("v1", settings =>
                {
                    settings.Title = "TEST";
                    settings.Description = "TEST";
                });
                options.IncludeXmlDocmentation(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "bin", "Liyanjie.ApiExplorer.Demo.AspNet.WebApi.XML"));
            });
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

        protected void Application_BeginRequest()
        {
            this.UseApiExplorer(options =>
            {
                options.AddJsonPath("/v1/doc.json", true);
            });
        }
    }
}
