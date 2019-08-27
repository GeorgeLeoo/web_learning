"use strict";
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '  ' + ' food');
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A || (A = {}));
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '  ' + ' food');
        };
        return Dog;
    }());
    var d = new Dog('ss');
    d.eat();
})(B || (B = {}));
var Dog = A.Dog;
var d = new Dog('ss');
