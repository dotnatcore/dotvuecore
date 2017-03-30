
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ActivityLog {

        public ActivityLog()
        {
            OnCreated();
        }

        public virtual long ActivityLogId
        {
            get;
            set;
        }

        public virtual long ActivityTypeId
        {
            get;
            set;
        }

        public virtual long UserId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ModuleId
        {
            get;
            set;
        }

        public virtual string Action
        {
            get;
            set;
        }

        public virtual string IPAddress
        {
            get;
            set;
        }

        public virtual string ActivityName
        {
            get;
            set;
        }

        public virtual string ActivityDescription
        {
            get;
            set;
        }

        public virtual System.DateTime CreatedDate
        {
            get;
            set;
        }

        public virtual System.Nullable<long> AnyId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> AnyId2
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ActorId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RtoId
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

        public virtual ActivityType ActivityType
        {
            get;
            set;
        }

        public virtual Module Module
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
