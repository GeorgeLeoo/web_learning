var express = require('express');
const jwt = require('jwt-simple');
const moment = require('moment');
const app = express();

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
    try {
        var users = req.body;
        console.log(req.body)
        if (users.user === 'admin' && users.pwd === '123') {
            console.log('ok')
            let expires = moment().add(1, 'days').valueOf();  //设置过期时间
            // console.log(expires)
            let token = jwt.encode({
                iss: 18732733213,
                exp: expires
            }, app.get('jwtTokenSecret'));

            //这里我把token存到数据库了,看实际情况而定
            // saveToken(rows[0].u_id,token)

            res.send({
                userId: 18732733213,
                token: token,
                state: true,
                info: "登录成功",
            })
        } else {
            res.send('fail');
        }
    }catch (e) {
        console.log('err=> ',e)
    }
});

module.exports = router;
