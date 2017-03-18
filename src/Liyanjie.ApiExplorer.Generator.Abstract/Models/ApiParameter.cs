namespace Liyanjie.ApiExplorer.Generator.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiParameter
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
        public ApiBind[] BindInclude { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Source { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public bool? Required { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public object DefaultValue { get; set; }
    }
}
