using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Liyanjie.ApiExplorer.Generator.Extensions;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using Liyanjie.ApiExplorer.Generator.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Converters;

namespace Liyanjie.ApiExplorer.Generator.AspNetCore.Mvc.Internals
{
    internal class ApiResolver : IApiResolver
    {
        public ApiResolver(IApiDescriptionGroupCollectionProvider apiDescriptionGroupCollectionProvider, IOptions<MvcJsonOptions> mvcJsonOptions, IOptions<ApiExplorerGeneratorOptions> options, ITypeRegister typeRegister, IXmlDocmentationReader xmlDocmentationReader)
        {
            this.apiDescriptionGroupCollectionProvider = apiDescriptionGroupCollectionProvider;
            this.toCamelCase = mvcJsonOptions?.Value.SerializerSettings.Converters.OfType<StringEnumConverter>().FirstOrDefault()?.CamelCaseText ?? true;
            this.options = options?.Value;
            this.typeRegister = typeRegister;
            this.xmlDocmentationReader = xmlDocmentationReader;
        }

        private readonly IApiDescriptionGroupCollectionProvider apiDescriptionGroupCollectionProvider;

        private readonly ApiExplorerGeneratorOptions options;

        private readonly ITypeRegister typeRegister;

        private readonly IXmlDocmentationReader xmlDocmentationReader;

        private readonly bool toCamelCase;

        public ApiDocument Create(string version, string basePath)
        {
            var settings = options?.Settings.FirstOrDefault(_ => _.Version == version);

            return new ApiDocument
            {
                BasePath = basePath,
                Info = new ApiInfo
                {
                    Version = settings?.Version,
                    Title = settings?.Title,
                    Description = settings?.Description,
                },
                Headers = getHeaders(settings.GlobalHeaders),
                Resources = getResources(settings.DescriptionFilter, settings.DescriptionOrder),
                Definitions = typeRegister.GetDefinitions(),
            };
        }

        private IList<ApiHeader> getHeaders(IEnumerable<KeyValuePair<string, string>> globalHeaders)
        {
            return globalHeaders?
                .GroupBy(_ => _.Key)
                .Select(_ => new ApiHeader
                {
                    Name = _.Key,
                    Values = _.Select(__ => __.Value).Where(__ => __ != null).ToArray(),
                })
                .ToList();
        }

        private IList<ApiResource> getResources(Func<IApiDescription, bool> filter = null, Func<IApiDescription, object> order = null)
        {
            return apiDescriptionGroupCollectionProvider.ApiDescriptionGroups.Items
                .SelectMany(_ => _.Items
                    .Select(__ => new ApiDescription(__))
                    .Where(filter ?? (__ => true))
                    .OrderBy(__ => (__ as ApiDescription).Description.GroupName)
                    .ThenBy(order ?? (__ => (__ as ApiDescription).Description.RelativePath))
                    .Select(__ => (__ as ApiDescription).Description)
                    .Select(__ =>
                    {
                        var controllerActionDescriptor = __.ActionDescriptor as ControllerActionDescriptor;
                        return new ApiResource
                        {
                            GroupName = $"{_.GroupName}.{controllerActionDescriptor.ControllerName}",
                            Path = __.RelativePath,
                            Method = __.HttpMethod,
                            Summary = xmlDocmentationReader.GetSummary(controllerActionDescriptor.MethodInfo),
                            Timestamp = xmlDocmentationReader.GetTimestamp(controllerActionDescriptor.MethodInfo),
                            Produces = __.SupportedRequestFormats.Select(___ => ___.MediaType).ToArray(),
                            Parameters = getParameters(__.ParameterDescriptions, controllerActionDescriptor.MethodInfo),
                            Responses = getResponses(__.SupportedResponseTypes, controllerActionDescriptor.MethodInfo),
                            Obsolete = (controllerActionDescriptor.ControllerTypeInfo.GetCustomAttributes<ObsoleteAttribute>().Any() || controllerActionDescriptor.MethodInfo.GetCustomAttributes<ObsoleteAttribute>().Any()) ? true : (bool?)null,
                        };
                    })
                )
                .ToList();
        }

        private IList<ApiParameter> getParameters(IEnumerable<ApiParameterDescription> parameterDescriptions, MethodInfo methodInfo)
        {
            var parameters = methodInfo.GetParameters();
            return parameterDescriptions
                .Select(_ => new ApiParameter
                {
                    Name = _.Name,
                    Summary = xmlDocmentationReader.GetSummary(methodInfo, _.Name),
                    Type = typeRegister.RegisterType(_.Type),
                    BindInclude = parameters.FirstOrDefault(__ => __.Name == _.Name)?.GetCustomAttribute<BindAttribute>()?.Include?.GetBind(toCamelCase),
                    Source = _.Source.Id,
                    Required = _.ModelMetadata?.IsBindingRequired,
                    DefaultValue = _.RouteInfo?.DefaultValue,
                })
                .ToList();
        }

        private IList<ApiResponse> getResponses(IEnumerable<ApiResponseType> supportedResponseTypes, MethodInfo methodInfo)
        {
            var liyanjieProducesResponseTypeAttributes = methodInfo.GetCustomAttributes<LiyanjieProducesResponseTypeAttribute>(true);
            return supportedResponseTypes
                .Select(_ => new ApiResponse
                {
                    StatusCode = _.StatusCode,
                    Summary = xmlDocmentationReader.GetSummary(methodInfo, _.StatusCode),
                    Type = typeRegister.RegisterType(_.Type),
                    BindExclude = liyanjieProducesResponseTypeAttributes.FirstOrDefault(__ => __.StatusCode == _.StatusCode)?.Excludes?.GetBind(toCamelCase),
                })
                .ToList();
        }
    }
}
