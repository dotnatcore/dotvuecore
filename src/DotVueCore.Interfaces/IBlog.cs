using System;
using System.Collections.Generic;

namespace DotVueCore.Interfaces
{
    public interface IBlog
    {
        int Id
        {
            get;
            set;
        }

        string Title
        {
            get;
            set;
        }

        string SubTitle
        {
            get;
            set;
        }

        bool? AllowsComments
        {
            get;
            set;
        }

        DateTime? CreatedAt
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
