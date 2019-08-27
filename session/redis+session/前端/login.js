login();

function login() {
    var loginbtn = document.getElementById('loginbtn');

    loginbtn.onclick = function () {
        var user = document.getElementById('tel').value;
        var pwd = document.getElementById('pwd').value;
        // console.log(user,pwd)
        axios({
            url: 'http://localhost:3000/users/login',
            method: 'post',
            data: {
                user,
                pwd
            }
        }).then((res)=>{
            console.log(res.data)

            if(res.data.code === 0 ){
                window.location.href = './index.html';
            }
        })

    }

}
