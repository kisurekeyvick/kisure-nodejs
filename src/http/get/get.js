const http = require('http');
const querystring = require('querystring');

/**
 * querystring（查询字符串）
 * querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具
 */

/**
 * 请求方式：
 * get      数据在url中
 * post     数据不在url中
 */

 const server = http.createServer((req, res) => {
    let get = {};
    console.log(req.url);

    if (req.url.indexOf('?') != -1) {
        const paramArr = req.url.split('?')[1];
        get = querystring.parse(paramArr);
        console.log(get);
    } else {

    }

    console.log(req.url);
    res.write('aaa');
    res.end();
 }); 

 server.listen(8888);