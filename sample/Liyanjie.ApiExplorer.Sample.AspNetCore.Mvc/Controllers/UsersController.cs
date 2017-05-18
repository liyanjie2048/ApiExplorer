using System;
using System.Collections.Generic;
using Liyanjie.ApiExplorer.Sample.AspNetCore.Mvc.Models;
using Microsoft.AspNetCore.Mvc;

namespace Liyanjie.ApiExplorer.Sample.AspNetCore.Mvc.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [ApiExplorerSettings(GroupName = "用户")]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        /// <summary>
        /// 获取用户列表
        /// </summary>
        /// <param name="pageNumber">页码</param>
        /// <param name="pageSize">行数</param>
        /// <returns></returns>
        /// <response code="200">用户列表</response>
        [HttpGet("{pageNumber:int=1}/{pageSize:int=10}")]
        [ProducesResponseType(typeof(IEnumerable<User>), 200)]
        public IEnumerable<User> Get([FromRoute]int? pageNumber, [FromRoute]int? pageSize)
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
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(User), 200)]
        [ProducesResponseType(404)]
        public User Get([FromRoute]Guid id)
        {
            return new User
            {
                ID = Guid.NewGuid(),
                Username = "Test1"
            };
        }
    }
}
