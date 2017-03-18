using System.IO;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using Liyanjie.ApiExplorer.Generator.Models;
using Newtonsoft.Json;

namespace Liyanjie.ApiExplorer.Generator.Defaults
{
    /// <summary>
    /// 
    /// </summary>
    public class DefaultApiSerializer : JsonSerializer, IApiSerializer
    {
        /// <summary>
        /// 
        /// </summary>
        public DefaultApiSerializer() : base()
        {
            NullValueHandling = NullValueHandling.Ignore;
            ContractResolver = new DefaultContractResolver();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="docment"></param>
        public void Serialize(StreamWriter writer, ApiDocument docment)
        {
            base.Serialize(writer, docment);
        }
    }
}
