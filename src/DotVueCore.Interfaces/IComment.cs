namespace DotVueCore.Interfaces
{
    public interface IComment
    {
        int Id
        {
            get;
            set;
        }

        string Name
        {
            get;
            set;
        }

        string Email
        {
            get;
            set;
        }

        string HomePage
        {
            get;
            set;
        }

        string Ip
        {
            get;
            set;
        }

        string Text
        {
            get;
            set;
        }

        int? PostId
        {
            get;
            set;
        }

        IPost Post
        {
            get;
            set;
        }
    }
}
