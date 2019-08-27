// 引入
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 连接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
// 数据库连接成功事件
mongoose.connection.once('open', function () {
    console.log('db connecting...');
});

// 创建Schema（模式/约束）对象
const stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: 'female'
    },
    address: String,
});

// 通过Schema来查 u 你更加爱你Model
// Model代表的是数据库的集合，通过Model才能对数据进行操作
// mongoose.model(modelName, schema)
// modelName就是要映射的集合名，mongoose会自动将集合名变成复数
const StuModel = mongoose.model('student', stuSchema);

// 向数据库中插入文档
// StuModel.create(doc, cb);
StuModel.create({
    name: '孙悟空',
    age: '18',
    address: '花果山',
    gender: 'male'
}, function (err) {
    if (!err) {
        console.log('插入成功');
    }
});
