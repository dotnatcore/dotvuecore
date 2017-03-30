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
    public partial class Content {

        public Content()
        {
            this.CourseContents = new List<CourseContent>();
            this.UnitContents = new List<UnitContent>();
            this.UserContents = new List<UserContent>();
            OnCreated();
        }

        public virtual long ContentId
        {
            get;
            set;
        }

        public virtual string ContentName
        {
            get;
            set;
        }

        public virtual string ContentDescription
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CompleteTypeId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TimeLimit
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

        public virtual CompleteType CompleteType
        {
            get;
            set;
        }

        public virtual IList<CourseContent> CourseContents
        {
            get;
            set;
        }

        public virtual IList<UnitContent> UnitContents
        {
            get;
            set;
        }

        public virtual IList<UserContent> UserContents
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
