﻿using System;
using System.Reflection;

namespace DotVueCore.ExMapper
{
    internal class PropertyMapInfo
    {
        public PropertyInfo[] SourcePropertyInfos { get; set; }
        public Type SourceType { get; set; }
        public PropertyInfo TargetPropertyInfo { get; set; }
        public Type TargetType { get; set; }
    }
}