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
    public partial class File {

        public File()
        {
            this.FileRelations = new List<FileRelation>();
            this.Invoices = new List<Invoice>();
            this.ProductFiles = new List<ProductFile>();
            this.Units_StudentZipFileId = new List<Unit>();
            this.Units_TrainerZipFileId = new List<Unit>();
            this.UserDocuments = new List<UserDocument>();
            this.ZipContents = new List<ZipContent>();
            this.ZipJobs = new List<ZipJob>();
            OnCreated();
        }

        public virtual long FileId
        {
            get;
            set;
        }

        public virtual string FileName
        {
            get;
            set;
        }

        public virtual string FilePath
        {
            get;
            set;
        }

        public virtual System.Nullable<long> FileTypeId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> FileSize
        {
            get;
            set;
        }

        public virtual string FileUrl
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsShared
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

        public virtual System.Nullable<bool> FileAvailable
        {
            get;
            set;
        }

        public virtual IList<FileRelation> FileRelations
        {
            get;
            set;
        }

        public virtual FileType FileType
        {
            get;
            set;
        }

        public virtual IList<Invoice> Invoices
        {
            get;
            set;
        }

        public virtual IList<ProductFile> ProductFiles
        {
            get;
            set;
        }

        public virtual IList<Unit> Units_StudentZipFileId
        {
            get;
            set;
        }

        public virtual IList<Unit> Units_TrainerZipFileId
        {
            get;
            set;
        }

        public virtual IList<UserDocument> UserDocuments
        {
            get;
            set;
        }

        public virtual IList<ZipContent> ZipContents
        {
            get;
            set;
        }

        public virtual IList<ZipJob> ZipJobs
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
