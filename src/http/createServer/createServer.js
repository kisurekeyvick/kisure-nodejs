let http = require('http');

/** 
 * 创建一个服务器，回调函数表示接收到请求之后做的事情
 * http.createServer,新建以后会返回http.Server实例
*/
const server = http.createServer((req, res) => {
    // req代表浏览器请求过来的信息，res代表后端返回给前端的响应
    /**
     * res.end()
     * 此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。 必须在每个响应上调用此 response.end() 方法。
     * 如果不写res.end(),那么就会导致浏览器会一直等待服务器响应，而浏览器存在内置的事件，如果超过一定的时间以后，浏览器就会就会返回http状态码504
     */
    if (req.url === '/') {
        /**
         * res.writeHead()
         * 作用：向请求发送响应头
         * 参数：
         * (1)statusCode        状态码是一个 3 位的 HTTP 状态码  
         * (2)statusMessage     HTTP 响应状态消息（原因短语）。 例如 OK 或 Internal Server Error。
         * (3)headers           响应头
         * 
         * 
         * 此方法只能在消息上调用一次，并且必须在调用 response.end() 之前调用
         */

        /**
         * req.url代表的是一个绝对路径
         * 我们可以更具这个req.url进行控制显示不同的页面内容
         */

        /**
         * res.setHeader()
         * 作用：
         * 
         * 注意：
         * 当使用 response.setHeader() 设置响应头时，它们将与传给 response.writeHead() 的任何响应头合并，其中 response.writeHead() 的响应头优先。
         */

        /**
         * 在http模块中，所有的方法都要写在res.end()之前，一旦res.end()，那么写在res.end()之后的操作是不起效果的，并且node会报错
         */
        res.writeHead(200, 'ok-kisure', {
            'Content-Type': 'text/html;charset=UTF8'
        });
        res.end('<p>kisure hello world,current url equal /</p>');
    } else
        res.end('kisure hello world');
});

/**
 * 启动一个HTTP服务器来监听连接。
 * 参数：(端口，ip)
 * 
 * 端口的作用：
 * 一台服务器可以同时对外提供多种服务，而客户端要进行访问某个网址的时候，需要经过服务器，而服务器则通过端口号，找到对应的服务
 * 
 * 本地访问的时候，默认端口是80，如果你自己定义了其他的端口号，那么就要：localhost:端口号 
 */
server.listen(8080);

/**
 * 其他：
 * (1) 当我们创建一个http服务的时候，在服务里面存在一个回调函数，这个回调函数存在2个参数，其中一个是req
 *      当我们console.log(req.url)的时候，除了会返回给我们url地址以外，还会返回一个favicon.ico，这个favicon.ico代表的是网站的图标
 * 
 * 
 * 
 */



/**
 * res.write()  是什么？
 */