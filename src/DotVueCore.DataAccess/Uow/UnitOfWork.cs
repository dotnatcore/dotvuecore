using System;
using Microsoft.EntityFrameworkCore;

namespace DotVueCore.DataAccess.Uow
{
    public class UnitOfWork : UnitOfWorkBase<DbContext>, IUnitOfWork
    {
        public UnitOfWork(DbContext context, IServiceProvider provider) : base(context, provider)
        { }
    }
}
