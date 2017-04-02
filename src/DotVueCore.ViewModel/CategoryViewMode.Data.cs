using System;
using DotVueCore.Interfaces;

namespace DotVueCore.ViewModel
{
    public partial class CategoryViewMode
    {
        protected override ICategory Insert(IBlogRepository repo, IBlogContext ctx, ICategory dto)
        {
            throw new NotImplementedException();
        }

        protected override ICategory Update(IBlogRepository repo, IBlogContext ctx, ICategory dto)
        {
            throw new NotImplementedException();
        }

        protected override ICategory Delete(IBlogRepository repo, IBlogContext ctx, ICategory dto)
        {
            throw new NotImplementedException();
        }

        public override void UpdateChildren(IBlogRepository repo, IBlogContext ctx, ICategory dto)
        {
            throw new NotImplementedException();
        }
    }
}
