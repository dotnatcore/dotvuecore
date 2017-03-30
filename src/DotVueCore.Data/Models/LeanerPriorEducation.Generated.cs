﻿
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class LeanerPriorEducation {

        public LeanerPriorEducation()
        {
            OnCreated();
        }

        public virtual long LeanerPriorEducationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> LearnerId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> PriorEducationId
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> PriorEducationFlag
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

        public virtual LearnerInfo LearnerInfo
        {
            get;
            set;
        }

        public virtual PriorEducation PriorEducation
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
