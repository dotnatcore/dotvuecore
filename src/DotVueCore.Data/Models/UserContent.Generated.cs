
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserContent {

        public UserContent()
        {
            this.Status = 0;
            OnCreated();
        }

        public virtual long UserContentId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserUnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ContentId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserAnswer
        {
            get;
            set;
        }

        public virtual string Remark
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
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

        public virtual Content Content
        {
            get;
            set;
        }

        public virtual UserUnit UserUnit
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
