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
    public partial class QuestionOption {

        public QuestionOption()
        {
            this.Sequence = 0;
            this.UserQuestionOptions = new List<UserQuestionOption>();
            OnCreated();
        }

        public virtual long QuestionOptionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionId
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string DescriptionMatch
        {
            get;
            set;
        }

        public virtual string Remark
        {
            get;
            set;
        }

        public virtual string QuestionOptionImage
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsCorrectAnswer
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

        public virtual string QuestionOptionImageMatch
        {
            get;
            set;
        }

        public virtual Question Question
        {
            get;
            set;
        }

        public virtual IList<UserQuestionOption> UserQuestionOptions
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
