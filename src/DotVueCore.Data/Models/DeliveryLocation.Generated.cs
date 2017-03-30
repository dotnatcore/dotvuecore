
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class DeliveryLocation {

        public DeliveryLocation()
        {
            this.AvetmisEnrollments = new List<AvetmisEnrollment>();
            OnCreated();
        }

        public virtual long DeliveryLocationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> OrganizationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> RtoId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> AddressId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationTranId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationOrgId
        {
            get;
            set;
        }

        public virtual string DeliverLocation
        {
            get;
            set;
        }

        public virtual string DeliverLocationName
        {
            get;
            set;
        }

        /// <summary>
        /// true=RTO,false=Organization
        /// </summary>
        public virtual System.Nullable<bool> IsRto
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

        public virtual IList<AvetmisEnrollment> AvetmisEnrollments
        {
            get;
            set;
        }

        public virtual AddressInfo AddressInfo
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
