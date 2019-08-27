var express = require('express');


/**
 * cookieParser中间件，cookieParser(secret, options)
 * secret：加密cookie字符串
 * options：cookie可选参数
 *
 * @type {cookieParser}
 */
var cookieParser = require('cookie-parser');


var app = express();

app.listen(3000,()=>{
    console.log('port 3000 is listening...')
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

app.use(cookieParser());

app.get('/', (req, res) => {
    /**
     * 判断请求中的cookie是否有isVisit
     * 否则，设置cookie字段isVisit，并设置过期时间为1分钟
     */
    console.log(req.cookies);
    if (req.cookies.isVisit) {
        res.send('再次欢迎');
    } else {
        res.cookie('isVisit', 1, {maxAge: 60 * 1000});
        res.send('欢迎第一次访问');
    }
});
