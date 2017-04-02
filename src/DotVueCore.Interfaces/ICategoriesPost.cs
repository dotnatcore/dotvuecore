namespace DotVueCore.Interfaces
{
    public interface ICategoriesPost
    {
        int CategoryId
        {
            get;
            set;
        }

        int PostId
        {
            get;
            set;
        }

        IPost Post
        {
            get;
            set;
        }

        ICategory Category
        {
            get;
            set;
        }
    }
}
