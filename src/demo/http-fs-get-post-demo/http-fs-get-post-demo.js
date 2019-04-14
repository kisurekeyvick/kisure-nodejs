const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

// 这里暂时将数据写死，现在还未涉及到数据库
let users = [
    { name: 'kisure', password: 25 },
    { name: 'tom', password: 25 },
    { name: 'jason', password: 30 },
];

const server = http.createServer((req, res) => {
    // 解析数据
    let str = '';

    req.on('data', (data)=> {
        str += data;
    });

    req.on('end', () => {
        const obj = urlLib.parse(req.url, true);
        const url = obj.pathname;
        const get = obj.query;
        const post = querystring.parse(str);

        if (url === '/user') {
            /**
             * 接口这边存在2个
             * (1)注册接口：localhost:..../act=reg...... 
             * (2)登录接口：localhost:..../act=login......
             * 
             * 所以才会在siwtch中进行一些简单的判断
             */
            switch(get.act) {
                case 'reg':
                    /**
                     * 如果为reg,需要如下步骤
                     * (1)检查用户名会否已经有了
                     * (2)插入users
                     */
                    if (users.find((item) => item.name === get.user)) {
                        res.write("{'ok': false, 'msg': '用户已存在'}");
                    } else {
                        users.push({ name: [get.user], password: get.password });
                        res.write("{'ok': true, 'msg': '注册成功'}");
                    }
                    break;
                case 'login':
                    /**
                     * 如果为login,需要如下步骤
                     * (1)检查用户是否存在
                     * (2)检查用户密码是否正确
                     */
                    if (!users.find((item) => item.name === get.user)) {
                        res.write("{'ok': false, 'msg': '用户不已存在'}");
                    } else if(!users.find((item) => item.password === get.password)) {
                        res.write("{'ok': false, 'msg': '用户或密码错误'}");
                    } else {
                        res.write("{'ok': true, 'msg': '登录成功'}");
                    }
                    break;
                default:
                    res.write("{'ok': false, 'msg': '未知的act'}");
                    break;
            }

            res.end();
        } else {
            // 读取文件
            const fileName = `${__dirname}/page/${url}`;
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }

                res.end();
            });
        }
    });
});

server.listen(8888);