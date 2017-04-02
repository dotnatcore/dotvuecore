using DotVueCore.Web.Interceptors.Attributes;
using Microsoft.AspNetCore.Mvc;

namespace DotVueCore.Web.Controllers
{
    [ControllerInterceptor]
    public class HomeController : Controller
    {
        public virtual IActionResult Index()
        {
            return View();
        }

        public virtual IActionResult Error()
        {
            return View();
        }
    }
}