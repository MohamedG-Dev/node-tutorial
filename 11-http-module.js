const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url==='/about'){
        res.end('This is our short history');
    }
    if(req.url==='/error'){
        res.end(`
        <h1>Oops</h1>
        <p>unable to find the request</p>
        <a href="/">back to home page</a>
        `);
    }
    
})

server.listen(5000)