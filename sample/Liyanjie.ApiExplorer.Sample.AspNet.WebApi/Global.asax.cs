using System;
using System.IO;
using System.Web;
using System.Web.Http;

namespace Liyanjie.ApiExplorer.Sample.AspNet.WebApi
{
    /// <summary>
    /// 
    /// </summary>
    public class WebApiApplication : System.Web.HttpApplication
    {
        /// <summary>
        /// 
        /// </summary>
        protected void Application_Start()
        {
            this.AddApiExplorer(options =>
            {
                options.Add("sample", settings =>
                {
                    settings.Title = "TEST";
                    settings.Description = "TEST";
                });
                options.IncludeXmlDocmentation(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "bin", "Liyanjie.ApiExplorer.Sample.AspNet.WebApi.XML"));
            });
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

        /// <summary>
        /// 
        /// </summary>
        protected void Application_BeginRequest()
        {
            this.UseApiExplorer(options =>
            {
                options.AddJsonPath("/sample/doc.json", true);
            });
        }
    }
}
