/**
 * 关于Node.js 中 __dirname 和 ./ 的区别
 * 
 *  如果是在当前目录下用node运行js文件
 *      得到的结果是：
 *          . = C:\personal-github\kisure-nodejs\src\path\dirname-vs-'.'
            __dirname = C:\personal-github\kisure-nodejs\src\path\dirname-vs-'.'

    如果是在path文件夹路径下用node运行js文件
        得到的结果是：
            . = C:\personal-github\kisure-nodejs\src\path
            __dirname = C:\personal-github\kisure-nodejs\src\path\dirname-vs-'.'

    结论：
        (1)__dirname 总是指向被执行 js 文件的绝对路径
        (2)./ 会返回你执行 node 命令的路径
 */
const path = require("path");

function differ() {
    console.log(". = %s", path.resolve("."));
    console.log("__dirname = %s", path.resolve(__dirname));
}

differ();