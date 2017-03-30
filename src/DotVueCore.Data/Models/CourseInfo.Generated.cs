
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class CourseInfo {

        public CourseInfo()
        {
            this.CourseForId = 1;
            this.CourseContents = new List<CourseContent>();
            this.CourseTests = new List<CourseTest>();
            this.CourseUploadFiles = new List<CourseUploadFile>();
            OnCreated();
        }

        public virtual long CourseId
        {
            get;
            set;
        }

        public virtual string CourseName
        {
            get;
            set;
        }

        /// <summary>
        /// 1=For Trainner/Assessor,2=For Leanner
        /// </summary>
        public virtual System.Nullable<int> CourseForId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RtoId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Mode
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
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

        public virtual IList<CourseContent> CourseContents
        {
            get;
            set;
        }

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }

        public virtual IList<CourseTest> CourseTests
        {
            get;
            set;
        }

        public virtual IList<CourseUploadFile> CourseUploadFiles
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
