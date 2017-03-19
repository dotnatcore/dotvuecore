using DotVueCore.SockJs;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace DotVueCore.Web.Middlewares
{
    public static class ApplicationBuilderExtensions
    {
        public static void UseBroadcast(this IApplicationBuilder app, PathString path, SockJsOptions options = null)
        {
            app.UseSockJS(path, options ?? new SockJsOptions());
            app.UseMiddleware<BroadcastMiddleware>(path);
        }

        public static void UseEcho(this IApplicationBuilder app, PathString path, SockJsOptions options = null)
        {
            app.UseSockJS(path, options ?? new SockJsOptions());
            app.UseMiddleware<EchoMiddleware>(path);
        }

        public static void UseClose(this IApplicationBuilder app, PathString path, SockJsOptions options = null)
        {
            app.UseSockJS(path, options ?? new SockJsOptions());
            app.UseMiddleware<CloseMiddleware>(path);
        }

        public static void UseTicker(this IApplicationBuilder app, PathString path, SockJsOptions options = null)
        {
            app.UseSockJS(path, options ?? new SockJsOptions());
            app.UseMiddleware<TickerMiddleware>(path);
        }

        public static void UseAmplify(this IApplicationBuilder app, PathString path, SockJsOptions options = null)
        {
            app.UseSockJS(path, options ?? new SockJsOptions());
            app.UseMiddleware<AmplifyMiddleware>(path);
        }
    }
}
