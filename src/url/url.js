const urlLib = require('url');

/**
 * url模块
 * url 模块用于处理与解析 URL
 * 
 * 如果给parse方法添加true这个参数，那么就会将返回的结果中的query属性的值解析成对象的形式
 * 
 * value的结构： 
   { 
    auth:null
    hash:null
    host:"www.bilibili.com"
    hostname:"www.bilibili.com"
    href:"https://www.bilibili.com/video/av22056141/?p=4"
    path:"/video/av22056141/?p=4"
    pathname:"/video/av22056141/"
    port:null
    protocol:"https:"
    query:Object {p: "4"}   // 形成这样的结构，需要在parse后面添加第二个参数值true
    search:"?p=4"
    slashes:true
    }
 */

const value = urlLib.parse('https://www.bilibili.com/video/av22056141/?p=4', true);

console.log(value);