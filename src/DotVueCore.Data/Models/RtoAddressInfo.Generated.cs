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
    public partial class RtoAddressInfo {

        public RtoAddressInfo()
        {
            OnCreated();
        }

        public virtual long RtoAddressId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> AddressId
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

        public virtual AddressInfo AddressInfo
        {
            get;
            set;
        }

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
