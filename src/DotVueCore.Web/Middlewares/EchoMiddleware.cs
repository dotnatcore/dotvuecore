using System.Threading.Tasks;
using DotVueCore.Web.Extensions;
using Microsoft.AspNetCore.Http;

namespace DotVueCore.Web.Middlewares
{
    public class EchoMiddleware
    {
        private PathString _path;
        private RequestDelegate _next;

        public EchoMiddleware(RequestDelegate next, PathString path)
        {
            _next = next;
            _path = path;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Path != _path)
            {
                await _next(context);
                return;
            }

            var socket = await context.WebSockets.AcceptWebSocketAsync();
            while (true)
            {
                var msg = await socket.ReceiveTextAsync();
                if (msg == null)
                {
                    return;
                }
                await socket.SendAsync(msg);
            }
        }
    }
}
