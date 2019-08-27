(function () {
    function foo(num1, num2) {
        return num1 + num2;
    }
    console.log(foo(1,2));
})();
(function () {
    var res = [1, 2, 3, 4, 5].map((item) => {
        return item + 10;
    });
    console.log(res);
})();

(function () {
    function foo(num1, num2) {
        return num1 - num2;
    }
    console.log(foo(11,2));
})();