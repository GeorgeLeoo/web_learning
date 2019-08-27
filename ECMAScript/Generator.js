/**
 *  Generator 函数
 *  概念：
 *      1. ES6 提供的解决异步编程的方案之一
 *      2. Generator 函数是一个状态机，内部封装了不同状态的数据
 *      3. 用来生成遍历器对象
 *      4. 可以暂停函数（惰性求值），yield 可暂停，next 方法可以启动，每次返回的是 yield 后的结果
 *  特点：
 *      1. function 与函数名之间有一个星号
 *      2. 内部用 yield 表达式来定义不同的状态
 *      3. generator 函数返回的是指针对象，而不是执行函数内部逻辑
 *      4. 调用 next 方法函数内部逻辑开始执行，遇到 yield 表达式停止，返回{value:值，done:false/true}
 *      5. 再次调用 next 方法会从上一次停止时的 yield 处开始，直到最后
 *      6. yield 语句返回结果通常为 undefined，当调用 next 方法是传参内容会作为启动时 yield 语句的返回值
 *
 */

function* myGenerator() {
    function http(){
        return 22;
    }
    let res =yield http();
    console.log(res);
    return res;
}
let mg = myGenerator();
// console.log(mg.next());
// console.log();
// console.log(mg.next());
mg.next(mg.next().value).value;
