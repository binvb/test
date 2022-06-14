import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3002 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send(`reply ${data}: hi, i am back`)
  });

  setInterval(() => {
    ws.send('interval message');
  }, 10000)
});