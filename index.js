const http = require("http")
const port = 3000;

const server = http.createServer((req,res)=>{
    const {method , url} = req;

    //handler
    if(method === "GET" && url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, world!');
    }
    else if(method === "POST" && url === '/'){
        let body = '';
        req.on('data',(chunk)=>{
            body += chunk;
        })
        req.on('end',()=>{
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(body);
        })
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
})
server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})

