/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 */
function Stack() {
  let items = [];
  this.push = function(el) {
    items.push(el);
  };
  this.pop = function() {
    items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function() {
    return items.length === 0;
  };
  this.getSize = function() {
    return items.length;
  };
  this.clear = function() {
    items = [];
  };
  this.print = function() {
    console.log(items);
  };
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
const stack2 = new Stack();
