using System;
using AutoMapper;
using DotVueCore.Interfaces;
using System.Linq;

namespace DotVueCore.ViewModel
{
    public partial class UserViewModel
    {
        public override UserViewModel FetchViewModel(IUser dto)
        {
            Mapper.Map(dto,this);
            UsersBlogs = dto.UsersBlogs.Select(UsersBlogViewModel.Fetch).ToList();
            Posts = dto.Posts.Select(PostViewModel.Fetch).ToList();
            return this;
        }

        protected override IUser Insert(IBlogRepository repo, IBlogContext ctx, IUser dto)
        {
            throw new NotImplementedException();
        }

        protected override IUser Update(IBlogRepository repo, IBlogContext ctx, IUser dto)
        {
            throw new NotImplementedException();
        }

        protected override IUser Delete(IBlogRepository repo, IBlogContext ctx, IUser dto)
        {
            throw new NotImplementedException();
        }

        public override void UpdateChildren(IBlogRepository repo, IBlogContext ctx, IUser dto)
        {
            throw new NotImplementedException();
        }
    }
}
