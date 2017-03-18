namespace Liyanjie.ApiExplorer.Generator.Interfaces
{
    /// <summary>
    /// GenerateProvider接口
    /// </summary>
    public interface IGenerateProvider
    {
        /// <summary>
        /// ApiResolver
        /// </summary>
        IApiResolver ApiResolver { get; }

        /// <summary>
        /// ApiSerializer
        /// </summary>
        IApiSerializer ApiSerializer { get; }

        /// <summary>
        /// TypeRegister
        /// </summary>
        ITypeRegister TypeRegister { get; }

        /// <summary>
        /// XmlDocmentationReader
        /// </summary>
        IXmlDocmentationReader XmlDocmentationReader { get; }
    }
}
