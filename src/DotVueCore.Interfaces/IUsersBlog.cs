namespace DotVueCore.Interfaces
{
    public interface IUsersBlog
    {
        int UserId
        {
            get;
            set;
        }

        int BlogId
        {
            get;
            set;
        }

        IUser User
        {
            get;
            set;
        }

        IBlog Blog
        {
            get;
            set;
        }
    }
}
