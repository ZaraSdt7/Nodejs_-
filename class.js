

const http = require("http");
const port = 5000;

class Apps {
  constructor(){
     this.router = {
      GET: {},
      POST: {},
      PUT: {},
      DELETE: {}
    };
    this.server = http.createServer(this.handleRequest.bind(this));
  }

  addRoute(method, url, cb) {
    this.router[method][url] = cb;
  }

  handleRequest(req, res) {
    const { method, url } = req;
    if (this.router[method][url]) {
      this.router[method][url](req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }

  listen() {
    this.server.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  }

  //  GET route
  addGetRoute(url, cb) {
    this.addRoute("GET", url, cb);
  }

  // POST route
  addPostRoute(url, cb) {
    this.addRoute("POST", url, cb);
  }

  // PUT route
  addPutRoute(url, cb) {
    this.addRoute("PUT", url, cb);
  }

  // DELETE route
  addDeleteRoute(url, cb) {
    this.addRoute("DELETE", url, cb);
  }
}
const server = new Apps();
server.addGetRoute("/", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

server.addPostRoute("/", (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  })
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(body);
  })
});

server.addPutRoute("/", (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  })
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(body);
  })
});

server.addDeleteRoute("/", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Deleted');
});

server.listen();