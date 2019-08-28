"use strict";
var AttributeTypes = {
    CLASSNAME: 'className',
    CSS: 'css',
    DATASET: 'dataset'
};
var Utils = /** @class */ (function () {
    function Utils(el) {
        this.el = el;
    }
    /**
     * 获取innerHTML
     * @param el 选择器 或 元素
     * @returns {string} innerHTML的内容
     */
    Utils.getHtml = function (el) {
        if (typeof el === 'string' || el === null) {
            return document.querySelector(el).innerHTML;
        }
        return el.innerHTML;
    };
    /**
     * 设置innerHTML
     * @param el 选择器 或 元素
     * @param content 要设置的内容
     */
    Utils.setHtml = function (el, content) {
        if (typeof el === 'string' || el === null) {
            document.querySelector(el).innerHTML = content;
        }
        else {
            el.innerHTML = content;
        }
    };
    /**
     * 获取innerText
     * @param el 选择器 或 元素
     * @returns {string} innerText
     */
    Utils.getText = function (el) {
        if (typeof el === 'string' || el === null) {
            return document.querySelector(el).innerText;
        }
        return el.innerText;
    };
    /**
     * 设置innerText
     * @param el 选择器 或 元素
     * @param content 要设置的内容
     */
    Utils.setText = function (el, content) {
        if (typeof el === 'string' || el === null) {
            document.querySelector(el).innerText = content;
        }
        else {
            el.innerHTML = content;
        }
    };
    /**
     * 获取类名
     * @param el 选择器 或 元素
     * @returns {DOMTokenList} DOMTokenList
     */
    Utils.getClassName = function (el) {
        if (typeof el === 'string' || el === null) {
            return document.querySelector(el).classList;
        }
        return el.classList;
    };
    /**
     *
     * @param classNames 类名数组 或 类名字符串
     * @param el 元素
     */
    Utils._addClassName = function (classNames, el) {
        var _a;
        if (typeof classNames === 'string') {
            // 如果是字符串就直接添加
            el.classList.add(classNames);
        }
        else {
            // 如果是数组就用三点运算符
            (_a = el.classList).add.apply(_a, classNames);
        }
    };
    Utils._removeClassName = function (classNames, el) {
        var _a;
        if (typeof classNames === 'string') {
            el.classList.remove(classNames);
        }
        else {
            (_a = el.classList).remove.apply(_a, classNames);
        }
    };
    Utils._toggleClassName = function (className, el, isAdd) {
        if (isAdd !== undefined) {
            document.querySelector(el).classList.toggle(className, isAdd);
        }
        else {
            document.querySelector(el).classList.toggle(className);
        }
    };
    Utils.addClassName = function (el, classNames) {
        if (typeof el === 'string' || el === null) {
            Utils._addClassName(classNames, document.querySelector(el));
        }
        else if (Array.isArray(el)) {
            for (var _i = 0, el_1 = el; _i < el_1.length; _i++) {
                var val = el_1[_i];
                Utils._addClassName(classNames, val);
            }
        }
        else {
            Utils._addClassName(classNames, el);
        }
    };
    Utils.removeClassName = function (el, classNames) {
        if (typeof el === 'string' || el === null) {
            Utils._removeClassName(classNames, document.querySelector(el));
        }
        else if (Array.isArray(el)) {
            for (var _i = 0, el_2 = el; _i < el_2.length; _i++) {
                var val = el_2[_i];
                Utils._removeClassName(classNames, val);
            }
        }
        else {
            Utils._removeClassName(classNames, el);
        }
    };
    Utils.toggleClassName = function (el, className, isAdd) {
        if (typeof el === 'string' || el === null) {
            Utils._toggleClassName(className, document.querySelector(el), isAdd);
        }
        else if (Array.isArray(el)) {
            for (var _i = 0, el_3 = el; _i < el_3.length; _i++) {
                var val = el_3[_i];
                Utils._toggleClassName(className, val);
            }
        }
        else {
            Utils._toggleClassName(className, el, isAdd);
        }
    };
    /**
     * 创建元素
     * @param tag 标签名
     * @param data  属性对象
     * @param children  子元素
     * @returns {Element} 返回创建的元素
     */
    Utils.createElement = function (tag, data, children) {
        var el = document.createElement(tag);
        // 如果有 data 就添加 data 中的属性
        if (data !== null) {
            Utils.setAttribute(el, data);
        }
        if (children && children !== null) {
            if (typeof children === 'string') {
                // children 是字符串就创建文本节点,并添加到 el 的最后
                Utils.addLast(el, Utils.createTextNode(children));
            }
            else {
                Utils.addLast(el, children);
            }
        }
        return el;
    };
    Utils.setDataSet = function (el, dataSet) {
        var keys = Object.keys(dataSet);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            el.dataset[key] = dataSet[key];
        }
    };
    Utils.addCss = function (el, css) {
        var keys = Object.keys(css);
        if (Array.isArray(el)) {
            for (var _i = 0, el_4 = el; _i < el_4.length; _i++) {
                var val = el_4[_i];
                for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
                    var key = keys_2[_a];
                    val.style[key] = css[key];
                }
            }
        }
        else {
            for (var _b = 0, keys_3 = keys; _b < keys_3.length; _b++) {
                var key = keys_3[_b];
                el.style[key] = css[key];
            }
        }
    };
    Utils.getCss = function (el, key) {
        return el.style[key];
    };
    Utils.createTextNode = function (children) {
        return document.createTextNode(children);
    };
    Utils.addLast = function (el, addNode) {
        el.appendChild(addNode);
    };
    Utils.addBefore = function (el, addNode, originNode) {
        el.insertBefore(addNode, originNode);
    };
    Utils.addElement = function () { };
    Utils.setAttribute = function (el, data) {
        if (typeof el === 'string') {
            el = document.querySelector(el);
        }
        var keys = Object.keys(data);
        for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
            var key = keys_4[_i];
            var value = data[key];
            switch (key) {
                case AttributeTypes.CLASSNAME:
                    // 如果是 className 属性，就调用 addClassName 方法添加 class
                    Utils.addClassName(el, value);
                    break;
                case AttributeTypes.CSS:
                    // 如果是 css 属性，就调用 addCss 方法添加 css
                    Utils.addCss(el, value);
                    break;
                case AttributeTypes.DATASET:
                    Utils.setDataSet(el, value);
                    break;
                default:
                    el.setAttribute(key, value);
                    break;
            }
        }
    };
    Utils._formateCss = function (css) {
        var res = {};
        var cssArr = css.split(';');
        for (var _i = 0, cssArr_1 = cssArr; _i < cssArr_1.length; _i++) {
            var val = cssArr_1[_i];
            if (val) {
                var vals = val.split(':');
                res[vals[0].trim()] = vals[1].trim();
            }
        }
        return res;
    };
    Utils.getAttribute = function (el, key) {
        switch (key) {
            case AttributeTypes.CLASSNAME:
                key = 'class';
                break;
            case AttributeTypes.CSS:
                key = 'style';
                var css = el.getAttribute(key);
                return Utils._formateCss(css);
            case AttributeTypes.DATASET:
                key = AttributeTypes.DATASET;
                return el.dataset;
        }
        return el.getAttribute(key);
    };
    Utils.getParent = function (el) {
        if (typeof el === 'string' || el === null) {
            return document.querySelector(el).parentElement;
        }
        else {
            return el.parentElement;
        }
    };
    Utils.getSiblings = function (el) {
        var res = [];
        if (typeof el === 'string' || el === null) {
            el = document.querySelector(el);
        }
        var parent = Utils.getParent(el);
        var children = parent.children;
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var val = children_1[_i];
            if (val !== el) {
                res.push(val);
            }
        }
        return res;
    };
    return Utils;
}());
