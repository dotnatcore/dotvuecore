﻿
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class Scorm {

        public Scorm()
        {
            this.UnitScorms = new List<UnitScorm>();
            OnCreated();
        }

        public virtual long ScormId
        {
            get;
            set;
        }

        public virtual string ScormName
        {
            get;
            set;
        }

        public virtual string FileName
        {
            get;
            set;
        }

        public virtual string FilePath
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Width
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Height
        {
            get;
            set;
        }

        /// <summary>
        /// 1=Embedded,2=Pop-up
        /// </summary>
        public virtual System.Nullable<int> ShowAsType
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Mode
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CreatedBy
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> CreatedDate
        {
            get;
            set;
        }

        public virtual System.Nullable<long> LastModifiedBy
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> ModifiedDate
        {
            get;
            set;
        }

        public virtual System.Nullable<long> DeletedBy
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> DeletedDate
        {
            get;
            set;
        }

        public virtual IList<UnitScorm> UnitScorms
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
