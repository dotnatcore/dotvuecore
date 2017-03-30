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
    public partial class UserDocument {

        public UserDocument()
        {
            OnCreated();
        }

        public virtual long UserDocumentId
        {
            get;
            set;
        }

        public virtual long UserId
        {
            get;
            set;
        }

        public virtual string DocumentId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> FileId
        {
            get;
            set;
        }

        public virtual string FileExternalLink
        {
            get;
            set;
        }

        public virtual int Status
        {
            get;
            set;
        }

        public virtual string Message
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

        public virtual File File
        {
            get;
            set;
        }

        public virtual User User
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
