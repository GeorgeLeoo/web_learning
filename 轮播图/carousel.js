(function (global, factory) {
    factory(global);
}(this, function (window) {

    let carousel = {},
        width,
        height,
        totalWidth,
        intervalTime,
        el;

    /**
     * 构造函数
     * @param options   类型对象
     * options={
     *     id,
     *     data:[
     *         src,
     *         title,
     *         alt,
     *         href
     *     ],
     *
     * }
     * @constructor
     */
    function Carousel(options) {
        if (!options.id) {
            console.error('没有指定绑定元素id');
        } else {
            // console.log(this);
            let res = this.init(options);
            intervalTime = options.intervalTime || 1000;
            res ? carousel.start(options.intervalTime) : ''
        }
    }

    carousel.createDom = function (data) {
        let dom = '';
        carousel.getWH(el, data.length);
        carousel.hiddenOverFlowWrapper(el);
        dom = `<div style="position: relative;top:0;left:0;width:${totalWidth}px;height: ${height}px">`;
        for (let item of data) {
            if (!item.alt) {
                item.alt = '';
            }
            if (!item.href) {
                item.href = '###';
            }
            dom += `<a style="display: inline-block;" href=${item.href}><img width=${width} height=${height} src=${item.url} alt=${item.alt}></a>`;
        }
        dom += '</div>';
        return dom;
    };

    carousel.getWH = function (el, i) {
        width = el.offsetWidth;
        height = el.offsetHeight;
        totalWidth = width * i;
    };

    carousel.hiddenOverFlowWrapper = function (el) {
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
    };

    carousel.start = function () {
        setInterval(function () {
            // console.log(1)
        }, intervalTime)
    };

    carousel.init = function (options) {
        el = document.getElementById(options.id);
        let dom = this.createDom(options.data);
        if (!dom) {
            console.error('dom create failed');
            return false;
        }
        el.innerHTML = dom;
        return true;
    };

    carousel.fn = {
        init: carousel.init,
        createDom: carousel.createDom
    };

    Carousel.prototype = carousel.fn;

    //把Carousel绑定到window上
    window.Carousel = Carousel;

    return Carousel;
}));