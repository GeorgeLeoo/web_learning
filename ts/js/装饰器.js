"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(params) {
    console.log(params);
    return function (target) {
        console.log(target);
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.url = 'constructor url';
    }
    HttpClient.prototype.getData = function () {
        console.log(this.url);
    };
    HttpClient = __decorate([
        logClass('ss')
    ], HttpClient);
    return HttpClient;
}());
var a = new HttpClient();
console.log(a);
