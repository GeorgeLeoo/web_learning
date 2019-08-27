function set(){
    console.log(1111)
}
window.addEventListener('resize',set);
window.addEventListener('pageshow',function (e) {
    if (e.persisted) {
        // set()
        console.log(222)
    }else {
        console.log(333)
    }
})
