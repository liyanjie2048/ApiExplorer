using Liyanjie.ApiExplorer.Generator.Defaults;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;

namespace Liyanjie.ApiExplorer.Generator.AspNetCore.Mvc.Internals
{
    internal class GenerateProvider : IGenerateProvider
    {
        public GenerateProvider(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        private readonly IServiceProvider serviceProvider;

        private IApiResolver apiResolver { get; set; }

        private IApiSerializer apiSerializer { get; set; }

        private ITypeRegister typeRegister { get; set; }

        private IXmlDocmentationReader xmlDocmentationReader { get; set; }

        public IApiResolver ApiResolver
            => apiResolver ?? (apiResolver = serviceProvider.GetService<IApiResolver>() ?? new ApiResolver
            (
                serviceProvider.GetRequiredService<IApiDescriptionGroupCollectionProvider>(),
                serviceProvider.GetRequiredService<IOptions<MvcJsonOptions>>(),
                serviceProvider.GetRequiredService<IOptions<ApiExplorerGeneratorOptions>>(),
                TypeRegister,
                XmlDocmentationReader
            ));

        public IApiSerializer ApiSerializer => apiSerializer
            ?? (apiSerializer = serviceProvider.GetService<IApiSerializer>() ?? new DefaultApiSerializer());

        public ITypeRegister TypeRegister => typeRegister
            ?? (typeRegister = serviceProvider.GetService<ITypeRegister>() ?? new DefaultTypeRegister(serviceProvider.GetRequiredService<IOptions<MvcJsonOptions>>()?.Value?.SerializerSettings, XmlDocmentationReader));

        public IXmlDocmentationReader XmlDocmentationReader => xmlDocmentationReader
            ?? (xmlDocmentationReader = serviceProvider.GetService<IXmlDocmentationReader>() ?? new DefaultXmlDocmentationReader(serviceProvider.GetRequiredService<IOptions<ApiExplorerGeneratorOptions>>()?.Value));
    }
}
