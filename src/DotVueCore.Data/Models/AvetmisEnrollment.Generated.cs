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
    public partial class AvetmisEnrollment {

        public AvetmisEnrollment()
        {
            OnCreated();
        }

        public virtual long AvetmisEnrollmentId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationOrgId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> DeliveryLocationId
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> ActivityStartDate
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> ActivityEndDate
        {
            get;
            set;
        }

        public virtual string NationalFundingSourceId
        {
            get;
            set;
        }

        public virtual string CommencingProgramId
        {
            get;
            set;
        }

        public virtual string StateFundingSourceId
        {
            get;
            set;
        }

        public virtual string FeeExemptionConcessionId
        {
            get;
            set;
        }

        public virtual string OrgOutcomeId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrgOutcomeBy
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> OrgOutcomeDate
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

        public virtual long EnrollYear
        {
            get;
            set;
        }

        public virtual DeliveryLocation DeliveryLocation
        {
            get;
            set;
        }

        public virtual Unit Unit
        {
            get;
            set;
        }

        public virtual QualificationOrg QualificationOrg
        {
            get;
            set;
        }

        public virtual User User
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
