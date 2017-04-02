using System;
using System.Threading.Tasks;
using AspectCore.Abstractions;
using Newtonsoft.Json;

namespace DotVueCore.Web.Interceptors.Attributes
{
    public class ControllerInterceptorAttribute : InterceptorAttribute
    {
        public override async Task Invoke(AspectContext context, AspectDelegate next)
        {
            try
            {
                Console.WriteLine("Controller Before Action call");
                foreach (var parameter in context.Parameters)
                {
                    Console.WriteLine(parameter.Name);
                    Console.WriteLine(JsonConvert.SerializeObject(parameter.Value));
                    Console.WriteLine(parameter.ParameterType.Name);
                }
                await next(context);
                //Console.WriteLine(JsonConvert.SerializeObject(context.ReturnParameter.Value));
            }
            catch (Exception ex)
            {
                Console.WriteLine("Controller Action threw an exception! "+ex.ToString());
                throw;
            }
            finally
            {
                Console.WriteLine("Controller After Action call");
            }
        }
    }
}
