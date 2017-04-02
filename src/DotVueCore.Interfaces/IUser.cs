using System;
using System.Collections.Generic;

namespace DotVueCore.Interfaces
{
    public interface IUser
    {
        int Id
        {
            get;
            set;
        }

        string Password
        {
            get;
            set;
        }

        string Username
        {
            get;
            set;
        }

        string Email
        {
            get;
            set;
        }

        DateTime? CreatedAt
        {
            get;
            set;
        }

        string Bio
        {
            get;
            set;
        }

        IList<IPost> Posts
        {
            get;
            set;
        }

        IList<IUsersBlog> UsersBlogs
        {
            get;
            set;
        }
    }
}
