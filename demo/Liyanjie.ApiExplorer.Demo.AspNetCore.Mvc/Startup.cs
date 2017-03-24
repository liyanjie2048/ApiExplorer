using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using System.IO;

namespace Liyanjie.ApiExplorer.Demo.AspNetCore.Mvc
{
    /// <summary>
    /// 
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddOptions()
                .AddMvcCore()
                .AddJsonFormatters()
                .AddDataAnnotations()
                .AddApiExplorer(options =>
                {
                    options
                        .Add("0.0.1", settings =>
                        {
                            settings.Title = "ApiExplorer Demo";
                            settings.Description = "这是一个ApiExplorer的Demo";
                        })
                        .IncludeXmlDocmentation(Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "Liyanjie.ApiExplorer.Demo.AspNetCore.Mvc.xml"));
                });
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <param name="loggerFactory"></param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app
                .UseMvcWithDefaultRoute()
                .UseApiExplorer(options =>
                {
                    options.AddJsonPath("/0.0.1/doc.json", true);
                });
        }
    }
}
