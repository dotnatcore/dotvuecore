using System;

namespace DotVueCore.Interfaces
{
    public interface IContext : IDisposable
    {
        void SetTransactional(bool isTransactional);
        void CompleteTransaction();
    }
}
