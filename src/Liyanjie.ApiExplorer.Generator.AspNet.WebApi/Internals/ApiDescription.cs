using Liyanjie.ApiExplorer.Generator.Interfaces;

namespace Liyanjie.ApiExplorer.Generator.AspNet.WebApi.Internals
{
    internal class ApiDescription : IApiDescription
    {
        public ApiDescription(System.Web.Http.Description.ApiDescription apiDescription)
        {
            Description = apiDescription;
        }

        public System.Web.Http.Description.ApiDescription Description { get; set; }
    }
}
