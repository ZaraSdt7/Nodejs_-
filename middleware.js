
// function myLogger(req, res, next) {
//     console.log('LOGGED');
//     next();
//   }

//   function Get(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('GET request received!');
//   }
  
//   function Post(req, res) {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk;
//     })
//     req.on('end', () => {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(body);
//     });
//   }
  
//   function Put(req, res) {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk;
//     })
//     req.on('end', () => {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(body);
//     })
//   }
  
//   function Delete(req, res) {
//     res.writeHead(204, { 'Content-Type': 'text/plain' });
//     res.end('DELETE request processed!');
//   }
  
//   // Create the server
//   const http = require('http');
//   const server = http.createServer((req, res) => {
//     myLogger(req, res, () => {
//       if (req.method === 'GET' && req.url === '/') {
//       Get(req, res);
//       } else if (req.method === 'POST' && req.url === '/') {
//        Post(req, res);
//       } else if (req.method === 'PUT' && req.url === '/') {
//        Put(req, res);
//       } else if (req.method === 'DELETE' && req.url === '/') {
//        Delete(req, res);
//       } else {
//         // Handle 404 Not Found
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//       }
//     });
//   });
  
//   // Start the server on port 3000
//   const port = 3000;
//   server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
  

const http = require('http');
const port = 3000
function myLogger(req, res, next) {
  console.log('Loged data..');
  next();
}

function handler(req, res) {
  // Route handling 
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }
 else if(req.url === '/' && req.method ==='POST'){
    let body = '';
    req.on('data',(chunk)=>{
        body += chunk;
    })
    req.on('end',()=>{
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(body);
    })
  }
 else if(req.url === '/' && req.method === 'PUT'){
    let body = '';
    req.on('data',(chunk)=>{
        body += chunk;
    })
    req.on('end',()=>{
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(body);
    })
  }
 else if(req.url === '/' && req.method === 'DELETE'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Deleted...');
  }
   else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  } 

}

const server = http.createServer((req, res) => {
  myLogger(req, res, () => {
    handler(req, res);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});