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
    public partial class ProductFile {

        public ProductFile()
        {
            this.Envets = new List<Envet>();
            this.Invoices = new List<Invoice>();
            this.ProductFileNotes = new List<ProductFileNote>();
            this.QualificationTranProducts = new List<QualificationTranProduct>();
            OnCreated();
        }

        public virtual long ProductFileId
        {
            get;
            set;
        }

        public virtual string FileName
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

        /// <summary>
        /// 1=MOA,2=ENVET
        /// </summary>
        public virtual System.Nullable<int> FileType
        {
            get;
            set;
        }

        /// <summary>
        /// For Envet File : 1=New,2 Await Re-submit,3=Waiting Correction
        /// </summary>
        public virtual System.Nullable<int> Status
        {
            get;
            set;
        }

        public virtual System.Nullable<int> EnrollYear
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

        public virtual System.Nullable<long> FileId
        {
            get;
            set;
        }

        public virtual IList<Envet> Envets
        {
            get;
            set;
        }

        public virtual IList<Invoice> Invoices
        {
            get;
            set;
        }

        public virtual IList<ProductFileNote> ProductFileNotes
        {
            get;
            set;
        }

        public virtual Organization Organization
        {
            get;
            set;
        }

        public virtual File File
        {
            get;
            set;
        }

        public virtual RtoInfo RtoInfo
        {
            get;
            set;
        }

        public virtual IList<QualificationTranProduct> QualificationTranProducts
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
