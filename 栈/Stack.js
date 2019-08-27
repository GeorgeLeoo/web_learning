(function (global, factory) {
    factory(global);
}(window, function (window) {

    var stack = {};
    var emptyArray = [];

    stack = {
        push: emptyArray.push,
        pop: emptyArray.pop,
        isEmpty: function () {
            return this.length === 0;
        },
        peek: function () {
            return this[emptyArray.length - 1];
        }
    };

    function Stack() {
        emptyArray.__proto__ = stack;
        return emptyArray;
    }

    Stack.prototype = stack;

    Stack = Object.freeze(Stack);

    window.Stack = Stack;
}));