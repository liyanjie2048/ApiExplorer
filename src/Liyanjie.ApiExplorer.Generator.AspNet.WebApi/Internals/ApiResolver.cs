using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web.Http.Controllers;
using System.Web.Http.Description;
using Liyanjie.ApiExplorer.Generator.Interfaces;
using Liyanjie.ApiExplorer.Generator.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Liyanjie.ApiExplorer.Generator.AspNet.WebApi.Internals
{
    internal class ApiResolver : IApiResolver
    {
        readonly IApiExplorer apiExplorer;
        readonly ApiExplorerGeneratorOptions options;
        readonly ITypeRegister typeRegister;
        readonly IXmlDocmentationReader xmlDocmentationReader;
        readonly bool toCamelCase;

        public ApiResolver(IApiExplorer apiExplorer, JsonSerializerSettings jsonSerializerSettings, ApiExplorerGeneratorOptions options, ITypeRegister typeRegister, IXmlDocmentationReader xmlDocmentationReader)
        {
            this.apiExplorer = apiExplorer;
            this.toCamelCase = jsonSerializerSettings.Converters.OfType<StringEnumConverter>().FirstOrDefault()?.CamelCaseText ?? true;
            this.options = options;
            this.typeRegister = typeRegister;
            this.xmlDocmentationReader = xmlDocmentationReader;
        }

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

        IList<ApiHeader> getHeaders(IEnumerable<KeyValuePair<string, string>> globalHeaders)
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

        IList<ApiResource> getResources(Func<IApiDescription, bool> filter = null, Func<IApiDescription, object> order = null)
        {
            return apiExplorer.ApiDescriptions
                .Select(__ => new ApiDescription(__))
                .Where(filter ?? (__ => true))
                .OrderBy(order ?? (__ => (__ as ApiDescription).Description.RelativePath))
                .Select(__ => (__ as ApiDescription).Description)
                .Select(__ =>
                {
                    var reflectedActionDescriptor = __.ActionDescriptor as ReflectedHttpActionDescriptor;
                    return new ApiResource
                    {
                        GroupName = __.ActionDescriptor.ControllerDescriptor.ControllerName,
                        Path = __.RelativePath,
                        Method = __.HttpMethod.Method,
                        Summary = xmlDocmentationReader.GetSummary(reflectedActionDescriptor.MethodInfo),
                        //Timestamp = xmlDocmentationReader.GetTimestamp(reflectedActionDescriptor.MethodInfo),
                        Produces = __.SupportedRequestBodyFormatters.SelectMany(___ => ___.SupportedMediaTypes.Select(____ => ____.MediaType)).ToArray(),
                        Parameters = getParameters(__.ParameterDescriptions, reflectedActionDescriptor.MethodInfo),
                        Responses = getResponses(__.ResponseDescription, reflectedActionDescriptor.MethodInfo),
                        Changes = getChanges(reflectedActionDescriptor.MethodInfo),
                        Obsolete = (__.ActionDescriptor.ControllerDescriptor.GetCustomAttributes<ObsoleteAttribute>().Any() || __.ActionDescriptor.GetCustomAttributes<ObsoleteAttribute>().Any()) ? true : (bool?)null,
                    };
                })
                .ToList();
        }

        IList<ApiParameter> getParameters(IEnumerable<ApiParameterDescription> parameterDescriptions, MethodInfo methodInfo)
        {
            //var parameters = methodInfo.GetParameters();
            return parameterDescriptions
                .Select(_ => new ApiParameter
                {
                    Name = _.ParameterDescriptor.ParameterName,
                    Summary = xmlDocmentationReader.GetParameter(methodInfo, _.Name),
                    Type = typeRegister.RegisterType(_.ParameterDescriptor.ParameterType),
                    //BindInclude = parameters.FirstOrDefault(__ => __.Name == _.Name)?.GetCustomAttribute<Binding>()?.Include?.GetBind(toCamelCase),
                    Source = _.Source.ToString(),
                    Required = _.ParameterDescriptor.IsOptional == false,
                    DefaultValue = _.ParameterDescriptor.DefaultValue,
                })
                .ToList();
        }

        IList<ApiResponse> getResponses(ResponseDescription responseDescription, MethodInfo methodInfo)
        {
            return new List<ApiResponse>
            {
                new ApiResponse
                {
                    StatusCode = 200,
                    Summary = responseDescription.Documentation,
                    Type = typeRegister.RegisterType(responseDescription.ResponseType)
                }
            };
        }

        IList<ApiChange> getChanges(MethodInfo methodInfo)
        {
            return xmlDocmentationReader.GetChanges(methodInfo).Select(_ =>
            {
                DateTime.TryParse(_.Item1, out DateTime timestamp);
                return new ApiChange
                {
                    Timestamp = timestamp == DateTime.MinValue ? null : (DateTime?)timestamp,
                    Author = _.Item2,
                    Description = _.Item3,
                };
            }).ToList();
        }
    }
}
