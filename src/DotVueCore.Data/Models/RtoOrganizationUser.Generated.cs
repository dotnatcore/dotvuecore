
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class RtoOrganizationUser {

        public RtoOrganizationUser()
        {
            this.IsDownloadMoa = false;
            this.IsShowStartUp = true;
            this.IsAcceptTerm = false;
            this.IsDoneInduction = false;
            this.Mode = 1;
            OnCreated();
        }

        public virtual long RtoOrganizationUserId
        {
            get;
            set;
        }

        public virtual long OrganizationUserId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationId
        {
            get;
            set;
        }

        public virtual long RtoId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RtoOrganizationId
        {
            get;
            set;
        }

        /// <summary>
        /// For Admin Organization
        /// </summary>
        public virtual System.Nullable<bool> IsDownloadMoa
        {
            get;
            set;
        }

        /// <summary>
        /// For Admin Organization
        /// </summary>
        public virtual System.Nullable<bool> IsShowStartUp
        {
            get;
            set;
        }

        /// <summary>
        /// FOR Organization
        /// </summary>
        public virtual System.Nullable<bool> IsAcceptTerm
        {
            get;
            set;
        }

        /// <summary>
        /// For Accessor/Trainner
        /// </summary>
        public virtual System.Nullable<bool> IsDoneInduction
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

        public virtual OrganizationUser OrganizationUser
        {
            get;
            set;
        }

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }

        public virtual RtoOrganization RtoOrganization
        {
            get;
            set;
        }

        public virtual User User
        {
            get;
            set;
        }

        public virtual Organization Organization
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
