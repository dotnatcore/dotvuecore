﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// Code is generated on: 3/7/2017 7:10:28 PM
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ZipJob {

        public ZipJob()
        {
            this.ZipContents = new List<ZipContent>();
            OnCreated();
        }

        public virtual long JobId
        {
            get;
            set;
        }

        public virtual long FileId
        {
            get;
            set;
        }

        public virtual IList<ZipContent> ZipContents
        {
            get;
            set;
        }

        public virtual File File
        {
            get;
            set;
        }

        public virtual Job Job
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
