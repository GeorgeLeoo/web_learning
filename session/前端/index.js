axios({
    url: 'http://localhost:3000/users/index',
    method: 'get'
}).then((res)=>{
    console.log(res.data)
    if(res.data.code === 0 ){
        // window.location.href = './index.html';
        document.write('欢迎,'+res.data)
    }
})
