using System;
using DotVueCore.Interfaces;

namespace DotVueCore.ViewModel
{
    public partial class CommentViewModel
    {
        protected override IComment Insert(IBlogRepository repo, IBlogContext ctx, IComment dto)
        {
            throw new NotImplementedException();
        }

        protected override IComment Update(IBlogRepository repo, IBlogContext ctx, IComment dto)
        {
            throw new NotImplementedException();
        }

        protected override IComment Delete(IBlogRepository repo, IBlogContext ctx, IComment dto)
        {
            throw new NotImplementedException();
        }
    }
}
