const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;

    readFile(url).then((data) => {
        res.write(data);
        res.end();
    });
});

const readFile = (url) => {
    let path = `${__dirname}/page/`;

    if (typeof url === 'number') {
        path += '404.html'; 
    } else {
        path += url === '/' ? `page-one.html` : `${url}`;
    }

    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                return readFile(404);
            }
    
            resolve(data);
        });
    });
};

server.listen(8888);