﻿using System;
using System.Threading;
using System.Threading.Tasks;
using DotVueCore.DataAccess.Repositories;

namespace DotVueCore.DataAccess.Uow
{
    public interface IUnitOfWork : IDisposable
    {
        int SaveChanges();
        Task<int> SaveChangesAsync();
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);

        IRepository<TEntity> GetRepository<TEntity>();
        TRepository GetCustomRepository<TRepository>();
    }
}
