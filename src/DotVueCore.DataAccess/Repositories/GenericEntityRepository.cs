using DotVueCore.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DotVueCore.DataAccess.Repositories
{
    public class GenericEntityRepository<TEntity> : EntityRepositoryBase<DbContext, TEntity> where TEntity : EntityBase, new()
    {
		public GenericEntityRepository(ILogger<DotVueCore.DataAccess.DataAccess> logger) : base(logger, null)
		{ }
	}
}