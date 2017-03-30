
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class ClientBackground {

        public ClientBackground()
        {
            OnCreated();
        }

        public virtual long ClientBackgroundId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> UserId
        {
            get;
            set;
        }

        public virtual string Usi
        {
            get;
            set;
        }

        public virtual System.Nullable<int> SchoolLevelCompleteId
        {
            get;
            set;
        }

        public virtual string YearHighest
        {
            get;
            set;
        }

        public virtual string AtSchool
        {
            get;
            set;
        }

        public virtual System.Nullable<int> IndigenousStatusId
        {
            get;
            set;
        }

        public virtual string CountryOfBirthId
        {
            get;
            set;
        }

        public virtual string HomeLanguageId
        {
            get;
            set;
        }

        public virtual System.Nullable<int> LabourForceStatusId
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
