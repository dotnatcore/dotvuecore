using System.Linq;
using System.Reflection;
using Microsoft.Extensions.DependencyModel;

namespace DotVueCore.Web.Refections
{
    public class AppDomain
    {
        public static AppDomain CurrentDomain { get; private set; }

        static AppDomain()
        {
            CurrentDomain = new AppDomain();
        }

        public Assembly[] GetAssemblies()
        {
            var dependencies = DependencyContext.Default.RuntimeLibraries;
            return (from library in dependencies where IsCandidateCompilationLibrary(library) select Assembly.Load(new AssemblyName(library.Name))).ToArray();
        }

        private static bool IsCandidateCompilationLibrary(Library compilationLibrary)
        {
            return compilationLibrary.Name == ("EFCore.ViewModel")
                || compilationLibrary.Dependencies.Any(d => d.Name.StartsWith("EFCore.ViewModel"));
        }
    }
}
