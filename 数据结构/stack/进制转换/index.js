let Stack = require('./../stack-class.js');

function divideBy(num, system) {
    let stack = new Stack();
    let res = "";
    while (num) {
        stack.push(num % system);
        num = Math.floor(num / system);
    }
    stack.print();
    while (!stack.isEmpty()) {
        res += stack.pop();
    }
    return res;
}
//10=>2
let num = 10;
let system = 2;

let res = divideBy(num, system)
console.log(res)