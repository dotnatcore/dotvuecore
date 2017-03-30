
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class TrainerClassInfo {

        public TrainerClassInfo()
        {
            OnCreated();
        }

        public virtual long TrainerClassId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ClassId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        /// <summary>
        /// True=Trainer,False=Assessor
        /// </summary>
        public virtual System.Nullable<bool> IsTrainer
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

        public virtual ClassInfo ClassInfo
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
