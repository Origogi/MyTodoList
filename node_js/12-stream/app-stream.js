const fs = require('fs');

const data = [];

const readStream = fs.createReadStream('./file.txt', {
    highWaterMark: 8, // 64kib
    encoding: 'utf-8',
}).on('data', (chunk) => {
    data.push(chunk);
}).on('end', () => {
    console.log(data.join(''));
}).on('error', (error) => {
    console.log(error);
});