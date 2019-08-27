var express = require('express');
var session = require('express-session');

var app = express();

app.listen(5000, () => {
    console.log('port 5000 is listening...');
});


app.use(session({
    secret: 'dasdjnasjdhjksahdioqwpojklcdhgid97216yeiuhdasb',
    cookie: {maxAge: 60 * 1000}
}));

app.get('/',function (req, res) {
    if (req.session.isVisit){
        req.session.isVisit++;
        res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>')
    }else {
        req.session.isVisit = 1;
        res.send('欢迎第一次来这里')
    }
})
