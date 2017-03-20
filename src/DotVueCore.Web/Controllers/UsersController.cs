using System.Linq;
using System.Threading.Tasks;
using DotVueCore.Data.Models;
using DotVueCore.DataAccess.Uow;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DotVueCore.Web.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUowProvider _uowProvider;
        public UsersController(IUowProvider uowProvider)
        {
            _uowProvider = uowProvider;
        }
        // GET: api/users
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            using (var uow = _uowProvider.CreateUnitOfWork())
            {
                var repository = uow.GetRepository<User>();
                //var includes = new Includes<QuestionType>(query =>
                //{
                //    return query.Include(b => b.Questions)
                //                    .ThenInclude(a => a.RtoInfo);
                //});
                var questionTypes = await repository.GetAllAsync(null, null);
                return Ok(questionTypes.Take(15));
            }
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/users
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
