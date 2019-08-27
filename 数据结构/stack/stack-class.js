let Stack = (function () {
    let items = new WeakMap();
    return class Stack {
        constructor() {
            items.set(this, []);
        }
        push(el) {
            items.get(this).push(el);
        }
        pop() {
            return items.get(this).pop();
        }
        peek() {
            return items.get(this)[items.get(this).length - 1];
        }
        isEmpty() {
            return items.get(this).length === 0;
        }
        getSize() {
            return items.get(this).length;
        }
        clear() {
            items.get(this) = [];
        }
        print() {
            console.log(items.get(this));
        }
    }
})();

module.exports = Stack
module.exports.Stack = Stack;