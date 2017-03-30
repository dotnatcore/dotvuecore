
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class QualificationGroup {

        public QualificationGroup()
        {
            this.QualificationGroupFilters = new List<QualificationGroupFilter>();
            this.QualificationGroupRules = new List<QualificationGroupRule>();
            this.QualificationOrgUnits = new List<QualificationOrgUnit>();
            this.QualificationTranUnits = new List<QualificationTranUnit>();
            this.QualificationUnits = new List<QualificationUnit>();
            OnCreated();
        }

        public virtual long QualificationGroupId
        {
            get;
            set;
        }

        public virtual string QualificationGroupName
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationGroupSetId
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsIndividual
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsPredetermined
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsRestricted
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

        public virtual IList<QualificationGroupFilter> QualificationGroupFilters
        {
            get;
            set;
        }

        public virtual IList<QualificationGroupRule> QualificationGroupRules
        {
            get;
            set;
        }

        public virtual QualificationGroupSet QualificationGroupSet
        {
            get;
            set;
        }

        public virtual Qualification Qualification
        {
            get;
            set;
        }

        public virtual IList<QualificationOrgUnit> QualificationOrgUnits
        {
            get;
            set;
        }

        public virtual IList<QualificationTranUnit> QualificationTranUnits
        {
            get;
            set;
        }

        public virtual IList<QualificationUnit> QualificationUnits
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
