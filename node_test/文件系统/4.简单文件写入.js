/**
 *  简单文件写入
 *      writeFile(file, data[, options], callback)
 *      writeFileSync(file, data[, options])
 */

const fs = require('fs');

fs.writeFile('h3.txt', "😄", {flag: 'a'}, (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});