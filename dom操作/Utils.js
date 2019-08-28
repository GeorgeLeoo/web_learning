"use strict";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getHtml = function (el) {
        
        if (typeof el === 'string') {
            return document.querySelector(el).innerHTML;
        } else {
            return el.innerHTML;
        }
    };
    Utils.setHtml = function (el, content) {
        document.querySelector(el).innerHTML = content;
    };
    Utils.getText = function (el) {
        return document.querySelector(el).innerText;
    };
    Utils.setText = function (el, text) {
        document.querySelector(el).innerText = text;
    };
    Utils.getClassName = function (el) {
        return document.querySelector(el).classList;
    };
    return Utils;
}());
