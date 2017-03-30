
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class UploadFile {

        public UploadFile()
        {
            this.CourseUploadFiles = new List<CourseUploadFile>();
            this.UnitUploadFiles = new List<UnitUploadFile>();
            this.UserUploadFiles = new List<UserUploadFile>();
            OnCreated();
        }

        public virtual long UploadFileId
        {
            get;
            set;
        }

        public virtual string UploadFileName
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CompleteTypeId
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> AllowAccess
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TimeLimit
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QuestionId
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

        public virtual System.Nullable<bool> IsShare
        {
            get;
            set;
        }

        public virtual string TypeName
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Size
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsShow
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

        public virtual IList<CourseUploadFile> CourseUploadFiles
        {
            get;
            set;
        }

        public virtual IList<UnitUploadFile> UnitUploadFiles
        {
            get;
            set;
        }

        public virtual CompleteType CompleteType
        {
            get;
            set;
        }

        public virtual Question Question
        {
            get;
            set;
        }

        public virtual IList<UserUploadFile> UserUploadFiles
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
