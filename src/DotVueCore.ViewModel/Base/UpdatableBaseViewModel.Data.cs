using System;
using DotVueCore.Interfaces;

namespace DotVueCore.ViewModel.Base
{
    public abstract partial class UpdatableBaseViewModel<TC, T>
        where T : class
        where TC : UpdatableBaseViewModel<TC, T>
    {
        public virtual T UpdateViewModel(IBlogRepository repo, IBlogContext ctx, T dto = null)
        {
            if (!IsDirty) return dto;
            if (IsDeleted) return Delete(repo, ctx, dto);
            return IsNew ? Insert(repo, ctx, dto) : Update(repo, ctx, dto);
        }
        protected abstract T Insert(IBlogRepository repo, IBlogContext ctx, T dto);
        protected abstract T Update(IBlogRepository repo, IBlogContext ctx, T dto);
        protected abstract T Delete(IBlogRepository repo, IBlogContext ctx, T dto);
        protected virtual TC CreateViewModel()
        {
            return (TC)this;
        }

        public virtual TC FetchViewModel(T dto)
        {
            IsDirty = false;
            IsNew = false;
            IsDeleted = false;
            return (TC)this;
        }

        public static TC Create()
        {
            var newItem = Activator.CreateInstance<TC>();
            newItem.IsDeleted = false;
            newItem.IsDirty = true;
            newItem.IsNew = true;
            return newItem.CreateViewModel();
        }

        public static TC Fetch(T dto)
        {
            return dto != null ? Activator.CreateInstance<TC>().FetchViewModel(dto) : null;
        }
    }
}
