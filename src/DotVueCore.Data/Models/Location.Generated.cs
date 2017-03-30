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
    public partial class Location {

        public Location()
        {
            OnCreated();
        }

        public virtual long LocationId
        {
            get;
            set;
        }

        public virtual string OrganizationDelivery
        {
            get;
            set;
        }

        public virtual string OrganisationDeliveryId
        {
            get;
            set;
        }

        public virtual string OrganizationDeliveryName
        {
            get;
            set;
        }

        public virtual string Address
        {
            get;
            set;
        }

        public virtual string StateId
        {
            get;
            set;
        }

        public virtual string PostCode
        {
            get;
            set;
        }

        public virtual string CountryId
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
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
