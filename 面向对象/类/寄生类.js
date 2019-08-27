/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @return {number} The sum of the two numbers.
 */
function ArrayList() {
  const arr = [];
  // var args = Array.prototype.slice.call(arguments);
  arr.push.apply(arr, arguments);

  arr.toPipedString = function() {
    return this.join('-');
  };

  return arr;
}

const list = new ArrayList('dasd', 'ds');
console.log(list.toPipedString());
