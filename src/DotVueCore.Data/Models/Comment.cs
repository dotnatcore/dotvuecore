using System;
using DotVueCore.Interfaces;

namespace DotVueCore.Data.Models
{
    public partial class Comment : IComment
    {
        IPost IComment.Post
        {
            get { return Post; }
            set { Post = (Post)value; }
        }
    }
}