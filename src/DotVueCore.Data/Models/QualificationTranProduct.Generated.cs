
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class QualificationTranProduct {

        public QualificationTranProduct()
        {
            OnCreated();
        }

        public virtual long QualificationTranProductId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationTranId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ProductFileId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationId
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

        public virtual System.Nullable<int> NoOfStream
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> UnitPrice
        {
            get;
            set;
        }

        public virtual QualificationOrg QualificationOrg
        {
            get;
            set;
        }

        public virtual ProductFile ProductFile
        {
            get;
            set;
        }

        public virtual QualificationTran QualificationTran
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
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
