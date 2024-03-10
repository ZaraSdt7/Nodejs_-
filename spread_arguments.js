const http = require("http");
const port = 8000;

function AppServer(...Routeargs) {
  const router = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
  };

  Routeargs.forEach(([method, url, cb]) => {
    router[method][url] = cb;
  });

  const servers = http.createServer((req, res) => {
    const { method, url } = req;
    if (router[method][url]) {
      router[method][url](req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });

  servers.listen(port, () => {
    console.log(`server is listening on ${port}`);
  });

 return servers
}


function Get(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
}

function Post(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => res.end(body));
}
 function Put(req, res) {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => res.end(body));
 }
 function Delete(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Deleted');
 }

const apps = AppServer(
  ["GET", "/", Get],
  ["POST", "/", Post],
  ["PUT","/",Put],
  ["DELETE","/",Delete]
  
);

// apps.listen()
process.on('SIGINT', () => {
  apps.close(() => {
    console.log('Server closed successfully');
    process.exit(0);
  });
});
