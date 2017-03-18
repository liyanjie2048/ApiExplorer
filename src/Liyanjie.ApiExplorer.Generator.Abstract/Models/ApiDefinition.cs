using System.Collections.Generic;

namespace Liyanjie.ApiExplorer.Generator.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiDefinition
    {
        /// <summary>
        /// 
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Summary { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IList<ApiProperty> Properties { get; set; }
    }
}
