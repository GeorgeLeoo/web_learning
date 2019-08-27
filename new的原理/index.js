function _new() {
    //创建一个空对象
    let target = {};
    //第一个参数是构造函数，其它是其它参数
    let [constructor, ...args] = [...arguments];
    //执行[原型]连接，targte是constructor的实例
    target.__proto__ = constructor.prototype;
    //执行构造函数，将属性或方法添加到到创建的空对象
    let res = constructor.apply(target, args);
    //如果构造函数执行的结构返回的是一个对象，那么返回这个对象
    if (res && (typeof res) == 'object' || typeof res == 'function') {
        return res;
    }
    //如果构造函数返回的不是一个对象，返回创建的新对象
    return target;
}

// let instance = new _new();
// console.log(typeof instance);


let str;
str = "das";
str+="1";
