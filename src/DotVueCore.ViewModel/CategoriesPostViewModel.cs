using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(ICategoriesPost), ReverseMap = true)]
    public partial class CategoriesPostViewModel : UpdatableBaseViewModel<CategoriesPostViewModel,ICategoriesPost>
    {
        public virtual int CategoryId { get; set; }

        public virtual int PostId { get; set; }
    }
}