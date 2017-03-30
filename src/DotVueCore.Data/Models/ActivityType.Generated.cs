
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ActivityType {

        public ActivityType()
        {
            this.ActivityLogs = new List<ActivityLog>();
            this.ActivityLogTypePermissions = new List<ActivityLogTypePermission>();
            OnCreated();
        }

        public virtual long ActivityTypeId
        {
            get;
            set;
        }

        public virtual long ModuleId
        {
            get;
            set;
        }

        public virtual string ActivityTypeName
        {
            get;
            set;
        }

        public virtual string ActivityTypeText
        {
            get;
            set;
        }

        public virtual System.DateTime CreatedDate
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

        public virtual IList<ActivityLog> ActivityLogs
        {
            get;
            set;
        }

        public virtual IList<ActivityLogTypePermission> ActivityLogTypePermissions
        {
            get;
            set;
        }

        public virtual Module Module
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
