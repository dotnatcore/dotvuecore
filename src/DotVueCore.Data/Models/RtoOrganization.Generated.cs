
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class RtoOrganization {

        public RtoOrganization()
        {
            this.RtoOrganizationUsers = new List<RtoOrganizationUser>();
            OnCreated();
        }

        public virtual long RtoOrganizationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RtoId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationId
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

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }

        public virtual Organization Organization
        {
            get;
            set;
        }

        public virtual IList<RtoOrganizationUser> RtoOrganizationUsers
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
