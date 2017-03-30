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
    public partial class CompleteType {

        public CompleteType()
        {
            this.Assignments = new List<Assignment>();
            this.Contents = new List<Content>();
            this.UploadFiles = new List<UploadFile>();
            OnCreated();
        }

        public virtual long CompleteTypeId
        {
            get;
            set;
        }

        public virtual string CompleteTypeName
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

        public virtual IList<Assignment> Assignments
        {
            get;
            set;
        }

        public virtual IList<Content> Contents
        {
            get;
            set;
        }

        public virtual IList<UploadFile> UploadFiles
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
