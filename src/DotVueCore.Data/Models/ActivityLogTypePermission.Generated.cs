
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ActivityLogTypePermission {

        public ActivityLogTypePermission()
        {
            this.Mode = 1;
            OnCreated();
        }

        public virtual long ActivityLogTypePermissionId
        {
            get;
            set;
        }

        public virtual long ActivityTypeId
        {
            get;
            set;
        }

        public virtual long RoleId
        {
            get;
            set;
        }

        public virtual bool Permission
        {
            get;
            set;
        }

        public virtual System.Nullable<long> FilterId
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

        public virtual ActivityType ActivityType
        {
            get;
            set;
        }

        public virtual Role Role
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
