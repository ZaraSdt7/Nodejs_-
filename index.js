// const http = require("http")
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     const {method , url} = req;

//     //handler
//     if(method === "GET" && url === '/'){
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
//     }
//     else if(method === "POST" && url === '/'){
//         const body = '';
//         req.on('data',(chunk)=>{
//             body = chunk.toString();
//         })
//         res.on('end',()=>{
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end(body);
//         })
//     }
//     else{
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// })
// server.listen(port,()=>{
//     console.log(`server is listening on ${port}`);
// })

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")

    const parseddata = url.parse(req.url, true)

    const reqUrl = parseddata.pathname

    if (req.method == "GET") {
        if (reqUrl == "/") {
            res.write("Hello, data sent\n" +  JSON.stringify(parseddata.query))
            res.end()
        }
    } else if (req.method == "POST") {
        if (reqUrl == "/hello") {
            res.write("hello world")
            res.end()
        }
    }
})

server.listen(3000)