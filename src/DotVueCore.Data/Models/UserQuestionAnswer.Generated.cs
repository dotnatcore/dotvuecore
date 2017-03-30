
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserQuestionAnswer {

        public UserQuestionAnswer()
        {
            OnCreated();
        }

        public virtual long UserQuestionAnswerId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserQuestionId
        {
            get;
            set;
        }

        public virtual string UserAnswerText
        {
            get;
            set;
        }

        public virtual string UserAnswerFileUrl
        {
            get;
            set;
        }

        public virtual string TrainerComment
        {
            get;
            set;
        }

        public virtual System.Nullable<long> TrainerId
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> CheckedTimeStamp
        {
            get;
            set;
        }

        public virtual string TrainerCommentFileUrl
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
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
