/**
 * 同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 *
 */

const fs = require('fs');

// 流文件读入
// 创建一个可读流
// fs.createReadStream(path, [,options]);
var rs = fs.createReadStream('a.jpg');

// 可以监听流的open和close事件来监听流的打开和关闭
rs.once('open', function () {
    console.log('open');
});

rs.once('close', function () {
    console.log('close');
});

rs.on('data', function (data) {
    console.log(data)
});