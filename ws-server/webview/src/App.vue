<script setup>
const socket = new WebSocket('ws://66.42.50.27:3002');

// Connection opened
socket.addEventListener('open', function (event) {
    // socket.send('Hello Server!');
    // setInterval(() => {
    //   try {
    //      socket.send('client -> server 定时发送')
    //   } catch(err) {
    //     console.log(`client定时发送失败: ${err}`)
    //   }
    // }, 1000)
});

// on message
socket.addEventListener('message', (event) => {
    console.log('Message from server ', event.data);
});
// on closed
socket.addEventListener('close', (event) => {
  console.log(`连接关闭: ${event}`)
})
// on error
socket.addEventListener('error', (err) => {
  console.log(`连接异常: ${err}`)
})
</script>

<template>
  <h1>simple websocket test</h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
