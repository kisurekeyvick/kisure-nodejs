let fs = require('fs');

/**
 * fs.writeFile
 * 
 * 异步地将数据写入到一个文件，如果文件已存在则覆盖该文件。 data 可以是字符串或 buffer。
 * 参数：
 * (1)file      文件的url路径
 * (2)data      要写入的内容
 * (3)options   部分一般省略即可，或填写'utf-8'
 * (4)callback  回调函数, 回调函数中，只有err一个参数，写入错误即可判断调用
 * 
 * 规则：
 * (1)写入的时候如果没有这个文件，会自动创建这个文件
 * (2)如果被写入的文件已存在内容，那么写入的话，会覆盖之前的内容
 * (3)写入数据的类型必须是字符串或buffer二进制数据，如果是对象等数据写入的话(
 *      例如：let x = {name: 'kisure'} 这种
 *  )，接收的是数据类型(
 *      例如：[object object]
 * )
 */

function writeFile (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }

        console.log('写入成功');
    });
}

writeFile(`${__dirname}/writefile.txt`, 'kisure handsome');