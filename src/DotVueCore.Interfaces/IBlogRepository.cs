namespace DotVueCore.Interfaces
{
    public interface IBlogRepository
    {
        IBlogContext CreateBlogContext(bool isTransactional);
        IUser CreateUser();
        IUsersBlog CreateUsersBlog();
        IBlog CreateBlog();
        IPost CreatePost();
        ITag CreateTag();
        IComment CreateComment();
        ICategory CreateCategory();
        ICategoriesPost CreateCategoriesPost();
    }
}
