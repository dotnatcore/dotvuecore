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
    public partial class Test {

        public Test()
        {
            this.Duration = 30;
            this.MinPassPercentage = 60m;
            this.CourseTests = new List<CourseTest>();
            this.TestQuestions = new List<TestQuestion>();
            this.UnitTests = new List<UnitTest>();
            this.UserTests = new List<UserTest>();
            OnCreated();
        }

        public virtual long TestId
        {
            get;
            set;
        }

        public virtual string TestName
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Duration
        {
            get;
            set;
        }

        /// <summary>
        /// MinimunPassingPercentage
        /// </summary>
        public virtual System.Nullable<decimal> MinPassPercentage
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsShuffleQuestion
        {
            get;
            set;
        }

        /// <summary>
        /// IsShufflePossibleAnswer
        /// </summary>
        public virtual System.Nullable<bool> IsShufflePossibleAns
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> Repetition
        {
            get;
            set;
        }

        /// <summary>
        /// IsShowCorrectAnswer
        /// </summary>
        public virtual System.Nullable<bool> IsShowCorrectAns
        {
            get;
            set;
        }

        /// <summary>
        /// ShowCorrectAnswerType    1=When Passed,2=Aways
        /// </summary>
        public virtual System.Nullable<int> ShowCorrectAnsType
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsShowScore
        {
            get;
            set;
        }

        /// <summary>
        /// IsShowGivenAnswer
        /// </summary>
        public virtual System.Nullable<bool> IsShowGivenAns
        {
            get;
            set;
        }

        /// <summary>
        /// IsShowStatisticAfterCompletion
        /// </summary>
        public virtual System.Nullable<bool> IsShowStatisticAfterCom
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsShowCorrectOrWrongIndicator
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsHideCorrectlyAnsweredQuestion
        {
            get;
            set;
        }

        /// <summary>
        /// IsAllowMovementToNextOrPreviousQuestion
        /// </summary>
        public virtual System.Nullable<bool> IsAllowMoveNextPrevQuestion
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsMustCorrectBeforeNextQuestion
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsAbandonWhenNotPassExactly
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsRequireSnapshot
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string PassedMessage
        {
            get;
            set;
        }

        public virtual string NotPassedMessage
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

        public virtual IList<CourseTest> CourseTests
        {
            get;
            set;
        }

        public virtual IList<TestQuestion> TestQuestions
        {
            get;
            set;
        }

        public virtual IList<UnitTest> UnitTests
        {
            get;
            set;
        }

        public virtual IList<UserTest> UserTests
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
