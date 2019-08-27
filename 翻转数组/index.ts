class Arrays {

  static reverse(arr: any[]) {
    let res = arr;
    for (let i = 0; i < res.length / 2; i++) {
      let tmp = res[i];
      res[i] = res[res.length - 1 - i];
      res[res.length - 1 - i] = tmp;
    }
  }
}

let arr = [1, 2, 3, 4];
Arrays.reverse(arr)
console.log(arr);
