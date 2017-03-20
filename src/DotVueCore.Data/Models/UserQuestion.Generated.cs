﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// Code is generated on: 3/7/2017 7:10:28 PM
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueApp.Data.Models
{
    public partial class UserQuestion {

        public UserQuestion()
        {
            this.Status = 1;
            this.UserQuestionAnswers = new List<UserQuestionAnswer>();
            this.UserQuestionAttempts = new List<UserQuestionAttempt>();
            this.UserQuestionFillBlanks = new List<UserQuestionFillBlank>();
            this.UserQuestionOptions = new List<UserQuestionOption>();
            this.UserRandomizeQuestions_UserRandomQuestionId = new List<UserRandomizeQuestion>();
            this.UserRandomizeQuestions_UserQuestionId = new List<UserRandomizeQuestion>();
            OnCreated();
        }

        public virtual long UserQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserTestQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> Status
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsEvaluate
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsPassed
        {
            get;
            set;
        }

        public virtual System.Nullable<long> Grade
        {
            get;
            set;
        }

        public virtual string Comment
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Weight
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionTypeId
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Point
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserTestId
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

        public virtual System.Nullable<int> NoOfAttempt
        {
            get;
            set;
        }

        public virtual IList<UserQuestionAnswer> UserQuestionAnswers
        {
            get;
            set;
        }

        public virtual IList<UserQuestionAttempt> UserQuestionAttempts
        {
            get;
            set;
        }

        public virtual IList<UserQuestionFillBlank> UserQuestionFillBlanks
        {
            get;
            set;
        }

        public virtual IList<UserQuestionOption> UserQuestionOptions
        {
            get;
            set;
        }

        public virtual Question Question
        {
            get;
            set;
        }

        public virtual UserTestQuestion UserTestQuestion
        {
            get;
            set;
        }

        public virtual IList<UserRandomizeQuestion> UserRandomizeQuestions_UserRandomQuestionId
        {
            get;
            set;
        }

        public virtual IList<UserRandomizeQuestion> UserRandomizeQuestions_UserQuestionId
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
