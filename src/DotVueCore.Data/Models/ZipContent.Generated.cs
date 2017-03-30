
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ZipContent {

        public ZipContent()
        {
            OnCreated();
        }

        public virtual long ZipContentId
        {
            get;
            set;
        }

        public virtual long JobId
        {
            get;
            set;
        }

        public virtual long FileId
        {
            get;
            set;
        }

        public virtual int Action
        {
            get;
            set;
        }

        public virtual long ActionBy
        {
            get;
            set;
        }

        public virtual System.DateTime ActionDate
        {
            get;
            set;
        }

        public virtual int Mode
        {
            get;
            set;
        }

        public virtual System.Nullable<int> CompletedAction
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> CompletedDate
        {
            get;
            set;
        }

        public virtual File File
        {
            get;
            set;
        }

        public virtual ZipJob ZipJob
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
