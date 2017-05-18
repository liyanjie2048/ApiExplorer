using System;
using System.Collections.Generic;
using Liyanjie.ApiExplorer.Sample.AspNetCore.Mvc.Models;
using Microsoft.AspNetCore.Mvc;

namespace Liyanjie.ApiExplorer.Sample.AspNetCore.Mvc.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [ApiExplorerSettings(GroupName = "订单")]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        /// <summary>
        /// 获取订单列表
        /// </summary>
        /// <param name="pageNumber">页码</param>
        /// <param name="pageSize">行数</param>
        /// <param name="search"></param>
        /// <returns></returns>
        /// <response code="200">订单列表</response>
        [HttpGet("{pageNumber:int=1}/{pageSize:int=10}")]
        [LiyanjieProducesResponseType(typeof(IEnumerable<Order>), 200, "CreateTime")]
        public IEnumerable<Order> Get([FromRoute]int? pageNumber, [FromRoute]int? pageSize, [FromQuery]OrderSearch search)
        {
            return new List<Order>
            {
                new Order
                {
                    ID = Guid.NewGuid(),
                    Serial = "Test1",
                    CreateTime = DateTimeOffset.Now,
                },
                new Order
                {
                    ID = Guid.NewGuid(),
                    Serial = "Test2",
                    CreateTime = DateTimeOffset.Now,
                }
            };
        }

        /// <summary>
        /// 获取指定ID的订单信息
        /// </summary>
        /// <param name="id">订单ID</param>
        /// <returns></returns>
        /// <response code="200">订单信息 <see cref="Order"/></response>
        /// <response code="404">未找到订单</response>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Order), 200)]
        [ProducesResponseType(404)]
        public Order Get([FromRoute]Guid id)
        {
            return new Order
            {
                ID = Guid.NewGuid(),
                Serial = "Test2",
                CreateTime = DateTimeOffset.Now,
            };
        }

        /// <summary>
        /// 创建订单
        /// </summary>
        /// <param name="order">订单</param>
        [HttpPost]
        public void Post([FromBody, Bind("Serial")]Order order)
        {
        }

        /// <summary>
        /// 修改订单
        /// </summary>
        /// <param name="id">订单ID</param>
        /// <param name="order">订单</param>
        [HttpPut("{id}")]
        public void Put([FromRoute]Guid id, [FromBody, Bind("Serial")]Order order)
        {
        }

        /// <summary>
        /// 删除订单
        /// </summary>
        /// <param name="id">订单ID</param>
        [HttpDelete("{id}")]
        public void Delete([FromRoute]Guid id)
        {
        }
    }
}
