using System.Collections.Generic;
using DotVueCore.Interfaces;
using System.Linq;

namespace DotVueCore.Data.Models
{
    public partial class Blog : IBlog
    {
        IList<IPost> IBlog.Posts
        {
            get { return Posts.Cast<IPost>().ToList(); }
            set { Posts = value.Cast<Post>().ToList(); }
        }

        IList<IUsersBlog> IBlog.UsersBlogs
        {
            get { return UsersBlogs.Cast<IUsersBlog>().ToList(); }
            set { UsersBlogs = value.Cast<UsersBlog>().ToList(); }
        }
    }
}