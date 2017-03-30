
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UnitMaster {

        public UnitMaster()
        {
            this.QualificationUnitMasters = new List<QualificationUnitMaster>();
            this.QualificationUnits = new List<QualificationUnit>();
            this.Units = new List<Unit>();
            OnCreated();
        }

        public virtual long UnitMasterId
        {
            get;
            set;
        }

        public virtual string UnitName
        {
            get;
            set;
        }

        public virtual string UnitCode
        {
            get;
            set;
        }

        public virtual string SFEI
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

        /// <summary>
        /// 1-6
        /// </summary>
        public virtual System.Nullable<int> UnitLevel
        {
            get;
            set;
        }

        public virtual IList<QualificationUnitMaster> QualificationUnitMasters
        {
            get;
            set;
        }

        public virtual IList<QualificationUnit> QualificationUnits
        {
            get;
            set;
        }

        public virtual IList<Unit> Units
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
