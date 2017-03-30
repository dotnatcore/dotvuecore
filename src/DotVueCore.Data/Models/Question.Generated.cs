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
    public partial class Question {

        public Question()
        {
            this.QuestionFillBlanks = new List<QuestionFillBlank>();
            this.QuestionFreeTexts = new List<QuestionFreeText>();
            this.QuestionOptions = new List<QuestionOption>();
            this.RandomizeQuestions_QuestionId = new List<RandomizeQuestion>();
            this.RandomizeQuestions_RandomQuestionId = new List<RandomizeQuestion>();
            this.TestQuestions = new List<TestQuestion>();
            this.UploadFiles = new List<UploadFile>();
            this.UserQuestions = new List<UserQuestion>();
            OnCreated();
        }

        public virtual long QuestionId
        {
            get;
            set;
        }

        public virtual string QuestionName
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionTypeId
        {
            get;
            set;
        }

        public virtual long RtoId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Weight
        {
            get;
            set;
        }

        public virtual string Feedback
        {
            get;
            set;
        }

        public virtual System.Nullable<int> RandomSetCount
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

        public virtual System.Nullable<decimal> AccumulatedPoints
        {
            get;
            set;
        }

        public virtual IList<QuestionFillBlank> QuestionFillBlanks
        {
            get;
            set;
        }

        public virtual IList<QuestionFreeText> QuestionFreeTexts
        {
            get;
            set;
        }

        public virtual IList<QuestionOption> QuestionOptions
        {
            get;
            set;
        }

        public virtual QuestionType QuestionType
        {
            get;
            set;
        }

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }

        public virtual IList<RandomizeQuestion> RandomizeQuestions_QuestionId
        {
            get;
            set;
        }

        public virtual IList<RandomizeQuestion> RandomizeQuestions_RandomQuestionId
        {
            get;
            set;
        }

        public virtual IList<TestQuestion> TestQuestions
        {
            get;
            set;
        }

        public virtual IList<UploadFile> UploadFiles
        {
            get;
            set;
        }

        public virtual IList<UserQuestion> UserQuestions
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
