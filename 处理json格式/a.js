var data = [{
    "_id": "5cce761afe5dc22df3a11329",
    "date": "2019-05-03",
    "getWeek": "周五",
    "iconSelected": 2,
    "notes": "dnajn",
    "money": 213,
    "tel": "18921483103",
    "type": 0,
    "__v": 0
}, {
    "_id": "5cce76cafe5dc22df3a1132b",
    "date": "2019-05-07",
    "getWeek": "周二",
    "iconSelected": 2,
    "notes": "deq",
    "money": 312,
    "tel": "18921483103",
    "type": 1,
    "__v": 0
}, {
    "_id": "5cce7899bba10e2e36762799",
    "date": "2019-05-05",
    "getWeek": "周日",
    "iconSelected": 8,
    "notes": "asdhgh",
    "money": 47,
    "tel": "18921483103",
    "type": 0,
    "__v": 0
}, {
    "_id": "5cce7915bba10e2e3676279a",
    "date": "2019-05-05",
    "getWeek": "周日",
    "iconSelected": 2,
    "notes": "dsa",
    "money": 3,
    "tel": "18921483103",
    "type": 1,
    "__v": 0
}];

var arr = [];

for (var i = 0; i < data.length; i++) {
    var obj = {};
    obj.items = [];
    obj.getMoney = 0;
    obj.useMoney = 0;
    var flg = false;
    if (arr.length === 0) {
        obj.date = data[i].date;
        obj.week = data[i].getWeek;
        if (data[i].type === 0) {
            obj.useMoney = data[i].money;
        }
        if (data[i].type === 1) {
            obj.getMoney = data[i].money;
        }
        obj.items.push(data[i]);
        arr.push(obj);
    } else {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j].date === data[i].date) {
                if (data[i].type === 0) {
                    arr[j].useMoney += data[i].money;
                }
                if (data[i].type === 1) {
                    arr[j].getMoney += data[i].money;
                }
                arr[j].items.push(data[i]);
                flg = true;
                break;
            }
        }
        if (!flg) {
            obj.date = data[i].date;
            obj.week = data[i].getWeek;
            if (data[i].type === 0) {
                obj.useMoney = data[i].money;
            }
            if (data[i].type === 1) {
                obj.getMoney = data[i].money;
            }
            obj.items.push(data[i]);
            arr.push(obj);
        }
    }
}

console.log(arr);
