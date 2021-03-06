﻿using System;
using System.Linq;
using System.Collections.Generic;
using DotVueCore.Interfaces;

namespace DotVueCore.Data.Models
{

    public partial class User : IUser
    {
        IList<IPost> IUser.Posts
        {
            get { return Posts.Cast<IPost>().ToList(); }
            set { Posts = value.Cast<Post>().ToList(); }
        }

        IList<IUsersBlog> IUser.UsersBlogs
        {
            get { return UsersBlogs.Cast<IUsersBlog>().ToList(); }
            set { UsersBlogs = value.Cast<UsersBlog>().ToList(); }
        }
    }
}
