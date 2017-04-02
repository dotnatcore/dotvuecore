using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using DotVueCore.Interfaces;

namespace DotVueCore.Data.Models
{

    public partial class CategoriesPost : ICategoriesPost
    {
        ICategory ICategoriesPost.Category
        {
            get { return Category; }
            set { Category = (Category)value; }
        }

        IPost ICategoriesPost.Post
        {
            get { return Post; }
            set { Post = (Post)value; }
        }
    }
}
