

const http = require("http");
const port = 5000;

const router = {
  "GET": {},
  "POST": {},
  "PUT": {},
  "DELETE": {}
};

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (router[method][url]) {
    router[method][url](req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Add  GET routes 
router.GET["/"] = (_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
}
//POST route
router.POST["/"] = (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  })
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(body);
  })
}
//PUT route
router.PUT["/"] = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    })
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Received PUT request with body: ${body}`);
    })
  }
  
  //  DELETE route
  router.DELETE["/"] = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Deleted Piece of Content!');
  }
server.listen(port, () => {
  console.log(`server is listening on ${port}`);
})

