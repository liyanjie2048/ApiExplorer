using Liyanjie.ApiExplorer.Generator.Models;

namespace Liyanjie.ApiExplorer.Generator.Interfaces
{
    /// <summary>
    /// ApiResolver接口
    /// </summary>
    public interface IApiResolver
    {
        /// <summary>
        /// 新生成Api文档
        /// </summary>
        /// <param name="version"></param>
        /// <param name="basePath"></param>
        /// <returns></returns>
        ApiDocument Create(string version, string basePath);
    }
}
