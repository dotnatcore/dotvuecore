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
    public partial class UserUnit {

        public UserUnit()
        {
            this.Status = 0;
            this.IsOutcome = false;
            this.UserAssignments = new List<UserAssignment>();
            this.UserContents = new List<UserContent>();
            this.UserScorms = new List<UserScorm>();
            this.UserTests = new List<UserTest>();
            this.UserUploadFiles = new List<UserUploadFile>();
            OnCreated();
        }

        public virtual long UserUnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserQualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> NoOfContent
        {
            get;
            set;
        }

        public virtual System.Nullable<int> NoOfPending
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsOutcome
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitId
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

        public virtual System.Nullable<int> NoOfComplete
        {
            get;
            set;
        }

        public virtual IList<UserAssignment> UserAssignments
        {
            get;
            set;
        }

        public virtual IList<UserContent> UserContents
        {
            get;
            set;
        }

        public virtual IList<UserScorm> UserScorms
        {
            get;
            set;
        }

        public virtual IList<UserTest> UserTests
        {
            get;
            set;
        }

        public virtual Unit Unit
        {
            get;
            set;
        }

        public virtual UserQualification UserQualification
        {
            get;
            set;
        }

        public virtual IList<UserUploadFile> UserUploadFiles
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
