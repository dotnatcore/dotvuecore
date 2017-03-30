
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ZipJob {

        public ZipJob()
        {
            this.ZipContents = new List<ZipContent>();
            OnCreated();
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

        public virtual IList<ZipContent> ZipContents
        {
            get;
            set;
        }

        public virtual File File
        {
            get;
            set;
        }

        public virtual Job Job
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
