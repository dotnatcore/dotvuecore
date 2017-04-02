using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(IComment), ReverseMap = true)]
    public partial class CommentViewModel:UpdatableBaseViewModel<CommentViewModel,IComment>
    {
        public virtual int Id { get; set; }

        public virtual string Name { get; set; }

        public virtual string Email { get; set; }

        public virtual string HomePage { get; set; }

        public virtual string Ip { get; set; }

        public virtual string Text { get; set; }

        public virtual int? PostId { get; set; }
    }
}