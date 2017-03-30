
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ProductFileNote {

        public ProductFileNote()
        {
            OnCreated();
        }

        public virtual long ProductFileNoteId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> ProductFileId
        {
            get;
            set;
        }

        public virtual string Message
        {
            get;
            set;
        }

        /// <summary>
        /// From RTO=1,From Other=2
        /// </summary>
        public virtual System.Nullable<int> NotityType
        {
            get;
            set;
        }

        /// <summary>
        /// RTO Sent : Isnotify=False,Organization Read Set=true
        /// </summary>
        public virtual System.Nullable<bool> IsNotify
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

        public virtual ProductFile ProductFile
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
