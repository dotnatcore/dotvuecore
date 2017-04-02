using System;
using DotVueCore.Interfaces;

namespace DotVueCore.ViewModel
{
    public partial class UsersBlogViewModel
    {
        protected override IUsersBlog Insert(IBlogRepository repo, IBlogContext ctx, IUsersBlog dto)
        {
            throw new NotImplementedException();
        }

        protected override IUsersBlog Update(IBlogRepository repo, IBlogContext ctx, IUsersBlog dto)
        {
            throw new NotImplementedException();
        }

        protected override IUsersBlog Delete(IBlogRepository repo, IBlogContext ctx, IUsersBlog dto)
        {
            throw new NotImplementedException();
        }
    }
}
