const program = require("commander");
const Progress = require("progress");

const { request, requestImage, createDir } = require('./utils/index');

const root = process.cwd();
const targetURLs = [];

let overtimes = []
let errors = []

const getPersonInfo = url => {
    overtimes = [];
    errors = [];
    
    return new Promise((resolve, reject) => {
        console.log("\033[91m 正在分析页面。。。");

        request(url).then(html => {
            const areaHTML = html.match(/<(ul)\sid="pins(.|\n)+<\/ul>/)[0];
            titles = areaHTML.match(/>([\u4e00-\u9fff]|\w)+[^<']+<\/a/g);
            urls = [...new Set(areaHTML.match(/http[^\sb]+\d+/g))];

            titles = titles.map(title => {
                return title.replace("</a", "").replace(">", "");
            });

            console.log(` 分析完成~~ 共有${urls.length}种类型的妹纸等待捕获~~`);

            resolve();
        });
    });
}