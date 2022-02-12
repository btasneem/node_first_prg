const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url==='/about'){
        res.end('Here is our short introduction');
    }
   res.end(`
   <h1>Oops!</h1>
   <p>We cannot seem to find the requested page</p>
   <a href="/">Back</a>
   `)
});

server.listen(5000);