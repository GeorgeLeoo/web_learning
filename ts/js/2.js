"use strict";
var Per = /** @class */ (function () {
    function Per(name) {
        this.name = name;
    }
    Per.prototype.getName = function () {
        return this.name;
    };
    Per.prototype.setName = function (name) {
        this.name = name;
    };
    return Per;
}());
var p1 = new Per('zz');
console.log(p1.getName());
p1.setName('ss');
console.log(p1);
