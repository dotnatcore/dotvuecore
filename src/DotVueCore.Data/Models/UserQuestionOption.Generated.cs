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
    public partial class UserQuestionOption {

        public UserQuestionOption()
        {
            OnCreated();
        }

        public virtual long UserQuestionOptionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionOptionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionOptionDropId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Sequence
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsCorrectAnswer
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> UserAnswer
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

        public virtual QuestionOption QuestionOption
        {
            get;
            set;
        }

        public virtual UserQuestion UserQuestion
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
