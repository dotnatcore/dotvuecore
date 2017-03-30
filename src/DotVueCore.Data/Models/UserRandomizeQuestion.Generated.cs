
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserRandomizeQuestion {

        public UserRandomizeQuestion()
        {
            OnCreated();
        }

        public virtual long UserRandomizeQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserRandomQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RandomizeQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Sequence
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

        public virtual UserQuestion UserQuestion_UserRandomQuestionId
        {
            get;
            set;
        }

        public virtual UserQuestion UserQuestion_UserQuestionId
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
