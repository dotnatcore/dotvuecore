using System;
using System.Threading;
using System.Threading.Tasks;
using DotVueCore.DataAccess.Exceptions;
using DotVueCore.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DotVueCore.DataAccess.Uow
{
    public abstract class UnitOfWorkBase<TContext> : IUnitOfWorkBase where TContext : DbContext
    {
        protected internal UnitOfWorkBase(TContext context, IServiceProvider serviceProvider)
        {
            Context = context;
            ServiceProvider = serviceProvider;
        }

        protected TContext Context;
        protected readonly IServiceProvider ServiceProvider;

        public int SaveChanges()
        {
            CheckDisposed();
            return Context.SaveChanges();
        }

        public Task<int> SaveChangesAsync()
        {
            CheckDisposed();
            return Context.SaveChangesAsync();
        }

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            CheckDisposed();
            return Context.SaveChangesAsync(cancellationToken);
        }

        public IRepository<TEntity> GetRepository<TEntity>()
        {
            CheckDisposed();
            var repositoryType = typeof(IRepository<TEntity>);
            var repository = (IRepository<TEntity>)ServiceProvider.GetService(repositoryType);
            if (repository == null)
            {
                throw new RepositoryNotFoundException(repositoryType.Name, String.Format("Repository {0} not found in the IOC container. Check if it is registered during startup.", repositoryType.Name));
            }

            ((IRepositoryInjection)repository).SetContext(Context);
            return repository;
        }

        public TRepository GetCustomRepository<TRepository>()
        {
            CheckDisposed();
            var repositoryType = typeof(TRepository);
            var repository = (TRepository)ServiceProvider.GetService(repositoryType);
            if (repository == null)
            {
                throw new RepositoryNotFoundException(repositoryType.Name, string.Format("Repository {0} not found in the IOC container. Check if it is registered during startup.", repositoryType.Name));
            }

            ((IRepositoryInjection)repository).SetContext(Context);
            return repository;
        }

        #region IDisposable Implementation

        protected bool IsDisposed;

        protected void CheckDisposed()
        {
            if (IsDisposed) throw new ObjectDisposedException("The UnitOfWork is already disposed and cannot be used anymore.");
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!IsDisposed)
            {
                if (disposing)
                {
                    if (Context != null)
                    {
                        Context.Dispose();
                        Context = null;
                    }
                }
            }
            IsDisposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        ~UnitOfWorkBase()
        {
            Dispose(false);
        }

        #endregion
    }
}