using System.Text.RegularExpressions;

namespace DotVueCore.SockJs
{
    internal class Route
    {
        public Route(string method, int type, bool regex, string match, SessionHttpContextHandler handler)
        {
            Method = method;
            Type = type;
            if (regex)
            {
                RegEx = new Regex(match);
            }
            else
            {
                Raw = match;
            }
            Handler = handler;
        }
        public string Method { get; set; }
        public int Type { get; set; }
        public Regex RegEx { get; set; }
        public string Raw { get; set; }
        public SessionHttpContextHandler Handler { get; set; }
    }
}
