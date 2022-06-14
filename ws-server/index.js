import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3002 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send(`reply ${data}: hi, i am back`, (err) => {
      if(err) {
        console.log(`出现异常: ${err}`)
      }
    })
  });

  setInterval(() => {
    let message = `测试的消息，时间戳为： ${new Date().getTime()}`
    ws.send(message, (err) => {
      if(err) {
        console.log(`出现异常: ${err}, 消息内容${message}`)
      }
      console.log(`消息发送成功:${message}`)
    });
  }, 10000)
});