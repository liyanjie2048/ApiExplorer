using System;
using System.Collections.Generic;
using Liyanjie.ApiExplorer.Generator.Models;

namespace Liyanjie.ApiExplorer.Generator.Interfaces
{
    /// <summary>
    /// TypeRegister接口
    /// </summary>
    public interface ITypeRegister
    {
        /// <summary>
        /// 注册Type
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        ApiType RegisterType(Type type);

        /// <summary>
        /// 获取Api声明
        /// </summary>
        /// <returns></returns>
        IList<ApiDefinition> GetDefinitions();
    }
}
