using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;

namespace DotVueCore.SockJs
{
    internal class SessionWebSocketFeature : IHttpWebSocketFeature
    {
        private readonly Session _session;
        private readonly TaskCompletionSource<bool> _acceptedTcs;

        public SessionWebSocketFeature(TaskCompletionSource<bool> completionSource, Session session)
        {
            _session = session;
            _acceptedTcs = completionSource;
        }

        public Task IsAcceptedPromise { get { return _acceptedTcs.Task; } }

        public bool IsWebSocketRequest
        {
            get
            {
                return true;
            }
        }

        public async Task<WebSocket> AcceptAsync(WebSocketAcceptContext context)
        {
            try
            {
                WebSocket ws = await _session.AcceptWebSocket();
                return ws;
            }
            finally
            {
                _acceptedTcs.SetResult(true);
            }
        }
    }
}
