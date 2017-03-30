
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class Client {

        public Client()
        {
            OnCreated();
        }

        public virtual long ClientId
        {
            get;
            set;
        }

        public virtual string ClientCode
        {
            get;
            set;
        }

        public virtual string Title
        {
            get;
            set;
        }

        public virtual string FirstName
        {
            get;
            set;
        }

        public virtual string LastName
        {
            get;
            set;
        }

        /// <summary>
        /// 0=not specfied,1=male,2=female
        /// </summary>
        public virtual System.Nullable<int> Sex
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> Dob
        {
            get;
            set;
        }

        public virtual string Email
        {
            get;
            set;
        }

        public virtual string TelephoneMobile
        {
            get;
            set;
        }

        public virtual string TelephoneHome
        {
            get;
            set;
        }

        public virtual string TelephoneWork
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
