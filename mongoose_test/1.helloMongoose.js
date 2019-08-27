/**
 *  1. 下载安装mongoose
 *      npm i --save mongoose
 *  2. 引入mongoose
 *      const mongoose = require('mongoose);
 *  3. 连接mongoDB
 *      mongoose.connect('mongodb://db_ip:db_port/db_name', {useNewUrlParser: true});
 *  4. 断开数据库连接(一般不需要调用)
 *      mongoose.disconnect();
 *  5. 监听mongoDB连接状态
 *      - 在mongoose对象中，有一个属性connection，该对象表示的就是数据库连接
 *        通过监视该对象的状态，可以监听数据库的连接与断开
 *
 *      - 数据库连接成功事件
 *          mongoose.connection.once('open', function() {});
 *      - 数据库连接断开事件
 *          mongoose.connection.once('close', function() {});
 *  Schema
 *  Model
 *  Document
 */

// 引入
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
// 数据库连接成功事件
mongoose.connection.once('open', function() {
    console.log('db connecting...');
});

// 数据库连接断开事件
// mongoose.connection.once('close', function() {
//     console.log('db disconnected...');
// });

// 断开数据库连接
// mongoose.disconnect();