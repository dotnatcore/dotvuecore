using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotVueApp.Data.Models;
using DotVueApp.DataAccess.Query;
using DotVueApp.DataAccess.Uow;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotVueApp.Api.Controllers
{
    [Route("api/[controller]")]
    public class QuestionTypesController : Controller
    {
        private readonly IUowProvider _uowProvider;
        public QuestionTypesController(IUowProvider uowProvider)
        {
            _uowProvider = uowProvider;
        }
        // GET api/questiontypes
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            using (var uow = _uowProvider.CreateUnitOfWork())
            {
                var repository = uow.GetRepository<QuestionType>();
                //var includes = new Includes<QuestionType>(query =>
                //{
                //    return query.Include(b => b.Questions)
                //                    .ThenInclude(a => a.RtoInfo);
                //});
                var questionTypes= await repository.GetAllAsync(null, null);
                return Ok(questionTypes);
            }
        }

        // GET api/questiontypes/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/questiontypes
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/questiontypes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/questiontypes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
