
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserQualification {

        public UserQualification()
        {
            this.Progress = 0m;
            this.Status = 1;
            this.UserStates = new List<UserState>();
            this.UserTestStates = new List<UserTestState>();
            this.UserUnits = new List<UserUnit>();
            OnCreated();
        }

        public virtual long UserQualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationOrgId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> YearId
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Progress
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
        {
            get;
            set;
        }

        public virtual System.Nullable<int> NoOfContent
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

        public virtual System.Nullable<int> StudyReasonId
        {
            get;
            set;
        }

        public virtual QualificationOrg QualificationOrg
        {
            get;
            set;
        }

        public virtual Qualification Qualification
        {
            get;
            set;
        }

        public virtual Organization Organization
        {
            get;
            set;
        }

        public virtual User User
        {
            get;
            set;
        }

        public virtual IList<UserState> UserStates
        {
            get;
            set;
        }

        public virtual IList<UserTestState> UserTestStates
        {
            get;
            set;
        }

        public virtual IList<UserUnit> UserUnits
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
