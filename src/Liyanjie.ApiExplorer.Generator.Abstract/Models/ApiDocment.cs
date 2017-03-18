using System.Collections.Generic;

namespace Liyanjie.ApiExplorer.Generator.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiDocument
    {
        /// <summary>
        /// 
        /// </summary>
        public string BasePath { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public ApiInfo Info { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IList<ApiHeader> Headers { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IList<ApiResource> Resources { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public IList<ApiDefinition> Definitions { get; set; }
    }
}
