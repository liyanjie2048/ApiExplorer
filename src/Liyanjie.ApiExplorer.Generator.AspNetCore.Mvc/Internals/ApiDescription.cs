using Liyanjie.ApiExplorer.Generator.Interfaces;

namespace Liyanjie.ApiExplorer.Generator.AspNetCore.Mvc.Internals
{
    internal class ApiDescription : IApiDescription
    {
        public ApiDescription(Microsoft.AspNetCore.Mvc.ApiExplorer.ApiDescription apiDescription)
        {
            Description = apiDescription;
        }

        public Microsoft.AspNetCore.Mvc.ApiExplorer.ApiDescription Description { get; set; }
    }
}
