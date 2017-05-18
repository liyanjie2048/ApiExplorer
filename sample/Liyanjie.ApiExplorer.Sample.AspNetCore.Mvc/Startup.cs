using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;

namespace Liyanjie.ApiExplorer.Sample.AspNetCore.Mvc
{
    /// <summary>
    /// 
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// 
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
                        .Add("sample", settings =>
                        {
                            settings.Title = "ApiExplorer Sample";
                            settings.Description = "这是一个ApiExplorer的Sample";
                        })
                        .IncludeXmlDocmentation(Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "Liyanjie.ApiExplorer.Sample.AspNetCore.Mvc.xml"));
                });
        }

        /// <summary>
        /// 
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
                    options.AddJsonPath("/sample/doc.json", true);
                });
        }
    }
}
