using System;
using DotVueCore.Interfaces;

namespace DotVueCore.ViewModel
{
    public partial class BlogViewModel
    {
        protected override IBlog Insert(IBlogRepository repo, IBlogContext ctx, IBlog dto)
        {
            throw new NotImplementedException();
        }

        protected override IBlog Update(IBlogRepository repo, IBlogContext ctx, IBlog dto)
        {
            throw new NotImplementedException();
        }

        protected override IBlog Delete(IBlogRepository repo, IBlogContext ctx, IBlog dto)
        {
            throw new NotImplementedException();
        }

        public override void UpdateChildren(IBlogRepository repo, IBlogContext ctx, IBlog dto)
        {
            throw new NotImplementedException();
        }
    }
}
