function LogUtils() {
    function log() {
        // var args = Array.from(arguments);
        var args = Array.prototype.slice.call(arguments);
        console.log(args);
        // var args = arguments;
        // args.__proto__ = Array.prototype;
        // console.log(args)
        args.unshift('(app)');
        console.log.apply(console, args)
    }
}
