﻿using System;
using System.Collections.Generic;
using System.Reflection;

namespace DotVueCore.ExMapper
{
    internal static class ReflectionExtensions
    {
        public static IEnumerable<PropertyInfo> FindProperties(this Type type, string name, BindingFlags bindingFlags = BindingFlags.Instance | BindingFlags.Public)
        {
            PropertyInfo property = null;
            foreach (var propName in name.Split('.'))
            {
                if (property == null)
                {
                    property = type.GetProperty(propName, bindingFlags);
                    ThrowIfPropertyNull(property, name);
                    yield return property;
                    continue;
                }

                property = property.PropertyType.GetProperty(propName, bindingFlags);
                ThrowIfPropertyNull(property, name);
                yield return property;
            }
        }

        public static void ThrowIfPropertyNull(PropertyInfo propertyInfo, string name)
        {
            if (propertyInfo == null)
                throw new ArgumentOutOfRangeException(nameof(name), $"Property name {name} is not valid.");
        }
    }
}
