using System;
using Newtonsoft.Json.Serialization;

namespace Liyanjie.ApiExplorer.Generator.Defaults
{
    internal class DefaultContractResolver : Newtonsoft.Json.Serialization.DefaultContractResolver
    {
        private readonly CamelCasePropertyNamesContractResolver camelCasePropertyNamesContractResolver;

        public DefaultContractResolver()
        {
            camelCasePropertyNamesContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        public override JsonContract ResolveContract(Type type)
        {
            var defaultContract = base.ResolveContract(type);

            if (defaultContract is JsonDictionaryContract)
                return defaultContract;

            return camelCasePropertyNamesContractResolver.ResolveContract(type);
        }
    }
}