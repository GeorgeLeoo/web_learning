function normalizeMap(map) {
    return Array.isArray(map)
        ? map.map(function (key) {
            return ({key: key, val: key});
        })
        : Object.keys(map).map(function (key) {
            return ({key: key, val: map[key]});
        })
}

let state = {
    user: {
        name: 'Jerry',
        age: 22
    }
};

function mapState(states) {
    var res = {}
    normalizeMap(states).forEach(function (ref) {
        var key = ref.key;
        var val = ref.val;

        res[key] = function mappedState() {
            return typeof val === 'function'
                ? val.call(this, state, getters)
                : state[val]
        }
    });
    return res
}

function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
    return val && typeof val.then === 'function'
}

function assert (condition, msg) {
    if (!condition) { throw new Error(("[vuex] " + msg)) }
}


// console.log(mapState(['user']));
let obj = [2,3]
console.log(...obj);
