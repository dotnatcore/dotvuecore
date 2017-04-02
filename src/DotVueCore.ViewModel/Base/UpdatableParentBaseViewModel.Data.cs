using DotVueCore.Interfaces;

namespace DotVueCore.ViewModel.Base
{
    public abstract partial class UpdatableParentBaseViewModel<TC, T> : UpdatableBaseViewModel<TC, T>
         where T : class
         where TC : UpdatableParentBaseViewModel<TC, T>
    {
        public override T UpdateViewModel(IBlogRepository repo, IBlogContext ctx, T dto = null)
        {
            if (!IsDirty)
            {
                UpdateChildren(repo, ctx, dto);
                return dto;
            }
            if (IsDeleted) return Delete(repo, ctx, dto);
            return IsNew ? Insert(repo, ctx, dto) : Update(repo, ctx, dto);
        }

        public abstract void UpdateChildren(IBlogRepository repo, IBlogContext ctx, T dto);
    }
}
