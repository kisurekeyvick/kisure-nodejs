/**
 * 获取文件信息
 * 
 * 以下为通过异步模式获取文件信息的语法格式：
 * 语法：fs.stat(path, callback)
 * 参数：
 * (1)path      - 文件路径。
 * (2)callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
 * 
 * fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
 * 可以通过stats类中的提供方法判断文件的相关属性。
 * 
 * 注意事项：
 * 不建议在调用 fs.open()、 fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查文件是否存在。 
 * 而是应该直接打开、读取或写入文件，如果文件不可用则处理引发的错误。
 */

// 判断是否为文件
const fs = require('fs');

fs.stat(`${__dirname}/stat.json`, (err, stats) => {
    console.log(stats.isFile());    // 如果是文件返回 true，否则返回 false。
    console.log(stats.size);        // 返回文件的大小
    console.log(states);
});