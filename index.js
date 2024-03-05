const http = require("http")
const port = 3000;

const server = http.createServer((req,res)=>{
    const {method , url} = req;

    //handler
    if(method === "GET" && url === '/'){
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end('Hello world')
    }
    else if(method === "POST" && url === '/'){
        const body = '';
        req.on('data',(chunk)=>{
            body = chunk;
        })
        res.on('end',()=>{
            res.writeHead(200,{'Content-Type': 'application/json'})
            res.end(body)
        })
    }
    else{
        res.writeHead(400,{'Content-Type': 'application/json'})
        res.end('Bad Request')
    }
})
server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})