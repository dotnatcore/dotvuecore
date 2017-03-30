
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class Job {

        public Job()
        {
            OnCreated();
        }

        public virtual long JobId
        {
            get;
            set;
        }

        public virtual int Status
        {
            get;
            set;
        }

        public virtual System.Nullable<int> RetryCount
        {
            get;
            set;
        }

        public virtual System.DateTime QueuedOn
        {
            get;
            set;
        }

        public virtual long QueuedBy
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> StartedOn
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> CompletedOn
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> FailedOn
        {
            get;
            set;
        }

        public virtual int Mode
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
