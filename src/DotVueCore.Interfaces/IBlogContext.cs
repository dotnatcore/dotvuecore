using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DotVueCore.Interfaces
{
    public interface IBlogContext : IContext
    {

        IQueryable<ICategoriesPost> GetCategoriesPosts(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null);
        Task<List<ICategoriesPost>> GetCategoriesPostAsync(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null);
        ICategoriesPost Fetch(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null);
        Task<ICategoriesPost> FetchAsync(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null);


        IQueryable<ICategory> GetCategories(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null);
        Task<List<ICategory>> GetCategoriesAsync(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null);
        ICategory Fetch(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null);
        Task<ICategory> FetchAsync(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null);

        IQueryable<IComment> GetComments(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null);
        Task<List<IComment>> GetCommentAsync(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null);
        IComment Fetch(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null);
        Task<IComment> FetchAsync(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null);

        IQueryable<ITag> GetTags(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null);
        Task<List<ITag>> GetTagsAsync(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null);
        ITag Fetch(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null);
        Task<ITag> FetchAsync(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null);

        IQueryable<IPost> GetPosts(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null);
        Task<List<IPost>> GetPostsAsync(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null);
        IPost Fetch(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null);
        Task<IPost> FetchAsync(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null);


        IQueryable<IBlog> GetBlogs(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null);
        Task<List<IBlog>> GetBlogsAsync(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null);
        IBlog Fetch(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null);
        Task<IBlog> FetchAsync(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null);

        IQueryable<IUsersBlog> GetUsersBlogs(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null);
        Task<List<IUsersBlog>> GetUsersBlogsAsync(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null);
        IUsersBlog Fetch(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null);
        Task<IUsersBlog> FetchAsync(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null);


        IQueryable<IUser> GetUsers(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null);
        Task<List<IUser>> GetUsersAsync(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null);
        IUser Fetch(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null);
        Task<IUser> FetchAsync(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null);

        object Insert(object entity);
        object Update(object entity);
        object Update(object entity, object newEntity);
        object Delete(object entity);
        T Clone<T>(T entity) where T : class;
        void CheckTransactions(bool isTransactional);
        new void SetTransactional(bool isTransactional);
        new void CompleteTransaction();
        new void Dispose();
    }
}
