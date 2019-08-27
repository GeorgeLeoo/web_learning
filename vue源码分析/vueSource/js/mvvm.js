function MVVM(options) {
    // 将options配置对象保存到MVVM的实例
    this.$options = options || {};
    // 将配置对象的data保存到MVVM的实例和变量data中
    var data = this._data = this.$options.data;
    //将MVVM的实例保存到变量me中
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    // 遍历data中所有的属性
    Object.keys(data).forEach(function(key) { // key是data的某个属性名
        //对指定的属性实现代理
        me._proxyData(key);
    });

    this._initComputed();

    observe(data, this);

    //创建一个编译对象
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    /**
     * 指定属性实现数据代理
     * @param {*} key 
     * @param {*} setter 
     * @param {*} getter 
     */
    _proxyData: function(key, setter, getter) {
        // 将MVVM的实例保存到遍历me中
        var me = this;
        setter = setter || 
        // 给MVVM的实例添加指定属性名的属性，使用属性描述符
        Object.defineProperty(me, key, {
            // 不能重复定义，防止修改
            configurable: false, 
            // 可以枚举遍历
            enumerable: true, 
            // 当通过vm.xxx读取属性值是调用，从data中获取对应的属性值返回   代理读
            get: function proxyGetter() {
                return me._data[key];
            },
            // 当通vm.xxx=value时，value被保存到data中对应的属性上  代理写操作
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};