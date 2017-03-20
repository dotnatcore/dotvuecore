using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotVueApp.Data.Models;
using DotVueApp.DataAccess.Uow;
using DotVueApp.ViewModel.Auths;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DotVueApp.Api.Controllers
{
    [Route("api/[controller]")]
    public class AuthsController : Controller
    {
        private readonly IUowProvider _uowProvider;
        public AuthsController(IUowProvider uowProvider)
        {
            _uowProvider = uowProvider;
        }
        // GET: api/auths
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/auths/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/auths
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]UserLoginViewModel model)
        {
            Console.WriteLine(JsonConvert.SerializeObject(model));
            return Ok(new TokenViewModel()
            {
                Id = 1,
                Name = "test token",
                Token = "543220132",
                Message="Success"
            });
        }

        // PUT api/auths/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/auths/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
