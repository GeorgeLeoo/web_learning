
/* eslint-disable no-unused-vars */
/**
 * ArrayList
 */
function ArrayList() {
  let array = [];

  const rangeCheck = function(index) {
    if (index >= array.length) {
      throw console.error('IndexOutOfBoundsException. Index: '
      + index + ', Size: ' + array.length);
    }
  };

  const rangeCheckForAdd = function(index) {
    if (index >= array.length) {
      throw console.error('IndexOutOfBoundsException. Index: '
      + index + ', Size: ' + array.length);
    }
  };

  this.add = function(el) {
    array.push(el);
  };

  this.size = function() {
    return array.length;
  };

  this.isEmpty = function() {
    return array.length == 0;
  };

  this.contains = function(el) {
    return this.indexOf(el) >= 0;
  };

  this.indexOf = function(el) {
    return array.indexOf(el);
  };

  this.lastIndexOf = function(el) {
    return array.lastIndexOf(el);
  };

  this.clone = function() {
    const cloneArray = [];
    for (let i = 0; i < array.length; i++) {
      cloneArray[i] = array[i];
    }
    return cloneArray;
  };

  this.get = function(index) {
    rangeCheck(index);
    return array[index];
  };

  this.set = function(index, el) {
    rangeCheck(index);
    array[index] = el;
  };

  this.addAt = function(index, el) {
    rangeCheckForAdd(index);
    array.splice(index, 0, el);
  };

  this.remove = function(el) {
    return array.splice(this.indexOf(el), 1);
  };

  this.removeAt = function(index) {
    rangeCheck(index);
    return array.splice(index, 1);
  };

  this.clear = function() {
    array = [];
  };

  this.addAll = function(newArray) {
    array = array.concat(newArray);
  };

  this.addAllAt = function(index, newArray) {
    rangeCheckForAdd(index);
    const len = index + newArray.length;
    const first = array.slice(index, len);
    const last = array.slice(len);
    first.splice(index, 0, ...newArray);
    first.splice(len, 0, last);
    array = first;
  };

  this.removeRange = function(formIndex, toIndex) {
    array.splice(formIndex, toIndex - formIndex + 1);
  };

  this.sort = function(callback) {
    array.sort(callback);
  };

  this.toString = function() {
    let str = '';
    for (let i = 0; i < array.length; i++) {
      if (array[i] === null) {
        str += 'null';
      } else {
        str += array[i] + '';
      }
      if (i !== array.length - 1) {
        str += ',';
      }
    }
    return str;
  };

  this.values = function() {
    const printArr = this.clone(array);
    return printArr;
  };

  this.forEach = function(callback) {
    array.forEach(callback);
  };

  this.every = function(callback) {
    array.every(callback);
  };

  this.filter = function(callback) {
    array.filter(callback);
  };

  this.map = function(callback) {
    array.map(callback);
  };

  this.reduce = function(callback) {
    array.reduce(callback);
  };

  this.reduceRight = function(callback) {
    array.reduceRight(callback);
  };

  this.reverse = function() {
    array.reverse();
  };

  this.some = function(callback) {
    array.some(callback);
  };
}


/* eslint-disable no-unused-vars */
/**
 * userbean
 * @return {Object} The sum of the two numbers.
 */
function User() {
  let _username;
  let _password;

  return {
    getUserName: function() {
      return _username;
    },
    getPassword: function() {
      return _password;
    },
    setUserName: function(username) {
      _username = username;
    },
    setPassword: function(password) {
      _password = password;
    },
  };
}

const user1 = new User();
const user2 = new User();

user1.setUserName('admin111');
user1.setPassword('111');

user2.setUserName('admin222');
user2.setPassword('222');

const list = new ArrayList();

list.add(user1);
list.add(user2);

for (let i=0; i<list.size(); i++) {
  console.log(list.get(i).getUserName(), list.get(i).getPassword());
}

