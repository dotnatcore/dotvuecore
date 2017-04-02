using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using DotVueCore.Data.Models;
using DotVueCore.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace DotVueCore.Data
{
    public class BlogContext:IBlogContext
    {
        private IDbContextTransaction _dbTransaction;
        //private IConfigurationRoot Configuration { get; }
        private bool _transactionCompleted;
        internal BlogEntities Entities;
        protected bool IsTransactional;

        public BlogContext(bool isTransactional)
        {
            CreateContext();
            SetTransactional(isTransactional);
        }
        public void SetTransactional(bool isTransactional)
        {
            Console.WriteLine(Entities.Database.GetDbConnection().ConnectionString);
            //TODO
            if (Entities.Database.GetDbConnection().State == ConnectionState.Closed)
            {
                Entities.Database.OpenConnection();
                Console.WriteLine("Database Open");
            }
            CheckTransactions(isTransactional);
            IsTransactional = isTransactional;
            if (!isTransactional)
                return;

            _dbTransaction = Entities.Database.BeginTransaction();
            _transactionCompleted = false;
        }

        public void CompleteTransaction()
        {
            _transactionCompleted = true;
        }

        protected void CreateContext()
        {
            if (Entities != null) return;
            //Configuration = builder.Build();
            var options = new DbContextOptionsBuilder<BlogEntities>();
            //Console.WriteLine(JsonConvert.SerializeObject(options));
            options.UseSqlServer(@"Data Source=localhost\sqlexpress;Initial Catalog=BlogDb;Integrated Security=False;Persist Security Info=True;User ID=sa;Password=123qwe!@#;");
            //options.UseSqlServer(@"Data Source=www.socket9.com,14330;Initial Catalog=Podium;Integrated Security=False;Persist Security Info=True;User ID=poweruser;Password=123qwe!@#;");
            //Console.WriteLine(conStr);
            //options.UseSqlServer(conStr);
            Entities = new BlogEntities(options.Options);
        }


        public void Dispose()
        {
            if (IsTransactional)
                if (_transactionCompleted)
                {
                    _dbTransaction.Commit();
                    Entities.SaveChanges();
                    IsTransactional = false;
                }
                else
                    _dbTransaction.Rollback();
            Entities.Database.CloseConnection();
            Console.WriteLine("Database Close");
        }

        public IQueryable<ICategoriesPost> GetCategoriesPosts(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null)
        {
            var query = from s in Entities.CategoriesPosts.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<ICategoriesPost>> GetCategoriesPostAsync(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null)
        {
            var query = from s in Entities.CategoriesPosts.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public ICategoriesPost Fetch(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null)
        {
            var query = from s in Entities.CategoriesPosts.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<ICategoriesPost> FetchAsync(Expression<Func<ICategoriesPost, bool>> filter, Func<IQueryable<ICategoriesPost>, IQueryable<ICategoriesPost>> includes = null)
        {
            var query = from s in Entities.CategoriesPosts.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public IQueryable<ICategory> GetCategories(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null)
        {
            var query = from s in Entities.Categories.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<ICategory>> GetCategoriesAsync(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null)
        {
            var query = from s in Entities.Categories.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public ICategory Fetch(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null)
        {
            var query = from s in Entities.Categories.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<ICategory> FetchAsync(Expression<Func<ICategory, bool>> filter, Func<IQueryable<ICategory>, IQueryable<ICategory>> includes = null)
        {
            var query = from s in Entities.Categories.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public IQueryable<IComment> GetComments(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null)
        {
            var query = from s in Entities.Comments.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<IComment>> GetCommentAsync(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null)
        {
            var query = from s in Entities.Comments.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public IComment Fetch(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null)
        {
            var query = from s in Entities.Comments.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<IComment> FetchAsync(Expression<Func<IComment, bool>> filter, Func<IQueryable<IComment>, IQueryable<IComment>> includes = null)
        {
            var query = from s in Entities.Comments.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public IQueryable<ITag> GetTags(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null)
        {
            var query = from s in Entities.Tags.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<ITag>> GetTagsAsync(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null)
        {
            var query = from s in Entities.Tags.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public ITag Fetch(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null)
        {
            var query = from s in Entities.Tags.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<ITag> FetchAsync(Expression<Func<ITag, bool>> filter, Func<IQueryable<ITag>, IQueryable<ITag>> includes = null)
        {
            var query = from s in Entities.Tags.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public IQueryable<IPost> GetPosts(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null)
        {
            var query = from s in Entities.Posts.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<IPost>> GetPostsAsync(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null)
        {
            var query = from s in Entities.Posts.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public IPost Fetch(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null)
        {
            var query = from s in Entities.Posts.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<IPost> FetchAsync(Expression<Func<IPost, bool>> filter, Func<IQueryable<IPost>, IQueryable<IPost>> includes = null)
        {
            var query = from s in Entities.Posts.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public IQueryable<IBlog> GetBlogs(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null)
        {
            var query = from s in Entities.Blogs.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<IBlog>> GetBlogsAsync(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null)
        {
            var query = from s in Entities.Blogs.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public IBlog Fetch(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null)
        {
            var query = from s in Entities.Blogs.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<IBlog> FetchAsync(Expression<Func<IBlog, bool>> filter, Func<IQueryable<IBlog>, IQueryable<IBlog>> includes = null)
        {
            var query = from s in Entities.Blogs.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public IQueryable<IUsersBlog> GetUsersBlogs(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null)
        {
            var query = from s in Entities.UsersBlogs.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<IUsersBlog>> GetUsersBlogsAsync(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null)
        {
            var query = from s in Entities.UsersBlogs.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public IUsersBlog Fetch(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null)
        {
            var query = from s in Entities.UsersBlogs.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<IUsersBlog> FetchAsync(Expression<Func<IUsersBlog, bool>> filter, Func<IQueryable<IUsersBlog>, IQueryable<IUsersBlog>> includes = null)
        {
            var query = from s in Entities.UsersBlogs.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public IQueryable<IUser> GetUsers(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null)
        {
            var query = from s in Entities.Users.Where(filter) select s;
            return includes != null ? includes(query) : query;
        }

        public Task<List<IUser>> GetUsersAsync(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null)
        {
            var query = from s in Entities.Users.Where(filter) select s;
            return includes != null ? includes(query).ToListAsync() : query.ToListAsync();
        }

        public IUser Fetch(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null)
        {
            var query = from s in Entities.Users.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefault() : query.FirstOrDefault();
        }

        public Task<IUser> FetchAsync(Expression<Func<IUser, bool>> filter, Func<IQueryable<IUser>, IQueryable<IUser>> includes = null)
        {
            var query = from s in Entities.Users.Where(filter) select s;
            return includes != null ? includes(query).FirstOrDefaultAsync() : query.FirstOrDefaultAsync();
        }

        public object Insert(object entity)
        {
            Entities.Entry(entity).State = EntityState.Added;
            return entity;
        }

        public object Update(object entity)
        {
            Entities.Entry(entity).State = EntityState.Modified;
            return entity;
        }

        public object Update(object entity, object newEntity)
        {
            Entities.Entry(entity).CurrentValues.SetValues(newEntity);
            Entities.SaveChanges();
            return entity;
        }

        public object Delete(object entity)
        {
            Entities.Entry(entity).State = EntityState.Deleted;
            return entity;
        }

        public T Clone<T>(T entity) where T : class
        {
            var creteType = FindCreteType(typeof(T));
            var clone = Activator.CreateInstance(creteType);
            var en = Entities.Entry(clone);
            en.State = EntityState.Added;
            Entities.Entry(clone).CurrentValues.SetValues(entity);
            en.State = EntityState.Detached;
            return (T)clone;
        }

        private static Type FindCreteType(Type type)
        {
            try
            {
                var cretetype =
                    Type.GetType(string.Format("{0}.{1}, {2}", "DotVueCore.Data.Models", type.Name.Substring(1), "DotVueCore.Data.Models"));
                return cretetype;
            }
            catch (Exception ex)
            {
                throw new Exception("Could not locate concrete type for " + type.Name + " " + ex.ToString());
            }
        }

        public void CheckTransactions(bool isTransactional)
        {
            if (isTransactional && IsTransactional)
                //TODO: Implement an ExceptionHandler
                throw new Exception("Transaction has not been closed");
        }
    }
}
