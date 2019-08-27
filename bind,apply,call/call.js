var mathLib = {
    pi: 3.14,
    area: function (r) {
        console.log('this ', this);
        return this.pi * r * r;
    },
    circumference: function (r) {
        return 2 * this.pi * r;
    }
};

console.log(mathLib.area(2));
console.log(mathLib.area.call({pi: 3.1415}, 2));
console.log(mathLib.area.apply({pi: 3.1415, a: 2}, [2]));
var area = mathLib.area.bind({pi:3.1415,c:2});
console.log(area(2));
