namespace DotVueCore.Interfaces
{
    public interface ITag
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

        int? ItemId
        {
            get;
            set;
        }

        string ItemType
        {
            get;
            set;
        }
    }
}
