let obj = {
    username: 'tom',
    age: 22
};
let {username: a, age: b} = obj;
let {username, age} = obj;
console.log(a, b);
console.log(username, age);

let name = {
    firstName: 'tom',
    lastName: 'jerry',

};

Object.defineProperty(name, 'fullName', {
    set fullName(val) {
        let vals = val.split(' ');
        this.firstName = vals[0];
        this.lastName = vals[1];
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
})

console.log(name.fullName = 'sd ee');
console.log(name);

let arr = [1, 3, 4, 5, 'das', true];
let [, , v1, v2, ...v3] = arr;
console.log(v1, v2, v3);
let arr1= [,,22,3];
console.log(arr1[0]);
