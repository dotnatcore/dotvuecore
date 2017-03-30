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
    public partial class QuestionFillBlank {

        public QuestionFillBlank()
        {
            this.QuestionFillBlankOptions = new List<QuestionFillBlankOption>();
            OnCreated();
        }

        public virtual long QuestionFillBlankId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionId
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

        public virtual IList<QuestionFillBlankOption> QuestionFillBlankOptions
        {
            get;
            set;
        }

        public virtual Question Question
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
