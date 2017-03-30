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
    public partial class Assignment {

        public Assignment()
        {
            this.UnitAssignments = new List<UnitAssignment>();
            this.UserAssignments = new List<UserAssignment>();
            OnCreated();
        }

        public virtual long AssignmentId
        {
            get;
            set;
        }

        public virtual string AssignmentName
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CompleteTypeId
        {
            get;
            set;
        }

        public virtual string AssignmentDescription
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

        public virtual CompleteType CompleteType
        {
            get;
            set;
        }

        public virtual IList<UnitAssignment> UnitAssignments
        {
            get;
            set;
        }

        public virtual IList<UserAssignment> UserAssignments
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
