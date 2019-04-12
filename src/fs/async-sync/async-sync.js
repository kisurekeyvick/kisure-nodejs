let fs = require('fs');

/**
 * fs.readFile
 * 
 * 异步读取文件中的全部内容
 * 参数：
 * (1)path      文件目录，路径
 * (2)options   如果 options 是字符串，则它指定字符编码（例如：utf8）
 * (3)callback  回调会传入两个参数 (err, data)，其中 data 是文件的内容
 */

/**
 * __dirname
 * Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径。 
 * 不管你在哪里调用这个js，__dirname始终指向的是async-sync.js的绝对路径
 * 当你在src/fs/async-sync/async-sync.js文件中写了__dirname，那么他的值就是src/fs/async-sync/
 */
function fsFunc(fileName, type = 'txt') {
    return new Promise((resolve, reject) => {
        const defaultPath = __dirname + '/';
        const filePath = defaultPath + `${fileName}.${type}`;

        fs.readFile(filePath, (err, data) => {
            if (err) {
                throw new Error(err);
            }
        
            resolve(data);
        });
    });
}

fsFunc('kisure').then((res) => {
    console.log(res);
    console.log('异步读取文件 成功', res.toString());
});
console.log('异步读取文件');

/**
 * fs.readFileSync
 * 
 * 同步读取文件中的全部内容
 * 参数：
 * (1)path      文件目录，路径
 * (2)options   如果 options 是字符串，则它指定字符编码（例如：utf8）
 * 
 * fs.readFileSync()返回string或者buffer
 */
const getTxtContent = (fileName, type = 'txt') => {
    const defaultPath = __dirname + '/';
    const filePath = defaultPath + `${fileName}.${type}`;

    return fs.readFileSync(filePath);
};

const txt = getTxtContent('kisure');

console.log('同步读取文件', txt.toString());
