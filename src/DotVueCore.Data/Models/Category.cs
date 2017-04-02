using System;
using System.Collections.Generic;
using DotVueCore.Interfaces;
using System.Linq;

namespace DotVueCore.Data.Models
{
    public partial class Category : ICategory
    {
        IList<ICategoriesPost> ICategory.CategoriesPosts
        {
            get { return CategoriesPosts.Cast<ICategoriesPost>().ToList(); }
            set { CategoriesPosts = value.Cast<CategoriesPost>().ToList(); }
        }
    }
}