using System.Collections.Generic;
using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(ICategory), ReverseMap = true)]
    public partial class CategoryViewMode:UpdatableParentBaseViewModel<CategoryViewMode,ICategory>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<CategoriesPostViewModel> CategoriesPosts { get; set; }
    }
}