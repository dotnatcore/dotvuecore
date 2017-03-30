
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class AddressInfo {

        public AddressInfo()
        {
            this.DeliveryLocations = new List<DeliveryLocation>();
            this.OrganizationAddressInfos = new List<OrganizationAddressInfo>();
            this.RtoAddressInfos = new List<RtoAddressInfo>();
            this.UserAddressInfos = new List<UserAddressInfo>();
            OnCreated();
        }

        public virtual long AddressId
        {
            get;
            set;
        }

        public virtual string AddressFirstLine
        {
            get;
            set;
        }

        public virtual string AddressSecondLine
        {
            get;
            set;
        }

        public virtual string Suburb
        {
            get;
            set;
        }

        public virtual System.Nullable<long> StateId
        {
            get;
            set;
        }

        public virtual string Postcode
        {
            get;
            set;
        }

        /// <summary>
        /// 1=Org Street Address,2=Org Postal Address,6=RTO Address  Info,7=RTO Delivery Location
        /// </summary>
        public virtual System.Nullable<int> AddressTypeId
        {
            get;
            set;
        }

        public virtual string BuildingName
        {
            get;
            set;
        }

        public virtual string FlatUnitDetail
        {
            get;
            set;
        }

        public virtual string StreetNumber
        {
            get;
            set;
        }

        public virtual string StreetName
        {
            get;
            set;
        }

        public virtual string PostalDeliveryBox
        {
            get;
            set;
        }

        public virtual string LocationSuburb
        {
            get;
            set;
        }

        public virtual System.Nullable<long> CountryId
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

        public virtual IList<DeliveryLocation> DeliveryLocations
        {
            get;
            set;
        }

        public virtual IList<OrganizationAddressInfo> OrganizationAddressInfos
        {
            get;
            set;
        }

        public virtual IList<RtoAddressInfo> RtoAddressInfos
        {
            get;
            set;
        }

        public virtual IList<UserAddressInfo> UserAddressInfos
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
