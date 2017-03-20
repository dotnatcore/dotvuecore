﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// Code is generated on: 3/7/2017 7:10:28 PM
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueApp.Data.Models
{
    public partial class InvoiceItem {

        public InvoiceItem()
        {
            this.Quantity = 1;
            OnCreated();
        }

        public virtual long InvoiceItemId
        {
            get;
            set;
        }

        public virtual long InvoiceId
        {
            get;
            set;
        }

        public virtual string InvoiceLineText
        {
            get;
            set;
        }

        public virtual string InvoiceLineNote
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Price
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Quantity
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> Tax
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsIncludeTax
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

        public virtual Invoice Invoice
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
