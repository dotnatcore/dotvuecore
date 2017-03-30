
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class CountryInfo {

        public CountryInfo()
        {
            this.AddressInfos = new List<AddressInfo>();
            this.LearnerInfos_CountryId = new List<LearnerInfo>();
            this.LearnerInfos_CountryOfBirthId = new List<LearnerInfo>();
            this.LearnerPostAddressInfos = new List<LearnerPostAddressInfo>();
            this.StateInfos = new List<StateInfo>();
            OnCreated();
        }

        public virtual long CountryId
        {
            get;
            set;
        }

        public virtual string CountryCode
        {
            get;
            set;
        }

        public virtual string CountryName
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

        public virtual IList<AddressInfo> AddressInfos
        {
            get;
            set;
        }

        public virtual IList<LearnerInfo> LearnerInfos_CountryId
        {
            get;
            set;
        }

        public virtual IList<LearnerInfo> LearnerInfos_CountryOfBirthId
        {
            get;
            set;
        }

        public virtual IList<LearnerPostAddressInfo> LearnerPostAddressInfos
        {
            get;
            set;
        }

        public virtual IList<StateInfo> StateInfos
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
