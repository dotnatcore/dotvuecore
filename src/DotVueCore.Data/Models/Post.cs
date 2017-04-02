using System.Collections.Generic;
using DotVueCore.Interfaces;
using System.Linq;

namespace DotVueCore.Data.Models
{
    public partial class Post : IPost
    {
        IBlog IPost.Blog
        {
            get { return Blog; }
            set { Blog = (Blog)value; }
        }

        IList<ICategoriesPost> IPost.CategoriesPosts
        {
            get { return CategoriesPosts.Cast<ICategoriesPost>().ToList(); }
            set { CategoriesPosts = value.Cast<CategoriesPost>().ToList(); }
        }

        IList<IComment> IPost.Comments
        {
            get { return Comments.Cast<IComment>().ToList(); }
            set { Comments = value.Cast<Comment>().ToList(); }
        }

        IUser IPost.User
        {
            get { return User; }
            set { User = (User)value; }
        }
    }
}