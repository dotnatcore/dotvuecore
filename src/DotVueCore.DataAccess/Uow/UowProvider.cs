using System;
using DotVueCore.DataAccess.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DotVueCore.DataAccess.Uow
{
    public class UowProvider : IUowProvider
    {
        public UowProvider()
        { }

        public UowProvider(ILogger<DotVueCore.DataAccess.DataAccess> logger, IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        private readonly ILogger _logger;
        private readonly IServiceProvider _serviceProvider;
        
        public IUnitOfWork CreateUnitOfWork(bool trackChanges = true, bool enableLogging = false)
        {
            var context = (DbContext)_serviceProvider.GetService(typeof(IEntityContext));

            if ( !trackChanges )
                context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;

            var uow = new UnitOfWork(context, _serviceProvider);
            return uow;
        }

        public IUnitOfWork CreateUnitOfWork<TEntityContext>(bool trackChanges = true, bool enableLogging = false) where TEntityContext : DbContext
        {
            var context = (TEntityContext)_serviceProvider.GetService(typeof(IEntityContext));

            if (!trackChanges)
                context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;

            var uow = new UnitOfWork(context, _serviceProvider);
            return uow;
        }
    }
}
