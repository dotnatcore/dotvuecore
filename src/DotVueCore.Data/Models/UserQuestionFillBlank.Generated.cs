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
    public partial class UserQuestionFillBlank {

        public UserQuestionFillBlank()
        {
            this.UserQuestionFillBlankOptions = new List<UserQuestionFillBlankOption>();
            OnCreated();
        }

        public virtual long UserQuestionFillBlankId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionFillBlankId
        {
            get;
            set;
        }

        public virtual string QuestionAnswerText
        {
            get;
            set;
        }

        public virtual System.Nullable<int> QuestionAnswerIndex
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

        public virtual IList<UserQuestionFillBlankOption> UserQuestionFillBlankOptions
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
