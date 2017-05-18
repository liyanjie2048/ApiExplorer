using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;
using Liyanjie.ApiExplorer.Sample.AspNet.WebApi.Models;

namespace Liyanjie.ApiExplorer.Sample.AspNet.WebApi.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [RoutePrefix("api/Orders")]
    public class OrdersController : ApiController
    {
        /// <summary>
        /// 获取订单列表
        /// </summary>
        /// <param name="pageNumber">页码</param>
        /// <param name="pageSize">行数</param>
        /// <returns></returns>
        /// <response code="200">订单列表</response>
        [Route("{pageNumber}/{pageSize}")]
        [HttpGet]
        [ResponseType(typeof(PagedList<Order>))]
        public PagedList<Order> Get([FromUri]int? pageNumber = 1, [FromUri]int? pageSize = 10)
        {
            return new PagedList<Order>
            {
                Pager = new Pager
                {
                    PageNumber = pageNumber,
                    PageSize = pageSize,
                },
                List = new List<Order>
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
        [Route("{id}")]
        [HttpGet]
        [ResponseType(typeof(Order))]
        [ResponseType(typeof(object))]
        public Order Get([FromUri]Guid id)
        {
            return new Order
            {
                ID = id,
                Serial = "Test2",
                CreateTime = DateTimeOffset.Now,
            };
        }

        /// <summary>
        /// 创建订单
        /// </summary>
        /// <param name="order">订单</param>
        [HttpPost]
        public void Post([FromBody]Order order)
        {
        }

        /// <summary>
        /// 修改订单
        /// </summary>
        /// <param name="id">订单ID</param>
        /// <param name="order">订单</param>
        [Route("{id}")]
        [HttpPut]
        public void Put([FromUri]Guid id, [FromBody]Order order)
        {
        }

        /// <summary>
        /// 删除订单
        /// </summary>
        /// <param name="id">订单ID</param>
        [Route("{id}")]
        [HttpDelete]
        public string Delete([FromUri]Guid id)
        {
            return id.ToString();
        }
    }
}
