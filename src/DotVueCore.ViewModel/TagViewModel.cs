using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(ITag), ReverseMap = true)]
    public partial class TagViewModel:UpdatableBaseViewModel<TagViewModel,ITag>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int? ItemId { get; set; }

        public string ItemType { get; set; }
    }
}