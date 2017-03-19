using System;
using DotVueCore.SockJs;
using DotVueCore.Web.Middlewares;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Nancy;
using Nancy.Owin;

namespace DotVueCore.Web
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }
        public static readonly TimeSpan CloseDisconnectTimeout = TimeSpan.FromSeconds(2);

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseWebSockets();
            app.UseBroadcast("/broadcast");
            app.UseEcho("/echo", new SockJsOptions() { MaxResponseLength = 4096 });
            app.UseEcho("/disabled_websocket_echo", new SockJsOptions() { UseWebSocket = false });
            app.UseEcho("/cookie_needed_echo", new SockJsOptions() { SetJSessionIDCookie = true });
            app.UseClose("/close", new SockJsOptions() { HeartbeatInterval = TimeSpan.FromSeconds(10), DisconnectTimeout = CloseDisconnectTimeout });
            app.UseTicker("/ticker");
            app.UseAmplify("/amplify");

            app.UseOwin(x => x.UseNancy(options => options.PassThroughWhenStatusCodesAre(
                HttpStatusCode.NotFound,
                HttpStatusCode.InternalServerError
            )));

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });

            
        }
    }
}