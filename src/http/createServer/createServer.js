let http = require('http');

/** 
 * 创建一个服务器，回调函数表示接收到请求之后做的事情
 * http.createServer,新建以后会返回http.Server实例
*/
const server = http.createServer((req, res) => {
    // req代表请求，res代表响应
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
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF8'
        });
        res.end('<p>kisure hello world,current url equal /</p>');
    } else
        res.end('kisure hello world');
});

/**
 * 启动一个HTTP服务器来监听连接。
 * 参数：(端口，ip)
 */
server.listen(8080);