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
    public partial class LearnerInfo {

        public LearnerInfo()
        {
            this.LeanerDisabilityOptions = new List<LeanerDisabilityOption>();
            this.LeanerPriorEducations = new List<LeanerPriorEducation>();
            OnCreated();
        }

        public virtual long LearnerId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        public virtual string USI
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> DisabilityFlag
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> PriorEducationFlag
        {
            get;
            set;
        }

        public virtual string HighestSchoolLevel
        {
            get;
            set;
        }

        public virtual string YearHighestSchool
        {
            get;
            set;
        }

        public virtual string IndigenousStatus
        {
            get;
            set;
        }

        public virtual System.Nullable<long> LanguageId
        {
            get;
            set;
        }

        public virtual string LabourForceStatus
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ProficiencyLanguage
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CountryOfBirthId
        {
            get;
            set;
        }

        public virtual string AtSchool
        {
            get;
            set;
        }

        public virtual string AddressLocation
        {
            get;
            set;
        }

        public virtual string Postcode
        {
            get;
            set;
        }

        public virtual System.Nullable<long> StateId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CountryId
        {
            get;
            set;
        }

        public virtual string AddressBuildingPropertyName
        {
            get;
            set;
        }

        public virtual string AddressDwellingType
        {
            get;
            set;
        }

        public virtual string AddressUnitNumber
        {
            get;
            set;
        }

        public virtual string AddressFloor
        {
            get;
            set;
        }

        public virtual string AddressRoadNumber
        {
            get;
            set;
        }

        public virtual string AddressLotNumber
        {
            get;
            set;
        }

        public virtual string AddressRoadName
        {
            get;
            set;
        }

        public virtual string AddressRoadType
        {
            get;
            set;
        }

        public virtual string AddressRoadSuffix
        {
            get;
            set;
        }

        public virtual string StatisticalAreaLevel1
        {
            get;
            set;
        }

        public virtual string StatisticalAreaLevel2
        {
            get;
            set;
        }

        public virtual System.Nullable<int> EnglishMainLanguageFlag
        {
            get;
            set;
        }

        public virtual string EducationIdentifier
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsSameAddress
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

        public virtual IList<LeanerDisabilityOption> LeanerDisabilityOptions
        {
            get;
            set;
        }

        public virtual IList<LeanerPriorEducation> LeanerPriorEducations
        {
            get;
            set;
        }

        public virtual CountryInfo CountryInfo_CountryId
        {
            get;
            set;
        }

        public virtual CountryInfo CountryInfo_CountryOfBirthId
        {
            get;
            set;
        }

        public virtual Language Language
        {
            get;
            set;
        }

        public virtual StateInfo StateInfo
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
