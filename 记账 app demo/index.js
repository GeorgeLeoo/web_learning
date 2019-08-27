const data = require('./data.json');

const c_out = [
        {
            text: '餐饮',
            icon: './../../images/main/zc_1.svg'
        },
        {
            text: '交通',
            icon: './../../images/main/zc_2.svg'
        },
        {
            text: '住房',
            icon: './../../images/main/zc_3.svg'
        },
        {
            text: '美容',
            icon: './../../images/main/zc_4.svg'
        },
        {
            text: '服饰',
            icon: './../../images/main/zc_5.svg'
        },
        {
            text: '运动',
            icon: './../../images/main/zc_6.svg'
        },
        {
            text: '旅游',
            icon: './../../images/main/zc_7.svg'
        },
        {
            text: '娱乐',
            icon: './../../images/main/zc_8.svg'
        },
        {
            text: '生活',
            icon: './../../images/main/zc_9.svg'
        },
        {
            text: '医疗',
            icon: './../../images/main/zc_10.svg'
        },
        {
            text: '通讯',
            icon: './../../images/main/zc_11.svg'
        },
        {
            text: '学习',
            icon: './../../images/main/zc_12.svg'
        },
        {
            text: '礼物',
            icon: './../../images/main/zc_13.svg'
        },
        {
            text: '母婴',
            icon: './../../images/main/zc_14.svg'
        },
        {
            text: '数码',
            icon: './../../images/main/zc_15.svg'
        },
        {
            text: '零食',
            icon: './../../images/main/zc_16.svg'
        },
        {
            text: '购物',
            icon: './../../images/main/zc_17.svg'
        },
        {
            text: '其它',
            icon: './../../images/main/zc_18.svg'
        }
    ],
    c_in = [
        {
            text: '工资',
            icon: './../../images/main/sr_1.svg'
        },
        {
            text: '兼职',
            icon: './../../images/main/sr_2.svg'
        },
        {
            text: '礼金',
            icon: './../../images/main/sr_3.svg'
        },
        {
            text: '奖金',
            icon: './../../images/main/sr_4.svg'
        },
        {
            text: '其它',
            icon: './../../images/main/sr_5.svg'
        }
    ];

function desc(a, b) {
    return b - a;
}

/**
 * 最终格式
 * [
 *  {
 *   "date": "",
 *   "expense": 0,
 *   "income": 0,
 *   "list": [...]
 *  },
 *  {
 *   "date": "",
 *   "expense": 0,
 *   "income": 0,
 *   "list": [...]
 *  }
 * ]
 * @param data
 * @returns {[]}
 */
function formatData(data) {
    // 最终的格式化后数据
    let finalData = [];
    // 根据账单的时间分类, 不是创建时间

    // 保存不重复的日期
    let uniqueDate = new Set();
    data.map(item => uniqueDate.add(new Date(item.date).getTime()));

    // 对uniqueDate降序排序, 并保存到 uniqueDates 中
    let uniqueDates = Array.from(uniqueDate).sort(desc);

    // 初始化 finalData
    uniqueDates.map(item => finalData.push({date: item, expense: 0, income: 0, list: []}));

    data.map((item) => {
        // 查询当前日期在uniqueDates的下标
        const index = uniqueDates.indexOf(new Date(item.date).getTime());
        item.type === 0 ? finalData[index].expense += item.money : finalData[index].income += item.money;
        // 根据index将数据添加对应date的list中
        finalData[index].list.push(item);
    });

    return finalData;
}

// console.time();
// console.log(formatData(data));
// console.timeEnd();

function formatData2(data) {
    let lines = [], // 保存折线图的横纵坐标,一共 31 个元素, 下标表示日,值表示消费或支出
        rankings = [],  // 排行列表
        uniqueSelection = new Set(), // 存储唯一的iconSelected
        uniqueSelections = [],   // 存储唯一的iconSelected
        total = 0;    // 总金额
    // 初始化每一天的值为 0
    for (let i = 0; i < 31; i++) {
        lines[i] = 0;
    }

    data.map((item) => uniqueSelection.add(item.iconSelected));
    uniqueSelections = Array.from(uniqueSelection);

    // 初始化 rankings
    uniqueSelections.map((item) => rankings.push({iconSelected: item, len: 0, name: '', money: 0}));

    data.map((item) => {
        let day = new Date(item.date).getDate(),   // 将每一天的消费或支出添加到对应下标的数组中
            iconSelected = item.iconSelected,
            type = item.type;

        total += item.money;    // 总金额计算
        lines[day - 1] += item.money;   // 将日期和每天的支出收入如匹配

        // 查找 iconSelected 在 uniqueSelections 的下标
        let index = uniqueSelections.indexOf(item.iconSelected);

        if (index > -1) {
            rankings[index].len += 1;
        } else {
            rankings[index].len = 1;
        }

        if (type === 0) {
            rankings[index].name = c_out[iconSelected].text;
        }
        if (type === 1) {
            rankings[index].name = c_in[iconSelected].text;
        }

        rankings[index].money += item.money;

    });


    return rankings

}

console.time();
console.log(formatData2(data));
console.timeEnd();