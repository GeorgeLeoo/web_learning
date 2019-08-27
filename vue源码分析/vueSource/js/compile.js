function Compile(el, vm) {
    // 将vm保存到Compile对象
    this.$vm = vm;
    // 将el对应的元素对象保存到Compile对象
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);

    // 若有el元素
    if (this.$el) {
        // 1. 取出el元素中所有子节点并保存到fragment中
        this.$fragment = this.node2Fragment(this.$el);
        // 2. 编译fragment中所有层次的子节点
        this.init();
        // 3. 将编译好的fragment添加到页面的el元素中
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    constructor: Compile,
    node2Fragment: function (el) {
        // 创建空的fragment
        var fragment = document.createDocumentFragment(),
            child;

        // 将原生节点拷贝到fragment
        // 将el中所有子节点保存到fragment中
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        // 返回fragment
        return fragment;
    },

    init: function () {
        // 编译指定容器的所有层次的子节点
        this.compileElement(this.$fragment);
    },

    compileElement: function (el) {
        // 取出最外层的所有子节点
        var childNodes = el.childNodes,
            // 保存Compile对象
            me = this;

        // 遍历所有子节点，有文本节点和元素节点
        [].slice.call(childNodes).forEach(function (node) {
            // 得到节点的文本内容
            var text = node.textContent;

            // 创建正则对象，匹配双打括号表达式
            // {{name}} 要匹配双大括号，直接写/\{\{.*\}\}就可以了
            // 但是这里写了()小括号，原因是要取出双大括号里的内容，同时会把取出的内容保存到RegExp的$1中
            var reg = /\{\{(.*)\}\}/;

            // 判断节点是否是一个元素节点
            if (me.isElementNode(node)) {
                //编译指令
                me.compile(node);

                // 判断节点是否是打括号格式的文本节点
            } else if (me.isTextNode(node) && reg.test(text)) {
                // 编译文本打括号表达式文本节点
                me.compileText(node, RegExp.$1.trim());
            }

            // 如果当前节点还有子节点，那递归实现所有层次节点的编译
            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compile: function (node) {
        // 得到标签的所有属性
        var nodeAttrs = node.attributes,
            me = this;

        // 遍历所有属性
        [].slice.call(nodeAttrs).forEach(function (attr) {
            // 得到属性名,如 v-on:click
            var attrName = attr.name;
            // 判断是否是指令属性
            if (me.isDirective(attrName)) {
                // 得到属性值，如show
                var exp = attr.value;
                // 从属性名中得到指令名，如on-click
                var dir = attrName.substring(2);
                // 判断是否是事件指令
                if (me.isEventDirective(dir)) {
                    // 解析事件指令
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                } else {
                    // 编译普通指令
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }

                // 移除指令属性
                node.removeAttribute(attrName);
            }
        });
    },

    compileText: function (node, exp) {
        compileUtil.text(node, this.$vm, exp);
    },

    isDirective: function (attr) {
        return attr.indexOf('v-') == 0;
    },

    isEventDirective: function (dir) {
        return dir.indexOf('on') === 0;
    },

    isElementNode: function (node) {
        return node.nodeType == 1;
    },

    isTextNode: function (node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合
var compileUtil = {
    // 解析v-text和{{}}
    text: function (node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    },

    // 解析v-html
    html: function (node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },

    // 解析v-model
    model: function (node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function (e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },

    // 解析v-class
    class: function (node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },

    /**
     * 
     * @param {*} node 
     * @param {*} vm 
     * @param {*} exp 
     * @param {*} dir 指令名
     */
    bind: function (node, vm, exp, dir) {
        // 得到dir更新的函数
        var updaterFn = updater[dir + 'Updater'];

        // 调用函数更新节点
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        // 
        new Watcher(vm, exp, function (value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    eventHandler: function (node, vm, exp, dir) {
        // 得到事件类型/名，如click
        var eventType = dir.split(':')[1],
            // 从methods中得到表达式所对应的函数
            fn = vm.$options.methods && vm.$options.methods[exp];

        // 如果都存在
        if (eventType && fn) {
            // 给结点绑定指定事件名和回调函数（强制绑定this为vm）的DOM事件监听
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },

    // 从vm中得到表达式所对应的值，表达式有可能多层如：name.firstName
    _getVMVal: function (vm, exp) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function (k) {
            val = val[k];
        });
        return val;
    },

    _setVMVal: function (vm, exp, value) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function (k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};

/**
 * 包含多个更新节点的方法的工具对象
 */
var updater = {
    // 更新节点的textContent属性值
    textUpdater: function (node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    },
    // 更新节点的innerHTML属性值
    htmlUpdater: function (node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },
    // 更新节点的className属性值
    classUpdater: function (node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    },
    // 更新节点的tvalue属性值
    modelUpdater: function (node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
};