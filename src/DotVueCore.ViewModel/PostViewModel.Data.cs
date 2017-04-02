using System;
using DotVueCore.Interfaces;

namespace DotVueCore.ViewModel
{
    public partial class PostViewModel
    {
        protected override IPost Insert(IBlogRepository repo, IBlogContext ctx, IPost dto)
        {
            throw new NotImplementedException();
        }

        protected override IPost Update(IBlogRepository repo, IBlogContext ctx, IPost dto)
        {
            throw new NotImplementedException();
        }

        protected override IPost Delete(IBlogRepository repo, IBlogContext ctx, IPost dto)
        {
            throw new NotImplementedException();
        }

        public override void UpdateChildren(IBlogRepository repo, IBlogContext ctx, IPost dto)
        {
            throw new NotImplementedException();
        }
    }
}
