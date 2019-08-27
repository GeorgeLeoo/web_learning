function LogUtils() {
}
LogUtils = {
    flg: true,
    log: function () {
        var args = Array.prototype.slice.call(arguments);
        console.time();
        console.log(args)
        console.timeEnd();
        console.log(this.flg)
    }
}

LogUtils.log(222, 333)