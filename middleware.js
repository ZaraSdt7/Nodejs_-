
// // function myLogger(req, res, next) {
// //     console.log('LOGGED');
// //     next();
// //   }

// //   function Get(req, res) {
// //     res.writeHead(200, { 'Content-Type': 'text/plain' });
// //     res.end('GET request received!');
// //   }
  
// //   function Post(req, res) {
// //     let body = '';
// //     req.on('data', (chunk) => {
// //       body += chunk;
// //     })
// //     req.on('end', () => {
// //       res.writeHead(200, { 'Content-Type': 'text/plain' });
// //       res.end(body);
// //     });
// //   }
  
// //   function Put(req, res) {
// //     let body = '';
// //     req.on('data', (chunk) => {
// //       body += chunk;
// //     })
// //     req.on('end', () => {
// //       res.writeHead(200, { 'Content-Type': 'text/plain' });
// //       res.end(body);
// //     })
// //   }
  
// //   function Delete(req, res) {
// //     res.writeHead(204, { 'Content-Type': 'text/plain' });
// //     res.end('DELETE request processed!');
// //   }
  
// //   // Create the server
// //   const http = require('http');
// //   const server = http.createServer((req, res) => {
// //     myLogger(req, res, () => {
// //       if (req.method === 'GET' && req.url === '/') {
// //       Get(req, res);
// //       } else if (req.method === 'POST' && req.url === '/') {
// //        Post(req, res);
// //       } else if (req.method === 'PUT' && req.url === '/') {
// //        Put(req, res);
// //       } else if (req.method === 'DELETE' && req.url === '/') {
// //        Delete(req, res);
// //       } else {
// //         // Handle 404 Not Found
// //         res.writeHead(404, { 'Content-Type': 'text/plain' });
// //         res.end('Not Found');
// //       }
// //     });
// //   });
  
// //   // Start the server on port 3000
// //   const port = 3000;
// //   server.listen(port, () => {
// //     console.log(`Server is listening on port ${port}`);
// //   });
  

// const http = require('http');
// const port = 3000
// function myLogger(req, res, next) {
//   console.log('Loged data..');
//   next();
// }

// function handler(req, res) {
//   // Route handling 
//   if (req.url === '/' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
//   }
//  else if(req.url === '/' && req.method ==='POST'){
//     let body = '';
//     req.on('data',(chunk)=>{
//         body += chunk;
//     })
//     req.on('end',()=>{
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end(body);
//     })
//   }
//  else if(req.url === '/' && req.method === 'PUT'){
//     let body = '';
//     req.on('data',(chunk)=>{
//         body += chunk;
//     })
//     req.on('end',()=>{
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end(body);
//     })
//   }
//  else if(req.url === '/' && req.method === 'DELETE'){
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Deleted...');
//   }
//    else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   } 

// }

// const server = http.createServer((req, res) => {
//   myLogger(req, res, () => {
//     handler(req, res);
//   });
// });

// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const http = require('node:http')

class App
{
    routes = {
        'GET': {},
        'POST': {},
        'PUT': {},
        'PATCH': {},
        'DELETE': {},
    }

    server = http.createServer(async (req, res) =>
    {
        const routeHandlers = this.routes[ req.method ][ req.url ]

        if (!routeHandlers || routeHandlers.length === 0)
        {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Not Found')
            return
        }

        function routeHandlerRunner(index)
        {
            routeHandlers[ index ](req, res, (error) =>
            {
                if (error)
                {
                    res.writeHead(500, { 'Content-Type': 'text/plain' })
                    res.end(error)
                    return
                }
    
                if (index + 1 < routeHandlers.length)
                {
                    routeHandlerRunner(index + 1)
                }
            })
        }
 
// این تکه از کد، یک کالبک برای ایجاد سرور HTTP را تعریف می‌کند. وقتی یک درخواست HTTP به سرور ارسال می‌شود، این کالبک فراخوانی می‌شود. در ابتدا، مسیر مربوط به درخواست (متن درخواست و URL) از this.routes دریافت می‌شود.

// سپس، چک می‌شود که آیا مسیر مورد نظر موجود است یا خیر. اگر مسیری برای درخواست موجود نباشد یا تعداد توابعی که برای آن مسیر تعریف شده است صفر باشد، یک پاسخ 404 (Not Found) با متن 'Not Found' ارسال می‌شود و اجرای کالبک به پایان می‌رسد.

// اگر مسیر موجود باشد، یک تابع به نام routeHandlerRunner فراخوانی می‌شود. این تابع وظیفه دارد تمام توابع مربوط به مسیر را از ابتدا به ترتیب اجرا کند. اگر تعداد توابع بیشتر از یکی باشد، این تابع به صورت بازگشتی خود را فراخوانی می‌کند تا تمام توابع اجرا شوند. اگر در طول اجرا خطایی رخ دهد، یک پاسخ 500 (Internal Server Error) ارسال می‌شود و اجرای توابع متوقف می‌شود.

// در نهایت، این تکه کد با فراخوانی routeHandlerRunner برای اولین بار (از اندیس 0) شروع می‌شود تا همه توابع مربوط به مسیر مورد نظر اجرا شوند.







        routeHandlerRunner(0)
    })

    addRoute(method, url, ...handlers)
    {
        if (!this.routes[ method ][ url ])
            this.routes[ method ][ url ] = []

        this.routes[ method ][ url ].push(...handlers)
    }

    get(url, ...handlers)
    {
        this.addRoute('GET', url, ...handlers)
    }

    post(url, ...handlers)
    {
        this.addRoute('POST', url, ...handlers)
    }

    put(url, ...handlers)
    {
        this.addRoute('PUT', url, ...handlers)
    }

    patch(url, ...handlers)
    {
        this.addRoute('PATCH', url, ...handlers)
    }

    delete(url, ...handlers)
    {
        this.addRoute('DELETE', url, ...handlers)
    }

    listen(port = 3000, hostname = 'localhost', cb = () => {})
    {
        this.server.listen(port, hostname)
        cb()
    }
}









const app = new App()
app.listen(3000, 'localhost', () => { console.log('App is running') })



app.get( '/',
    (req, res, next) => next('dsadsads'),
    (req, res) => res.end('Hdasdsadsadeelllllll'),
)

