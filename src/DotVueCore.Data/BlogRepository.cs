using DotVueCore.Data.Models;
using DotVueCore.Interfaces;

namespace DotVueCore.Data
{
    public class BlogRepository:IBlogRepository
    {
        public BlogContext Context;
        public BlogRepository()
        {
            Context = new BlogContext(false);
        }
        public IBlogContext CreateBlogContext(bool isTransactional)
        {
            return new BlogContext(isTransactional);
        }
        public IUser CreateUser()
        {
            return Context.Entities.Users.Add(new User()).Entity;
        }

        public IUsersBlog CreateUsersBlog()
        {
            return Context.Entities.UsersBlogs.Add(new UsersBlog()).Entity;
        }

        public IBlog CreateBlog()
        {
            return Context.Entities.Blogs.Add(new Blog()).Entity;
        }

        public IPost CreatePost()
        {
            return Context.Entities.Posts.Add(new Post()).Entity;
        }

        public ITag CreateTag()
        {
            return Context.Entities.Tags.Add(new Tag()).Entity;
        }

        public IComment CreateComment()
        {
            return Context.Entities.Comments.Add(new Comment()).Entity;
        }

        public ICategory CreateCategory()
        {
            return Context.Entities.Categories.Add(new Category()).Entity;
        }

        public ICategoriesPost CreateCategoriesPost()
        {
            return Context.Entities.CategoriesPosts.Add(new CategoriesPost()).Entity;
        }
    }
}
