/**
 *  文件系统（File System）
 *      - 文件系统简单来说就是通过Node来操作系统中的文件
 *      - 使用文件系统需要先引入fs，fs是核心模块，直接引入
 *
 *  文件的写入
 *      1. 打开文件
 *          异步：fs.open(path[, flags[, mode]], callback)
 *          同步：fs.openSync(path[, flags[, mode]])
 *      2. 写入文件
 *          异步：fs.write(fd, string[, position[, encoding]], callback)
 *          同步：fs.writeSync(fd, string[, position[, encoding]])
 *      3. 保存关闭文件
 *          异步：fs.close(fd, callback)
 *          同步：fs.closeSync(fd)
 */

const fs = require('fs');

// 同步
// const path = 'hello.txt';
// const fd = fs.openSync(path, 'w');
// fs.writeSync(fd, 'apple 2');
// fs.closeSync(fd);

// 异步
const path = 'hello2.txt';
fs.open(path, 'w', function (err, fd) {
    if (!err) {
        fs.write(fd,' appleeee', function (err) {
            fs.close(fd, function (err) {
                console.log(arguments)
            });
        })
    } else {
        console.log(err)
    }
});
// fs.write(fd, 'apple 2');
// fs.close(fd);

