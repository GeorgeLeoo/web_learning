/**
 * 同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 *
 */

const fs = require('fs');

// 流文件写入
// 创建一个可写流
// fs.createWriteStream(path, [,options]);
var ws = fs.createWriteStream('h4.txt');

// 可以监听流的open和close事件来监听流的打开和关闭
ws.once('open', function () {
    console.log('open');
});

ws.once('close', function () {
    console.log('close');
});

ws.write('dsda11\n');
ws.write('dsda12\n');
ws.write('dsda13\n');
ws.write('dsda14\n');

// 关闭流
ws.end();
