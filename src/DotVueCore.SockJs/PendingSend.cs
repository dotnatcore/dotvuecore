using System;
using System.IO;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;

namespace DotVueCore.SockJs
{
    public class PendingSend
    {
        private TaskCompletionSource<bool> _tcs;

        public WebSocketMessageType Type { get; private set; }
        public ArraySegment<byte> Buffer { get; private set; }
        public Task CompleteTask { get { return _tcs.Task; } }
        public CancellationToken CancellationToken { get; private set; }

        public PendingSend(TaskCompletionSource<bool> tcs, WebSocketMessageType type, ArraySegment<byte> buffer, CancellationToken cancellationToken)
        {
            Type = type;
            _tcs = tcs;
            Buffer = buffer;
            CancellationToken = cancellationToken;
        }

        public void CompleteCloseSent()
        {
            _tcs?.SetException(new InvalidOperationException("Session is not open"));
        }

        public void CompleteDisposed()
        {
            _tcs?.SetException(SessionWebSocket.NewDisposedException());
        }

        public void CompleteClientTimeout()
        {
            _tcs?.SetException(new IOException("Connection timed out"));
        }

        public void CompleteSuccess()
        {
            _tcs?.SetResult(true);
        }

        public void CompleteException(Exception e)
        {
            _tcs?.SetException(e);
        }
    }
}
