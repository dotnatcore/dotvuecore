﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// Code is generated on: 4/1/2017 6:19:13 PM
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

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
            this.Posts = new List<Post>();
            this.UsersBlogs = new List<UsersBlog>();
            OnCreated();
        }

        public virtual int Id
        {
            get;
            set;
        }

        public virtual string Password
        {
            get;
            set;
        }

        public virtual string Username
        {
            get;
            set;
        }

        public virtual string Email
        {
            get;
            set;
        }

        public virtual System.Nullable<System.DateTime> CreatedAt
        {
            get;
            set;
        }

        public virtual string Bio
        {
            get;
            set;
        }

        public virtual IList<Post> Posts
        {
            get;
            set;
        }

        public virtual IList<UsersBlog> UsersBlogs
        {
            get;
            set;
        }
    
        #region Extensibility Method Definitions

        partial void OnCreated();
        
        #endregion
    }

}
