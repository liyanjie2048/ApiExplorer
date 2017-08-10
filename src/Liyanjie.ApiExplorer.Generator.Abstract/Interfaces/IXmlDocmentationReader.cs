using System;
using System.Reflection;

namespace Liyanjie.ApiExplorer.Generator.Interfaces
{
    /// <summary>
    /// XmlDocmentationReader接口
    /// </summary>
    public interface IXmlDocmentationReader
    {
        /// <summary>
        /// 获取Type的Summary
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        string GetSummary(Type type);

        /// <summary>
        /// 获取FieldInfo的Summary
        /// </summary>
        /// <param name="fieldInfo"></param>
        /// <returns></returns>
        string GetSummary(FieldInfo fieldInfo);

        /// <summary>
        /// 获取PropertyInfo的Summary
        /// </summary>
        /// <param name="propertyInfo"></param>
        /// <returns></returns>
        string GetSummary(PropertyInfo propertyInfo);

        /// <summary>
        /// 获取MethodInfo的Summary
        /// </summary>
        /// <param name="methodInfo"></param>
        /// <returns></returns>
        string GetSummary(MethodInfo methodInfo);

        ///// <summary>
        ///// 获取MethodInfo的Timestamp
        ///// </summary>
        ///// <param name="methodInfo"></param>
        ///// <returns></returns>
        //string GetTimestamp(MethodInfo methodInfo);

        /// <summary>
        /// 获取Parameter的Summary
        /// </summary>
        /// <param name="methodInfo"></param>
        /// <param name="parameterName"></param>
        /// <returns></returns>
        string GetParameter(MethodInfo methodInfo, string parameterName);

        /// <summary>
        /// 获取Response的Summary
        /// </summary>
        /// <param name="methodInfo"></param>
        /// <param name="responseCode"></param>
        /// <returns></returns>
        string GetResponse(MethodInfo methodInfo, int responseCode);

        /// <summary>
        /// 获取Change的Summary
        /// </summary>
        /// <param name="methodInfo"></param>
        /// <returns></returns>
        (string Timestamp, string Author, string Description)[] GetChanges(MethodInfo methodInfo);
    }
}
