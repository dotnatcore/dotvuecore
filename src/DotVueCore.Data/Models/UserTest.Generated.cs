
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserTest {

        public UserTest()
        {
            this.Status = 0;
            this.UserTestAttempts = new List<UserTestAttempt>();
            this.UserTestQuestions = new List<UserTestQuestion>();
            this.UserTestTemplates = new List<UserTestTemplate>();
            OnCreated();
        }

        public virtual long UserTestId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserUnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> TestId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsEvaluate
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsTimeOut
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsPassed
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> TimeUsed
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> UserPassPercentage
        {
            get;
            set;
        }

        public virtual System.Nullable<int> NoOfQuestion
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

        public virtual System.Nullable<System.DateTime> TestDated
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsAttempt
        {
            get;
            set;
        }

        public virtual IList<UserTestAttempt> UserTestAttempts
        {
            get;
            set;
        }

        public virtual IList<UserTestQuestion> UserTestQuestions
        {
            get;
            set;
        }

        public virtual Test Test
        {
            get;
            set;
        }

        public virtual UserUnit UserUnit
        {
            get;
            set;
        }

        public virtual IList<UserTestTemplate> UserTestTemplates
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
