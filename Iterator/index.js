// const arr = [1, 2, 3, 5];
// // console.log(arr);
// for (let i of arr){
//     console.log(i);
// }
const obj = {
    a: 1,
    d: 3,
    s: 34
};
obj[Symbol.iterator] = Array.prototype[Symbol.iterator];
for (let i of obj) {
    console.log(i);
}