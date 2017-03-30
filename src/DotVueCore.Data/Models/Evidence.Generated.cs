
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class Evidence {

        public Evidence()
        {
            OnCreated();
        }

        public virtual long EvidenceId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationOrgId
        {
            get;
            set;
        }

        public virtual string Title
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitId
        {
            get;
            set;
        }

        public virtual string FileName
        {
            get;
            set;
        }

        public virtual string FileUrl
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ToUserId
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsLeanerUpload
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsDisplayComp
        {
            get;
            set;
        }

        public virtual System.Nullable<int> EvidenceAction
        {
            get;
            set;
        }

        public virtual string Message
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
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

        public virtual User User
        {
            get;
            set;
        }

        public virtual QualificationOrg QualificationOrg
        {
            get;
            set;
        }

        public virtual Unit Unit
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
