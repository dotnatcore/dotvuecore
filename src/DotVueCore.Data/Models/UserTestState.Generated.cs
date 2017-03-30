
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserTestState {

        public UserTestState()
        {
            OnCreated();
        }

        public virtual long UserTestStateId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserQualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> TestId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> TimeUse
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
