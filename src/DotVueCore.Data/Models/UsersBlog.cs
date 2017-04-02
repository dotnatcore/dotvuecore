using System;
using DotVueCore.Interfaces;

namespace DotVueCore.Data.Models
{
    public partial class UsersBlog : IUsersBlog
    {
        IBlog IUsersBlog.Blog
        {
            get { return Blog; }
            set { Blog = (Blog)value; }
        }

        IUser IUsersBlog.User
        {
            get { return User; }
            set { User = (User)value; }
        }
    }
}