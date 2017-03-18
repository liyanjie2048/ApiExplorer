namespace Liyanjie.ApiExplorer.Generator.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiType
    {
        /// <summary>
        /// 
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public dynamic Value { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Format { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Definition { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public ApiType ItemType { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public ApiType[] AdditionalTypes { get; set; }
    }
}
