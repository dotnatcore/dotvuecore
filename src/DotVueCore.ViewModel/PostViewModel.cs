using System.Collections.Generic;
using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(IPost), ReverseMap = true)]
    public partial class PostViewModel : UpdatableParentBaseViewModel<PostViewModel,IPost>
    {
        public int Id { get; set; }

        public string Discriminator { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        public int? PostedAt { get; set; }

        public int? BlogId { get; set; }

        public int? UserId { get; set; }

        public List<CategoriesPostViewModel> CategoriesPosts { get; set; }

        public List<CommentViewModel> Comments { get; set; }
    }
}