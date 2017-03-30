
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UserQuestionTemplate {

        public UserQuestionTemplate()
        {
            this.UserQuestionOptionTemplates = new List<UserQuestionOptionTemplate>();
            OnCreated();
        }

        public virtual long UserQuestionTemplateId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserTestTemplateId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ParentQuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionId
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Weight
        {
            get;
            set;
        }

        public virtual System.Nullable<int> QuestionTemplateType
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Sequence
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsRandom
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

        public virtual IList<UserQuestionOptionTemplate> UserQuestionOptionTemplates
        {
            get;
            set;
        }

        public virtual UserTestTemplate UserTestTemplate
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
