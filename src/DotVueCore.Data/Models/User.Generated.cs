
using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;

namespace DotVueCore.Data.Models
{
    public partial class User {

        public User()
        {
            this.IsLocked = false;
            this.EmailConfirmed = false;
            this.PhoneNumberConfirmed = false;
            this.TwoFactorEnabled = false;
            this.LockoutEnabled = false;
            this.AccessFailedCount = 0;
            this.TimeZone = 81m;
            this.Mode = 1;
            this.ActivityLogs = new List<ActivityLog>();
            this.AspnetUserLogins = new List<AspnetUserLogin>();
            this.AspnetUserRoles = new List<AspnetUserRole>();
            this.AvetmisEnrollments = new List<AvetmisEnrollment>();
            this.Envets = new List<Envet>();
            this.Evidences = new List<Evidence>();
            this.LearnerInfos = new List<LearnerInfo>();
            this.LearnerPostAddressInfos = new List<LearnerPostAddressInfo>();
            this.OrganizationUsers = new List<OrganizationUser>();
            this.RtoOrganizationUsers = new List<RtoOrganizationUser>();
            this.RtoUsers = new List<RtoUser>();
            this.StudentClassInfos = new List<StudentClassInfo>();
            this.StudentNotes = new List<StudentNote>();
            this.TrainerClassInfos = new List<TrainerClassInfo>();
            this.UserAddressInfos = new List<UserAddressInfo>();
            this.UserClaims = new List<UserClaim>();
            this.UserDocuments = new List<UserDocument>();
            this.UserQualifications = new List<UserQualification>();
            OnCreated();
        }

        public virtual long Id
        {
            get;
            set;
        }

        public virtual string Login
        {
            get;
            set;
        }

        public virtual string Email
        {
            get;
            set;
        }

        public virtual string Password
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> CreationDate
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> ApprovalDate
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> LastLoginDate
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> IsLocked
        {
            get;
            set;
        }

        public virtual string PasswordQuestion
        {
            get;
            set;
        }

        public virtual string PasswordAnswer
        {
            get;
            set;
        }

        public virtual string ActivationToken
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> EmailConfirmed
        {
            get;
            set;
        }

        public virtual string SecurityStamp
        {
            get;
            set;
        }

        public virtual string PhoneNumber
        {
            get;
            set;
        }

        public virtual string MobileNumber
        {
            get;
            set;
        }

        public virtual string WorkPhoneNumber
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> PhoneNumberConfirmed
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> TwoFactorEnabled
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> LockoutEndDateUtc
        {
            get;
            set;
        }

        public virtual System.Nullable<bool> LockoutEnabled
        {
            get;
            set;
        }

        public virtual System.Nullable<int> AccessFailedCount
        {
            get;
            set;
        }

        public virtual string TitleName
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

        public virtual string Sex
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string Address
        {
            get;
            set;
        }

        public virtual string Photo
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> Dob
        {
            get;
            set;
        }

        public virtual string Bio
        {
            get;
            set;
        }

        public virtual System.Nullable<decimal> TimeZone
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> ExpiryDate
        {
            get;
            set;
        }

        public virtual bool IsPodiumAdmin
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

        public virtual IList<ActivityLog> ActivityLogs
        {
            get;
            set;
        }

        public virtual IList<AspnetUserLogin> AspnetUserLogins
        {
            get;
            set;
        }

        public virtual IList<AspnetUserRole> AspnetUserRoles
        {
            get;
            set;
        }

        public virtual IList<AvetmisEnrollment> AvetmisEnrollments
        {
            get;
            set;
        }

        public virtual IList<Envet> Envets
        {
            get;
            set;
        }

        public virtual IList<Evidence> Evidences
        {
            get;
            set;
        }

        public virtual IList<LearnerInfo> LearnerInfos
        {
            get;
            set;
        }

        public virtual IList<LearnerPostAddressInfo> LearnerPostAddressInfos
        {
            get;
            set;
        }

        public virtual IList<OrganizationUser> OrganizationUsers
        {
            get;
            set;
        }

        public virtual IList<RtoOrganizationUser> RtoOrganizationUsers
        {
            get;
            set;
        }

        public virtual IList<RtoUser> RtoUsers
        {
            get;
            set;
        }

        public virtual IList<StudentClassInfo> StudentClassInfos
        {
            get;
            set;
        }

        public virtual IList<StudentNote> StudentNotes
        {
            get;
            set;
        }

        public virtual IList<TrainerClassInfo> TrainerClassInfos
        {
            get;
            set;
        }

        public virtual IList<UserAddressInfo> UserAddressInfos
        {
            get;
            set;
        }

        public virtual IList<UserClaim> UserClaims
        {
            get;
            set;
        }

        public virtual IList<UserDocument> UserDocuments
        {
            get;
            set;
        }

        public virtual IList<UserQualification> UserQualifications
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
