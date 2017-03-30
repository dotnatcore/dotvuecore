
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class Role {

        public Role()
        {
            this.Mode = 1;
            this.ActivityLogTypePermissions = new List<ActivityLogTypePermission>();
            this.OrganizationUsers = new List<OrganizationUser>();
            this.RtoUsers = new List<RtoUser>();
            OnCreated();
        }

        public virtual long RoleId
        {
            get;
            set;
        }

        public virtual string RoleName
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

        public virtual IList<ActivityLogTypePermission> ActivityLogTypePermissions
        {
            get;
            set;
        }

        public virtual IList<OrganizationUser> OrganizationUsers
        {
            get;
            set;
        }

        public virtual IList<RtoUser> RtoUsers
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
