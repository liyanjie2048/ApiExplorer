using Liyanjie.ApiExplorer.Generator.Interfaces;

namespace Liyanjie.ApiExplorer.Generator.AspNet.WebApi.Internals
{
    internal class GenerateProvider : IGenerateProvider
    {
        public GenerateProvider(IApiResolver apiResolver, IApiSerializer apiSerializer, ITypeRegister typeRegister, IXmlDocmentationReader xmlDocmentationReader)
        {
            ApiResolver = apiResolver;
            ApiSerializer = apiSerializer;
            TypeRegister = typeRegister;
            XmlDocmentationReader = xmlDocmentationReader;
        }

        public IApiResolver ApiResolver { get; private set; }

        public IApiSerializer ApiSerializer { get; private set; }

        public ITypeRegister TypeRegister { get; private set; }

        public IXmlDocmentationReader XmlDocmentationReader { get; private set; }
    }
}
