var express = require('express');
var session = require('express-session');
var redisStore = require('connect-redis')(session);

var app = express();

app.listen(5000, () => {
    console.log('port 5000 is listening...');
});

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use(session({
    secret: 'dasdjnasjdhjksahdioqwpojklcdhgid97216yeiuhdasb',
    store:new redisStore()
}));

router.get('/index', function (req, res, next) {
    console.log(req.session);
    if (req.session.isVisit >1) {
        res.send("你好，欢迎" );
    } else {
        res.send("你还没有登录");
    }
});

app.get('/',function (req, res) {
    // console.log(req.session.getStore())
    if (req.session.isVisit){
        req.session.isVisit++;
        res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>')
    }else {
        req.session.isVisit = 1;
        res.send('欢迎第一次来这里')
    }
});
