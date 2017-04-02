using System.Collections.Generic;

namespace DotVueCore.Interfaces
{
    public interface IPost
    {
        int Id
        {
            get;
            set;
        }

        string Discriminator
        {
            get;
            set;
        }

        string Title
        {
            get;
            set;
        }

        string Text
        {
            get;
            set;
        }

        int? PostedAt
        {
            get;
            set;
        }

        int? BlogId
        {
            get;
            set;
        }

        int? UserId
        {
            get;
            set;
        }

        IList<ICategoriesPost> CategoriesPosts
        {
            get;
            set;
        }

        IList<IComment> Comments
        {
            get;
            set;
        }

        IBlog Blog
        {
            get;
            set;
        }

        IUser User
        {
            get;
            set;
        }
    }
}
