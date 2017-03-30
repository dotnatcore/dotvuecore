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
    public partial class Invoice {

        public Invoice()
        {
            this.InvoiceType = 1;
            this.Status = 1;
            this.InvoiceItems = new List<InvoiceItem>();
            OnCreated();
        }

        public virtual long InvoiceId
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> TotalDue
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> TotalTaxDue
        {
            get;
            set;
        }

        public virtual System.Nullable<int> NoLineItems
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> DueDate
        {
            get;
            set;
        }

        public virtual System.Nullable<int> InvoiceType
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RtoId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ProductFileId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Status
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

        public virtual System.Nullable<decimal> Price
        {
            get;
            set;
        }

        public virtual string InvoiceNumber
        {
            get;
            set;
        }

        public virtual System.Nullable<long> FileId
        {
            get;
            set;
        }

        public virtual IList<InvoiceItem> InvoiceItems
        {
            get;
            set;
        }

        public virtual Organization Organization
        {
            get;
            set;
        }

        public virtual ProductFile ProductFile
        {
            get;
            set;
        }

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }

        public virtual File File
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
