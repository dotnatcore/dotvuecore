using System;
using System.Collections.Generic;
using DotVueCore.ExMapper;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel.Base;

namespace DotVueCore.ViewModel
{
    [MapsTo(typeof(IUser), ReverseMap = true)]
    public partial class UserViewModel : UpdatableParentBaseViewModel<UserViewModel, IUser>
    {
        public int Id { get; set; }

        public string Password { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public DateTime? CreatedAt { get; set; }

        public string Bio { get; set; }

        public List<PostViewModel> Posts { get; set; }

        public List<UsersBlogViewModel> UsersBlogs { get; set; }
    }
}