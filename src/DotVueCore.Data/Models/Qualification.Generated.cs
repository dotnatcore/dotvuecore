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
    public partial class Qualification {

        public Qualification()
        {
            this.UsageRecommendation = 1;
            this.ReleaseStatus = 1;
            this.IsPublish = false;
            this.IsQpr = false;
            this.IsUnitBuilder = false;
            this.QualificationGroups = new List<QualificationGroup>();
            this.QualificationGroupSets = new List<QualificationGroupSet>();
            this.QualificationScopes = new List<QualificationScope>();
            this.QualificationUnitMasters = new List<QualificationUnitMaster>();
            this.QualificationUnits = new List<QualificationUnit>();
            this.TrainingQualifications = new List<TrainingQualification>();
            this.UserQualifications = new List<UserQualification>();
            OnCreated();
        }

        public virtual long QualificationId
        {
            get;
            set;
        }

        /// <summary>
        /// Code
        /// </summary>
        public virtual string QualificationCode
        {
            get;
            set;
        }

        /// <summary>
        /// 1-6
        /// </summary>
        public virtual System.Nullable<int> QualificationLevel
        {
            get;
            set;
        }

        /// <summary>
        /// Title
        /// </summary>
        public virtual string QualificationName
        {
            get;
            set;
        }

        /// <summary>
        /// Usage Recommendation >>1=Current,2=Superseded
        /// </summary>
        public virtual System.Nullable<int> UsageRecommendation
        {
            get;
            set;
        }

        public virtual string PRI
        {
            get;
            set;
        }

        public virtual string PLEI
        {
            get;
            set;
        }

        public virtual string PFEI
        {
            get;
            set;
        }

        public virtual string ANZSCO
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Release
        {
            get;
            set;
        }

        /// <summary>
        /// Release Status >> 1=Current,2=Replaced
        /// </summary>
        public virtual System.Nullable<int> ReleaseStatus
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsPublish
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsQpr
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsUnitBuilder
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string PromoVideo
        {
            get;
            set;
        }

        public virtual string PromoFile
        {
            get;
            set;
        }

        public virtual System.Nullable<int> DeliveryOptionId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TrainingArrangement
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TimeLimit
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CertificateId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> CertificateDuration
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> CanReExpired
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> PublishDate
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

        public virtual System.Nullable<int> QualificationType
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> ReleaseDate
        {
            get;
            set;
        }

        public virtual System.Nullable<int> NoCoreUnit
        {
            get;
            set;
        }

        public virtual System.Nullable<int> NoElectiveUnit
        {
            get;
            set;
        }

        public virtual string TgaUrl
        {
            get;
            set;
        }

        public virtual IList<QualificationGroup> QualificationGroups
        {
            get;
            set;
        }

        public virtual IList<QualificationGroupSet> QualificationGroupSets
        {
            get;
            set;
        }

        public virtual IList<QualificationScope> QualificationScopes
        {
            get;
            set;
        }

        public virtual IList<QualificationUnitMaster> QualificationUnitMasters
        {
            get;
            set;
        }

        public virtual IList<QualificationUnit> QualificationUnits
        {
            get;
            set;
        }

        public virtual IList<TrainingQualification> TrainingQualifications
        {
            get;
            set;
        }

        public virtual IList<UserQualification> UserQualifications
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
