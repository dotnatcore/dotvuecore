using System.IO;
using DotVueApp.Web;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace DotVueCore.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var configurations = new ConfigurationBuilder()
                  .AddCommandLine(args)
                  .Build();

            new WebHostBuilder()
                .UseConfiguration(configurations)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .Build()
                .Run();
        }
    }
}
