/* eslint-disable no-unused-vars */
/**
 * 函数节流
 * 思想：
 * 某些代码不可以在没有间断的情况连续重复执行。
 * 第一次调用函数，创建一个定时器，在指定的时间间隔后运行代码；
 * 第二次调用该函数，它会清除之前一次的定时器并设置另一个。
 *  @param {*} method 函数
 *  @param {*} context this
 */
function throttle(method, context) {
  clearTimeout(method.tId);
  method.tId = setTimeout(function() {
    method.call(context);
  }, 150);
}
