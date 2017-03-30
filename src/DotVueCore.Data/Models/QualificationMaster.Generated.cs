
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class QualificationMaster {

        public QualificationMaster()
        {
            OnCreated();
        }

        public virtual long QualificationId
        {
            get;
            set;
        }

        public virtual string QualificationCode
        {
            get;
            set;
        }

        public virtual string QualificationName
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string PromoVideo
        {
            get;
            set;
        }

        public virtual string PromoFile
        {
            get;
            set;
        }

        public virtual System.Nullable<int> DeliveryOptionId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TrainingArrangement
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TimeLimit
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CertificateId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> CertificateDuration
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> CanReExpired
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
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
