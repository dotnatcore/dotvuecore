using System;
using System.Linq;
using System.Threading.Tasks;
using DotVueCore.Interfaces;
using DotVueCore.ViewModel;
using DotVueCore.Web.Interceptors.Attributes;
using Microsoft.AspNetCore.Mvc;

namespace DotVueCore.Web.Controllers
{
    [ControllerInterceptor]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IBlogRepository _repository;
        public UsersController(IBlogRepository repository)
        {
            Console.WriteLine("UsersController Constructor");
            _repository = repository;
        }
        // GET: api/users
        [HttpGet]
        public virtual async Task<IActionResult> Get()
        {
            Console.WriteLine("UsersController Gets");
            using (var ctx = _repository.CreateBlogContext(false))
            {
                var users = await ctx.GetUsersAsync(null, null);
                return Ok(users.Select(UserViewModel.Fetch));
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
