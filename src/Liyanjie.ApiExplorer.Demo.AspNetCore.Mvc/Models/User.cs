using System;

namespace Liyanjie.ApiExplorer.Demo.AspNetCore.Mvc.Models
{
    /// <summary>
    /// 用户
    /// </summary>
    public class User
    {
        /// <summary>
        /// ID
        /// </summary>
        public Guid ID { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        public string Username { get; set; }
    }
}
