using System;
using System.Collections.Generic;
using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(IBlog), ReverseMap = true)]
    public partial class BlogViewModel:UpdatableParentBaseViewModel<BlogViewModel,IBlog>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string SubTitle { get; set; }

        public bool? AllowsComments { get; set; }

        public DateTime? CreatedAt { get; set; }

        public List<PostViewModel> Posts { get; set; }

        public List<UsersBlogViewModel> UsersBlogs { get; set; }
    }
}