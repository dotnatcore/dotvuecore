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
    public partial class LearnerPostAddressInfo {

        public LearnerPostAddressInfo()
        {
            OnCreated();
        }

        public virtual long LearnerPostAddressId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        public virtual string ClientIdentifier
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

        public virtual string AddressPostalDeliveryBox
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

        public virtual string TelephoneNumberMobile
        {
            get;
            set;
        }

        public virtual string TelephoneNumberHome
        {
            get;
            set;
        }

        public virtual string TelephoneNumberWork
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

        public virtual User User
        {
            get;
            set;
        }

        public virtual CountryInfo CountryInfo
        {
            get;
            set;
        }

        public virtual StateInfo StateInfo
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
