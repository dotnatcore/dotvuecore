
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class QualificationGroupSetRule {

        public QualificationGroupSetRule()
        {
            OnCreated();
        }

        public virtual long QualificationGroupSetRuleId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationGroupSetId
        {
            get;
            set;
        }

        public virtual string RuleType
        {
            get;
            set;
        }

        public virtual int RuleValue
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

        public virtual string RuleFor
        {
            get;
            set;
        }

        public virtual QualificationGroupSet QualificationGroupSet
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
