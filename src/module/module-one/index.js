/**
 * require包含两层意思
 * (1)  require('http')             如果不带'./',那么node就会认为这个是一个系统模块
 * (2)  require('./module-one.js')  引入自己的模块，需要在require中带入自己的'./'
 *      当然，因为nodejs引入的都是js文件，所以我们可以省去后缀名：require('./module-one')
 * 
 * 需要注意的是：
 * 如果我们写成require('module-one')，那么node会往两个地方查找，一个是系统模块，还有一个是node_modules中查找
 * 所以如果我们想写成require('module-one')，那么可以将module-one.js文件放到node_modules中。
 * 如果我们module的名字和系统模块的名字是一样的，那么就会默认找系统模块的
 * 
 * 
 * 还有一点比较重要：
 *  nodejs是不存在全局的变量
 *  
 *  为什么不存在全局变量？
 *  因为所有的js，在node环境中运行的时候，node会偷偷的会将代码用(代码)()给包裹住
 * 
 * 
 * module的出现是为了解决无数次的exports(多次的exports会显得非常麻烦),简单的说就是为了批量输出东西的
 * console.log(module.exports === exports)      true
 * 说明：module.exports 和 exports 是同一个东西
 */

 const val = require('./module-one.js');

 console.log(val);

 /**
  * npm:    nodejs package manager  也就是说是nodejs包管理器
  * 作用：
  * (1)统一下载途径，如果没有npm，我们可能无从下手，不知道去哪里下载对应的模块，而npm就是为了解决这个问题的
  * (2)自动下载依赖，如果你下载的某些库，它也会存在其他的依赖(基于其他的库运行的)，那么npm会自动的帮你下载 
  * (3)它也可以提交你写的模块
  */

/**
 * npm 
 * 如果我们想将自己的模块上传，那么需要npm账号，账号注册：npmjs.org
 * 
 * npm view 模块名  显示当前模块版本
 * npm info 模块名  显示模块的所有版本
 * npm.login    进行登录
 * npm publish  进行发布代码
 * npm --force publish  将发布到npm上的代码删除
 */