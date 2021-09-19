const http=require('http');

//Existing way to create a server
// const server=http.createServer((req,res)=>{
//    res.end('Welcome');
//}).listen(5000);

//using Even Emitter API
const server=http.createServer();
//emits request event
// subcribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end('Hello World!')
})

server.listen(5000)