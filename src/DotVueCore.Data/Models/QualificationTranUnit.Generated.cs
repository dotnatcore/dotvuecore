
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class QualificationTranUnit {

        public QualificationTranUnit()
        {
            OnCreated();
        }

        public virtual long QualificationTranUnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationTranId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationGroupId
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

        public virtual QualificationGroup QualificationGroup
        {
            get;
            set;
        }

        public virtual QualificationTran QualificationTran
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
