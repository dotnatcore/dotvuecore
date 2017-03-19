using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace DotVueCore.SockJs
{
    public static class ApplicationBuilderExtensions
    {
        public static void UseSockJS(this IApplicationBuilder app, PathString prefix)
        {
            UseSockJS(app, prefix, new SockJsOptions());
        }
        public static void UseSockJS(this IApplicationBuilder app, PathString prefix, SockJsOptions options)
        {
            app.Use(next => new SessionManager(prefix, next, options).Invoke);
        }
    }
}