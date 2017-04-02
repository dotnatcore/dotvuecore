using System.Collections.Generic;

namespace DotVueCore.Interfaces
{
    public interface ICategory
    {
        int Id
        {
            get;
            set;
        }

        string Name
        {
            get;
            set;
        }

        IList<ICategoriesPost> CategoriesPosts
        {
            get;
            set;
        }
    }
}
