
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class QualificationUnit {

        public QualificationUnit()
        {
            OnCreated();
        }

        public virtual long QualificationUnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitMasterId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationId
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

        public virtual Qualification Qualification
        {
            get;
            set;
        }

        public virtual UnitMaster UnitMaster
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
