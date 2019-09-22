const http = require('http');
const fs = require('fs');
const URL = require('url');

const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36";
// process.stdout.write("请输入url:");
// process.stdin.on('data', input => {
//     input=input.toString().trim();
//     /** 
//      * url.parse(input)
//      * 传入一个网站url，url.parse就会对其进行解析，然后展示相关的参数结果：
//      * {
//      *      protocol:  协议(http/https)
//      *      host: 由port和hostname组成 站点
//      *      port:   端口
//      *      hostname: 站点的名字
//      *      path:
//      *      pathname: 路径的名称
//      *      href: 整个网站的路径
//      *      hash: 哈希   URL中#后面的那部分
//      * }
//      */
//     console.log(url.parse(input)); 
// });

/**
 * http.request()返回http.ClientRequest该类的实例，该实例是可写流
 * 
 * Buffer：
 * Buffer.concat 返回一个新值Buffer，该值是将所有Buffer 实例连接list在一起的结果。
 * 如果列表中没有任何项，或者列表totalLength为0，则Buffer返回新的零长度。
 */
const request = url => {
    return new Promise((resolve, reject) => {
        http.request({
            hostname: URL.parse(url).hostname,
            path: URL.parse(url).pathname,
            headers: {
				"User-Agent": ua
			}
        }, res => {
            const buffer = [];

            res.on('data', chunk => {
                buffer.push(chunk);
            });

            res.on('end', () => {
                resolve(Buffer.concat(buffer).toString());
            });
        }).on('error', error => {
            reject(error);
        }).end();
    });
};

const requestImage = (url, path) => {
    return new Promise((resolve, reject) => {
        http.request({
            hostname: URL.parse(url).hostname,
            path: URL.parse(url).pathname,
            headers: {
                "User-Agent": ua
            }
        }, res => {
            if (res.statusCode === 404) {
                reject('没有获取到');
                return;
            }

            const fileName = url.match(/\w+\.\w+$/g)[0];

            res.pipe(fs.createWriteStream(`${path}/${fileName}`));

            resolve();
        }).on('error', error => {
            reject(error);
        }).end();
    });
};

const createDir = path => {
    return new Promise((resolve, reject) => {
        /** 
         * fs.stat 返回文件的信息
         */
        fs.stat(path, (error, stats) => {
            if (error) {
                fs.mkdir(path, () => {
                    resolve();
                });
            } else {
                resolve();
            }
        });
    });
};

export {
    request,
    requestImage,
    createDir
}