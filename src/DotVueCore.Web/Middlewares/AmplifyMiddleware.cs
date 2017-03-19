using System;
using System.Threading.Tasks;
using DotVueCore.Web.Extensions;
using Microsoft.AspNetCore.Http;


namespace DotVueCore.Web.Middlewares
{
    public class AmplifyMiddleware
    {
        private PathString _path;
        private RequestDelegate _next;

        public AmplifyMiddleware(RequestDelegate next, PathString path)
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
                    break;
                }
                int n;
                if (int.TryParse(msg, out n))
                {
                    n = (n > 0 && n < 19) ? n : 1;
                    await socket.SendAsync(new string('x', (int)Math.Pow(2, n)));
                }
            }
        }
    }
}
