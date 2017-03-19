using System;
using Microsoft.AspNetCore.Http;

namespace DotVueCore.SockJs
{
    public class SockJsOptions
    {
        public SockJsOptions()
        {
            JSClientLibraryUrl = "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js";
            MaxResponseLength = 128 * 1024;
            UseWebSocket = true;
            SetJSessionIDCookie = false;
            HeartbeatInterval = TimeSpan.FromSeconds(25);
            DisconnectTimeout = TimeSpan.FromSeconds(50);
            RewritePath = null;
        }

        public string JSClientLibraryUrl { get; set; }

        public int MaxResponseLength { get; set; }

        public bool UseWebSocket { get; set; }

        public bool SetJSessionIDCookie { get; set; }

        public TimeSpan HeartbeatInterval { get; set; }

        public TimeSpan DisconnectTimeout { get; set; }

        public PathString RewritePath { get; set; }
    }
}
