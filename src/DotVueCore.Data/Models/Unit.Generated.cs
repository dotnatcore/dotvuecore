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
    public partial class Unit {

        public Unit()
        {
            this.AvetmisEnrollments = new List<AvetmisEnrollment>();
            this.ClassInfos = new List<ClassInfo>();
            this.Envets = new List<Envet>();
            this.Evidences = new List<Evidence>();
            this.QualificationOrgUnits = new List<QualificationOrgUnit>();
            this.QualificationTranUnits = new List<QualificationTranUnit>();
            this.UnitAssignments = new List<UnitAssignment>();
            this.UnitContents = new List<UnitContent>();
            this.UnitScorms = new List<UnitScorm>();
            this.UnitSections = new List<UnitSection>();
            this.UnitTests = new List<UnitTest>();
            this.UnitUploadFiles = new List<UnitUploadFile>();
            this.UserUnits = new List<UserUnit>();
            OnCreated();
        }

        public virtual long UnitId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UnitMasterId
        {
            get;
            set;
        }

        public virtual string UnitCode
        {
            get;
            set;
        }

        public virtual string UnitName
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        /// <summary>
        /// 1=Online,2=Blended,3=Face to face,4=Apprenticeship,5=Traineeship,6=Distance Learning,7=Workplace learning
        /// </summary>
        public virtual System.Nullable<int> DeliveryId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RtoId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> SubjectFlag
        {
            get;
            set;
        }

        public virtual System.Nullable<long> SubjectFiled
        {
            get;
            set;
        }

        public virtual string FieldEducation
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TimeLimit
        {
            get;
            set;
        }

        public virtual System.Nullable<long> VetFlag
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

        public virtual System.Nullable<long> TrainerZipFileId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> StudentZipFileId
        {
            get;
            set;
        }

        public virtual IList<AvetmisEnrollment> AvetmisEnrollments
        {
            get;
            set;
        }

        public virtual IList<ClassInfo> ClassInfos
        {
            get;
            set;
        }

        public virtual IList<Envet> Envets
        {
            get;
            set;
        }

        public virtual IList<Evidence> Evidences
        {
            get;
            set;
        }

        public virtual IList<QualificationOrgUnit> QualificationOrgUnits
        {
            get;
            set;
        }

        public virtual IList<QualificationTranUnit> QualificationTranUnits
        {
            get;
            set;
        }

        public virtual IList<UnitAssignment> UnitAssignments
        {
            get;
            set;
        }

        public virtual IList<UnitContent> UnitContents
        {
            get;
            set;
        }

        public virtual File File_StudentZipFileId
        {
            get;
            set;
        }

        public virtual File File_TrainerZipFileId
        {
            get;
            set;
        }

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }

        public virtual UnitMaster UnitMaster
        {
            get;
            set;
        }

        public virtual IList<UnitScorm> UnitScorms
        {
            get;
            set;
        }

        public virtual IList<UnitSection> UnitSections
        {
            get;
            set;
        }

        public virtual IList<UnitTest> UnitTests
        {
            get;
            set;
        }

        public virtual IList<UnitUploadFile> UnitUploadFiles
        {
            get;
            set;
        }

        public virtual IList<UserUnit> UserUnits
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
