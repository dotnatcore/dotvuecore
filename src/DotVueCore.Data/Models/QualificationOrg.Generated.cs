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
    public partial class QualificationOrg {

        public QualificationOrg()
        {
            this.AvetmisEnrollments = new List<AvetmisEnrollment>();
            this.ClassInfos = new List<ClassInfo>();
            this.Envets = new List<Envet>();
            this.Evidences = new List<Evidence>();
            this.QualificationOrgUnits = new List<QualificationOrgUnit>();
            this.UserQualifications = new List<UserQualification>();
            OnCreated();
        }

        public virtual long QualificationOrgId
        {
            get;
            set;
        }

        public virtual string QualificationOrgName
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationTranProductId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> PublishDate
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

        public virtual IList<AvetmisEnrollment> AvetmisEnrollments
        {
            get;
            set;
        }

        public virtual IList<ClassInfo> ClassInfos
        {
            get;
            set;
        }

        public virtual IList<Envet> Envets
        {
            get;
            set;
        }

        public virtual IList<Evidence> Evidences
        {
            get;
            set;
        }

        public virtual Organization Organization
        {
            get;
            set;
        }

        public virtual QualificationTranProduct QualificationTranProduct
        {
            get;
            set;
        }

        public virtual IList<QualificationOrgUnit> QualificationOrgUnits
        {
            get;
            set;
        }

        public virtual IList<UserQualification> UserQualifications
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
