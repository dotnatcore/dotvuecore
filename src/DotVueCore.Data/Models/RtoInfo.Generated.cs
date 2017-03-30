
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class RtoInfo {

        public RtoInfo()
        {
            this.ActivityLogs = new List<ActivityLog>();
            this.CourseInfos = new List<CourseInfo>();
            this.Envets = new List<Envet>();
            this.Invoices = new List<Invoice>();
            this.ProductFiles = new List<ProductFile>();
            this.QualificationScopes = new List<QualificationScope>();
            this.QualificationTranProducts = new List<QualificationTranProduct>();
            this.Questions = new List<Question>();
            this.RtoAddressInfos = new List<RtoAddressInfo>();
            this.RtoOrganizations = new List<RtoOrganization>();
            this.RtoOrganizationUsers = new List<RtoOrganizationUser>();
            this.RtoUsers = new List<RtoUser>();
            this.Settings = new List<Setting>();
            this.Units = new List<Unit>();
            OnCreated();
        }

        public virtual long RtoId
        {
            get;
            set;
        }

        public virtual string RtoCode
        {
            get;
            set;
        }

        public virtual string RtoName
        {
            get;
            set;
        }

        public virtual string RTODescription
        {
            get;
            set;
        }

        public virtual string MainEmail
        {
            get;
            set;
        }

        public virtual string AccountEmail
        {
            get;
            set;
        }

        public virtual string Logo
        {
            get;
            set;
        }

        public virtual string Favicon
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationTypeId
        {
            get;
            set;
        }

        public virtual string DeliverLocationId
        {
            get;
            set;
        }

        public virtual string DeliverLocationName
        {
            get;
            set;
        }

        public virtual string ContactName
        {
            get;
            set;
        }

        public virtual string TelephoneNumber
        {
            get;
            set;
        }

        public virtual string FacsimileNumber
        {
            get;
            set;
        }

        public virtual string EmailAddress
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

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string RtoAbn
        {
            get;
            set;
        }

        public virtual IList<ActivityLog> ActivityLogs
        {
            get;
            set;
        }

        public virtual IList<CourseInfo> CourseInfos
        {
            get;
            set;
        }

        public virtual IList<Envet> Envets
        {
            get;
            set;
        }

        public virtual IList<Invoice> Invoices
        {
            get;
            set;
        }

        public virtual IList<ProductFile> ProductFiles
        {
            get;
            set;
        }

        public virtual IList<QualificationScope> QualificationScopes
        {
            get;
            set;
        }

        public virtual IList<QualificationTranProduct> QualificationTranProducts
        {
            get;
            set;
        }

        public virtual IList<Question> Questions
        {
            get;
            set;
        }

        public virtual IList<RtoAddressInfo> RtoAddressInfos
        {
            get;
            set;
        }

        public virtual IList<RtoOrganization> RtoOrganizations
        {
            get;
            set;
        }

        public virtual IList<RtoOrganizationUser> RtoOrganizationUsers
        {
            get;
            set;
        }

        public virtual IList<RtoUser> RtoUsers
        {
            get;
            set;
        }

        public virtual IList<Setting> Settings
        {
            get;
            set;
        }

        public virtual IList<Unit> Units
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
