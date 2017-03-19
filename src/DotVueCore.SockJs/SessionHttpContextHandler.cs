using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace DotVueCore.SockJs
{
    internal delegate Task SessionHttpContextHandler(HttpContext context, string sessionId);
}
