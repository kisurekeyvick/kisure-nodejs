/*
    (1) 创建服务
    const service = exporess();

    (2) 监听
    server.listen(8080);

    (3)处理请求
    server.use('地址'， function(req, res) {
    });

    (4) 存在3种方法接收用户请求的方法
    .get('/', function(req, res) {})    接收用户的get请求
    .post('/', function(req, res) {})   接收用户的post请求
    .use('/', function(req, res) {})    通用的，无论get还是post都可以使用这一步
 */

const express = require('express');
const expressStatic = require('express-static');

// 写死数据
const userData = {
    'kisure': '1234',
    'tom': '5362'
};

const server = express();
server.listen(8080);

// 当页面打开输入url:http://localhost:8080/login?pass=%27124%27&user=%27kisure%27
server.get('/login', function(req, res) {
    const user = req.query['user'];
    const pass = req.query['pass'];

    if(userData[user] === null) {
        res.send({ok: false, msg: '不存在用户'});
    } else if(userData[user] !== pass) {
        res.send({ok: false, msg: '密码错误'});
    } else {
        res.send({ok: true, msg: '成功登录'});
    }
});

server.use(expressStatic('./page'));