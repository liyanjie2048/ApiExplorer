using Liyanjie.ApiExplorer.Demo.AspNet.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace Liyanjie.ApiExplorer.Demo.AspNet.WebApi.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        /// <summary>
        /// 获取用户列表
        /// </summary>
        /// <param name="pageNumber">页码</param>
        /// <param name="pageSize">行数</param>
        /// <returns></returns>
        /// <response code="200">用户列表</response>
        [Route("{pageNumber:int=1}/{pageSize:int=10}")]
        [HttpGet]
        [ResponseType(typeof(IEnumerable<User>))]
        public IEnumerable<User> Get([FromUri]int? pageNumber, [FromUri]int? pageSize)
        {
            return new List<User>
            {
                new User
                {
                    ID =Guid.NewGuid(),
                    Username ="Test1"
                },
                new User
                {
                    ID =Guid.NewGuid(),
                    Username ="Test2"
                }
            };
        }

        /// <summary>
        /// 获取指定ID的用户
        /// </summary>
        /// <param name="id">用户ID</param>
        /// <returns></returns>
        /// <response code="200">用户信息 <see cref="User"/></response>
        /// <response code="404">未找到用户</response>
        [Route("{id}")]
        [HttpGet]
        [ResponseType(typeof(User))]
        [ResponseType(typeof(object))]
        public User Get([FromUri]Guid id)
        {
            return new User
            {
                ID = Guid.NewGuid(),
                Username = "Test1"
            };
        }
    }
}
