function equal1(source, target) {
    return JSON.stringify(source) === JSON.stringify(target);
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3,3];
// console.log(equal1(arr1, arr2));

function equal(obj1, obj2) {
    let flg = false;
    let keys = Object.keys(obj1);
    console.log(keys);
    for (let key of keys) {
        if (obj2.hasOwnProperty(key)) {
            if (isObject(obj1[key])) {
                equal(obj1[key], obj2[key]) ? flg = true : flg = false;
            } else if (isArray(obj1[key])) {
                equal(obj1[key], obj2[key]) ? flg = true : flg = false;
            } else {
                obj1[key] === obj2[key] ? flg = true : flg = false;
            }
        }
    }
    return flg;
}

let obj1 = {
    a: 1,
    arr: [1, 2, 3, 4],
    userInfo: {
        nickname: 'dasd',
        age: 22,
        gender: 1,
        city: 'nantong',
        hobby: ["aaa", "bbb", "ccc"],
        avatar: [
            {
                url: 'ddd.img',
                date: '2018-2-3'
            },
            {
                url: 'rrr.img',
                date: '2018-5-31'
            },
        ]
    }
};

let obj2 = {
    a: 1,
    arr: [1, 2, 3, 4],
    userInfo: {
        nickname: 'dasd',
        age: 22,
        gender: 0,
        city: 'nantong',
        hobby: ["aaa", "bbb", "ccc"],
        avatar: [
            {
                url: 'ddd.img',
                date: '2018-2-3'
            },
            {
                url: 'rrr.img',
                date: '2018-5-31'
            },
        ]
    }
};
obj1 = {
    a: [2, 3, 4]
}
obj2 = {
    a: [2, 3, 5]
}

obj1 = {
    a: {b: 3},
    b: 3
}
obj2 = {
    a: {b: 3},
    b: 3
}

obj1 = [2, 2, 2];
obj2 = [1, 1, 1];

console.time();
console.log(equal1(obj1, obj2));
console.timeEnd();
