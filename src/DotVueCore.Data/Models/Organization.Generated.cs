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
    public partial class Organization {

        public Organization()
        {
            this.ActivityLogs = new List<ActivityLog>();
            this.ClassInfos = new List<ClassInfo>();
            this.Envets = new List<Envet>();
            this.Invoices = new List<Invoice>();
            this.OrganizationAddressInfos = new List<OrganizationAddressInfo>();
            this.OrganizationUsers = new List<OrganizationUser>();
            this.ProductFiles = new List<ProductFile>();
            this.QualificationOrgs = new List<QualificationOrg>();
            this.QualificationTranProducts = new List<QualificationTranProduct>();
            this.RtoOrganizations = new List<RtoOrganization>();
            this.RtoOrganizationUsers = new List<RtoOrganizationUser>();
            this.Settings = new List<Setting>();
            this.UserQualifications = new List<UserQualification>();
            OnCreated();
        }

        public virtual long OrganizationId
        {
            get;
            set;
        }

        /// <summary>
        /// Organisation ID
        /// </summary>
        public virtual string OrganizationCode
        {
            get;
            set;
        }

        public virtual string OrganizationName
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationTypeId
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

        public virtual string AccountEmail
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string FinanceEmail
        {
            get;
            set;
        }

        /// <summary>
        /// User Register Organization
        /// </summary>
        public virtual System.Nullable<long> UserRegisterId
        {
            get;
            set;
        }

        public virtual string Logo
        {
            get;
            set;
        }

        public virtual System.Nullable<long> LanguageId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> TimeZoneId
        {
            get;
            set;
        }

        public virtual string DateFormat
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CurrencyId
        {
            get;
            set;
        }

        public virtual string InternalAnnounce
        {
            get;
            set;
        }

        public virtual string ExternalAnnounce
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsSameAddress
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

        public virtual string Favicon
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsDownLoadMoA
        {
            get;
            set;
        }

        public virtual IList<ActivityLog> ActivityLogs
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

        public virtual IList<Invoice> Invoices
        {
            get;
            set;
        }

        public virtual IList<OrganizationAddressInfo> OrganizationAddressInfos
        {
            get;
            set;
        }

        public virtual Language Language
        {
            get;
            set;
        }

        public virtual OrganizationType OrganizationType
        {
            get;
            set;
        }

        public virtual IList<OrganizationUser> OrganizationUsers
        {
            get;
            set;
        }

        public virtual IList<ProductFile> ProductFiles
        {
            get;
            set;
        }

        public virtual IList<QualificationOrg> QualificationOrgs
        {
            get;
            set;
        }

        public virtual IList<QualificationTranProduct> QualificationTranProducts
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

        public virtual IList<Setting> Settings
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
