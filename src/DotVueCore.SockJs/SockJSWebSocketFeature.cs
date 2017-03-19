using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;

namespace DotVueCore.SockJs
{
    internal class SockJsWebSocketFeature : IHttpWebSocketFeature
    {
        private readonly IHttpWebSocketFeature _feature;

        public SockJsWebSocketFeature(IHttpWebSocketFeature httpWebSocketFeature)
        {
            _feature = httpWebSocketFeature;
        }

        public bool IsWebSocketRequest
        {
            get
            {
                return _feature.IsWebSocketRequest;
            }
        }

        public async Task<WebSocket> AcceptAsync(WebSocketAcceptContext context)
        {
            var socket = new SockJsWebSocket(await _feature.AcceptAsync(context));
            await socket.OpenAsync(CancellationToken.None);
            return socket;
        }
    }
}