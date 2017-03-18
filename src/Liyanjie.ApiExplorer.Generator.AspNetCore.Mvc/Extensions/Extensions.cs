using Liyanjie.ApiExplorer.Generator.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Liyanjie.ApiExplorer.Generator.Extensions
{
    internal static class Extensions
    {
        public static ApiBind[] GetBind(this string[] properties, bool toCamelCase = false)
        {
            return getBind(properties, toCamelCase);
        }

        private static ApiBind[] getBind(string[] properties, bool toCamelCase = false)
        {
            if (properties == null)
                return null;

            var binds = new List<ApiBind>();
            foreach (var path in properties)
            {
                var property = getBind(path, properties, toCamelCase);
                if (!binds.Any(_ => _.Name == property.Name))
                    binds.Add(property);
            }
            return binds.ToArray();
        }

        private static ApiBind getBind(string property, string[] properties, bool toCamelCase = false)
        {
            if (property.IndexOf('.') < 0 && !properties.Any(_ => _.StartsWith(property + '.')))
                return new ApiBind
                {
                    Name = toCamelCase ? property.ToCamelCase() : property
                };

            property = property.IndexOf('.') > -1 ? property.Substring(0, property.IndexOf('.')) : property;
            var explands = properties.Where(_ => _.StartsWith(property + '.')).Select(_ => _.Replace(property + '.', string.Empty)).Where(_ => !string.IsNullOrWhiteSpace(_)).ToArray();
            return new ApiBind
            {
                Name = toCamelCase ? property.ToCamelCase() : property,
                Bind = getBind(explands, toCamelCase)
            };
        }

        public static string NoWrap(this string input)
        {
            return input?.Trim().Replace(Environment.NewLine, " ");
        }

        public static string ToCamelCase(this string input)
        {
            if (input == null)
                return null;

            if (input.Length < 2)
                return input.ToLower();

            var i = 0;
            var find = false;

            for (; i < input.Length; i++)
            {
                var value = (int)input[i];
                if (value < 65 || value > 90)
                {
                    find = true;
                    break;
                }
            }

            if (!find)
                i++;

            if (i < 1)
                return input;
            else if (i == 1)
                return $"{input.Substring(0, 1).ToLower()}{input.Substring(1)}";
            else
                return $"{input.Substring(0, i - 1).ToLower()}{input.Substring(i - 1)}";
        }
    }
}
