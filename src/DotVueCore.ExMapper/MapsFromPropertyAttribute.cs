﻿using System;
using System.Linq;
using System.Reflection;

namespace DotVueCore.ExMapper
{
    /// <summary>
    /// Specifies that the target property maps from a property from the specified type.
    /// </summary>
    public class MapsFromPropertyAttribute : MapsPropertyAttribute
    {
        /// <summary>
        /// The type whose property the target property will be mapped from.
        /// </summary>
        public Type SourceType { get; }

        /// <summary>
        /// The name of the property to map from.
        /// </summary>
        public string PropertyName { get; }

        /// <summary>
        /// Creates the MapsFromProperty attribute.
        /// </summary>
        /// <param name="sourceType">The type whose property the target property will be mapped from.</param>
        /// <param name="propertyName">The name of the property to map from. Supports dot notation.</param>
        public MapsFromPropertyAttribute(Type sourceType, string propertyName)
        {
            SourceType = sourceType;
            PropertyName = propertyName;
        }

        internal override PropertyMapInfo GetPropertyMapInfo(PropertyInfo targetProperty)
        {
            var sourcePropertyInfo = SourceType.FindProperties(PropertyName);
            return new PropertyMapInfo
            {
                TargetType = targetProperty.DeclaringType,
                TargetPropertyInfo = targetProperty,
                SourceType = SourceType,
                SourcePropertyInfos = sourcePropertyInfo.ToArray()
            };
        }
    }
}
