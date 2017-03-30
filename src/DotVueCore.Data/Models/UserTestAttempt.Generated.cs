
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserTestAttempt {

        public UserTestAttempt()
        {
            this.UserQuestionAttempts = new List<UserQuestionAttempt>();
            OnCreated();
        }

        public virtual long UserTestAttemptId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserTestId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> TestId
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

        public virtual IList<UserQuestionAttempt> UserQuestionAttempts
        {
            get;
            set;
        }

        public virtual UserTest UserTest
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
