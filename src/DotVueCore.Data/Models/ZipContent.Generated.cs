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
    public partial class ZipContent {

        public ZipContent()
        {
            OnCreated();
        }

        public virtual long ZipContentId
        {
            get;
            set;
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

        public virtual int Action
        {
            get;
            set;
        }

        public virtual long ActionBy
        {
            get;
            set;
        }

        public virtual System.DateTime ActionDate
        {
            get;
            set;
        }

        public virtual int Mode
        {
            get;
            set;
        }

        public virtual System.Nullable<int> CompletedAction
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> CompletedDate
        {
            get;
            set;
        }

        public virtual File File
        {
            get;
            set;
        }

        public virtual ZipJob ZipJob
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
