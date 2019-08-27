let Queue = (function () {
    const items = new WeakMap();
    return class Queue {
        constructor() {
            items.get(this).set(this, []);
        }
        push(el) {
            items.get(this).push(el);
        }
        pop() {
            items.get(this).pop();
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