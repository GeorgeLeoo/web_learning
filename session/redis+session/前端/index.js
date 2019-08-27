axios({
    url: 'http://localhost:3000/users/index',
    method: 'get'
}).then((res)=>{
    console.log(res.data)
    // if(res.data.code === 0 ){
        // window.location.href = './index.html';
    console.log(document.cookie)
        document.write(res.data)
    // }
})

console.log(document.cookie)
