const http = require('http');

/**
 * post的数据是在body里面的
 * 
 * post头部最大不能到32K（<32k）
 * body最大能够到达1G
 * 
 * post如果说传输的数据很大的时候，post会分段传输
 */

const server = http.createServer((req, res) => {
    // post -> req
    let result = '';
    let count = 0;

    // data 表示的是当一段数据传输过来的时候，就会触发（也就是说存在多次触发）
    req.on('data', (data) => {
        count ++;
        console.log(`这是第${count}次触发data事件`);
        result += data;
    });

    // end 表示的是数据全部到达的时候（也就是说只存在一次触发）
    req.on('end', () => {
        console.log(`传输结束，传输的值为${result},总共传输了${count}次`);
    });
});

server.listen(8888);