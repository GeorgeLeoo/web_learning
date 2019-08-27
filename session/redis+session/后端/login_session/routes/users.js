var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('users/');
});

router.get('/index', function (req, res, next) {
    console.log('get index',req.session)
    if (req.session.login === 1) {
        // res.send("你好，欢迎" + req.session.users.user);
        res.send('hello');
    } else {
        res.send("你还没有登录");
    }
});

router.post('/login', function (req, res, next) {

    var options = req.body;
    if (options.user === 'admin' && options.pwd === '123') {
        req.session.login = 1;
        req.session.users = options;
        console.log('post login',req.session)
        res.send({code: 0, msg: '', data: options});
    } else {
        res.send({code: 1, msg: '账号密码不一致', data: {}});
    }
});

module.exports = router;
