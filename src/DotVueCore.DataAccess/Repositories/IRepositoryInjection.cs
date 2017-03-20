using Microsoft.EntityFrameworkCore;

namespace DotVueCore.DataAccess.Repositories
{
    public interface IRepositoryInjection
    {
        IRepositoryInjection SetContext(DbContext context);
    }
}