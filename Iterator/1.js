/**
 * 概念：
 *      interator 是一种接口机制，为各种不同的数据结构提供同意的访问机制
 * 作用：
 *      1. 为各种数据结构，提供一个统一的、简便的访问接口
 *      2. 是的数据结构的成员能够按照某种次序排列
 *      3. ES6 创造了一种新的遍历命令 for-of 循环，Iterator 接口主要供 for...of 消费
 * 工作原理：
 *      - 创建一个指针对象（遍历器对象），指向数据结构的起始位置
 *      - 第一次调用 next 方法，指针自动指向数据结构的第一个成员
 *      - 接下来不断调用 next 方法，指针会一直往后移动，直到指向最后一个成员
 *      - 每调用 next 方法返回的是一个包含 value 和 done 的 对象，{value: 当前成员的值, done: 布尔值}
 *          * value 表示当前成员的值
 *          * done 表示当前的数据结构是否遍历结束
 *  原生具备 iterator 接口的数据可用 for...of 遍历
 *  扩展原理：
 *      1. 当数据结构上部署了 Symbol.iterator 接口，数据就是可以用 for...of 遍历
 *      2. 当使用 for...of 去遍历目标数据的时候，该数据会自动去找 Symbol.iterator属性
 *
 */

// 模拟指针对象
function myIterator(arr) {
    let nextIndex = 0;
    return {
        next() {
            return {
                value: arr[nextIndex++],
                done: nextIndex > arr.length
            }
        }
    }
}

// 准备数据
let arr = [1, 4, 65, 'aaa'];
let iteratorObj = myIterator(arr);
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());

// 将iterator 接口部署带指定的数据类型上，可以使用 for...of 去循环遍历
// 数组、字符串、arguments，set，map
function boo() {
    let obj = {a: 1, v: 3};
    for (let val in obj) {
        console.log(val);
    }
}

boo(2, 3, 4, "s");

let targetData = {
    [Symbol.iterator]: function () {
        let nextIndex = 0;
        return {
            next() {
                return {
                    value: this[nextIndex++],
                    done: nextIndex > arr.length
                }
            }
        }
    }
};



