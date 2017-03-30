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
    public partial class QualificationTran {

        public QualificationTran()
        {
            this.QualificationTranProducts = new List<QualificationTranProduct>();
            this.QualificationTranUnits = new List<QualificationTranUnit>();
            OnCreated();
        }

        public virtual long QualificationTranId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationId
        {
            get;
            set;
        }

        public virtual System.Nullable<long> QualificationScopeId
        {
            get;
            set;
        }

        public virtual string QualificationCode
        {
            get;
            set;
        }

        public virtual string QualificationName
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string Tag
        {
            get;
            set;
        }

        public virtual string PromoVideo
        {
            get;
            set;
        }

        public virtual string PromoFile
        {
            get;
            set;
        }

        public virtual string Logo
        {
            get;
            set;
        }

        /// <summary>
        /// 1=Online,2=Blended,3=Face to face,4=Apprenticeship,5=Traineeship,6=Distance Learning,7=Workplace learning
        /// </summary>
        public virtual System.Nullable<int> DeliveryId
        {
            get;
            set;
        }

        /// <summary>
        /// true=Full time,false=Parttime
        /// </summary>
        public virtual System.Nullable<bool> IsFullTraining
        {
            get;
            set;
        }

        public virtual System.Nullable<int> TimeLimit
        {
            get;
            set;
        }

        /// <summary>
        /// 1=draft,2=Ready,3=Publish
        /// </summary>
        public virtual System.Nullable<int> Status
        {
            get;
            set;
        }

        public virtual System.Nullable<int> Year
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> PublishDate
        {
            get;
            set;
        }

        public virtual string MaterialUrl
        {
            get;
            set;
        }

        public virtual System.Nullable<long> Recognition
        {
            get;
            set;
        }

        public virtual System.Nullable<long> EducationLevel
        {
            get;
            set;
        }

        public virtual string ProgramField
        {
            get;
            set;
        }

        public virtual string Anzsco
        {
            get;
            set;
        }

        public virtual System.Nullable<long> VetFlag
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

        public virtual IList<QualificationTranProduct> QualificationTranProducts
        {
            get;
            set;
        }

        public virtual QualificationScope QualificationScope
        {
            get;
            set;
        }

        public virtual IList<QualificationTranUnit> QualificationTranUnits
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
