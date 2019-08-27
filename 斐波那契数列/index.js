// 1、1、2、3、5、8、13、21、34、
// F[n]=F[n-1]+F[n-2](n>=3,F[1]=1,F[2]=1)

function* fib(n) {
    yield 1;
    yield 1;
    yield
}

function _fib(n){
    let sum = 0;
    for (let i in n){
        sum += fib(sum);
    }
    return sum;
}

console.log(_fib(3));