using System.IO;
using Liyanjie.ApiExplorer.Generator.Models;

namespace Liyanjie.ApiExplorer.Generator.Interfaces
{
    /// <summary>
    /// ApiSerializer接口
    /// </summary>
    public interface IApiSerializer
    {
        /// <summary>
        /// 序列化Api文档
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="docment"></param>
        void Serialize(StreamWriter writer, ApiDocument docment);
    }
}
