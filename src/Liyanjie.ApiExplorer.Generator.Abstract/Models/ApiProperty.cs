namespace Liyanjie.ApiExplorer.Generator.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiProperty
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
        public ApiType Type { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public bool? Required { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public bool? Obsolete { get; set; }
    }
}
