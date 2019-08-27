/**
 *  Buffer(缓冲区)
 *      - Buffer的结构和数组很像，操作的方法也和数组很像
 *      - 数组中不能存储二进制文件，而buffer就是专门用来存储二进制的数据
 *      - buffer存储的都是二进制数据，但是在显示时都是以十六进制的形式显示
 *          buffer中的每一个元素的范围：00-ff
 *      - buffer大小一旦确定不能修改，buffer实际是对底层内存的直接分配
 */
const str = "哈哈Hello Node";

// 将一个字符串保存到Buffer中
const buf = Buffer.from(str);

console.log(buf.length);    //  占用内存的大小，汉字：3个字节，一个汉字
console.log(str.length);    // 字符串长度

console.log(buf.toLocaleString());    // 字符串长度

// 创建一个指定大小的buffer
// const buf2 = new Buffer(1024);
const buf3 = Buffer.alloc(10);
buf3[2] = 255;
buf3[3] = 0xaa;
buf3[0] = 1111;
console.log(buf3);
console.log(buf3[3].toString(16));
console.log('-------');
for (let i = 0; i <buf3.length; i++) {
    console.log(buf3[i]);
}
