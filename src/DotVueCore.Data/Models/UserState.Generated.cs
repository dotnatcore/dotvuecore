
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserState {

        public UserState()
        {
            OnCreated();
        }

        public virtual long UserStateId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserQualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserUnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ContentTypeId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ItemId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserItemId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> ModeType
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

        public virtual UserQualification UserQualification
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
