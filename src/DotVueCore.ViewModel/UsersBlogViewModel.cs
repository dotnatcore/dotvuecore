using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(IUsersBlog), ReverseMap = true)]
    public partial class UsersBlogViewModel: UpdatableBaseViewModel<UsersBlogViewModel,IUsersBlog>
    {
        public int UserId { get; set; }

        public int BlogId { get; set; }
    }
}