using System.Collections.Generic;

namespace Liyanjie.ApiExplorer.Demo.AspNet.WebApi.Models
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PagedList<T>
    {
        /// <summary>
        /// 
        /// </summary>
        public Pager Pager { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IEnumerable<T> List { get; set; }
    }
}