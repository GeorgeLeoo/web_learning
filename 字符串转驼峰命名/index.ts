class Word {
  static toCamel(str: string): string {
    let strs: string[] = str.split('-');
    let resArr: string = strs[0];
    for (let i = 1; i < strs.length; i++) {
      resArr += strs[i].charAt(0).toUpperCase() + strs[i].substr(1, strs[i].length - 1);
    }
    return resArr;
  }
}

let str: string = 'get-element-by-id';
console.log(Word.toCamel(str));
