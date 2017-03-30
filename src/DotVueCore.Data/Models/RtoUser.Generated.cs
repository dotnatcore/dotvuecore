
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class RtoUser {

        public RtoUser()
        {
            this.IsDefault = false;
            OnCreated();
        }

        public virtual long RtoUserId
        {
            get;
            set;
        }

        public virtual long RtoId
        {
            get;
            set;
        }

        public virtual long UserId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RoleId
        {
            get;
            set;
        }

        public virtual bool IsDefault
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> LastLoginDate
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

        public virtual Role Role
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
