/**
 * jhh
 * @returns {}
 */
function Person(sex) {
  const o = {};
  const arr = [1, 2, 3];
  console.log(arr);

  o.setName = function(name) {
    o.name = name;
  };

  o.getName = function() {
    return o.name;
  };

  o.setAge = function(age) {
    o.age = age;
  };

  o.getAge = function() {
    return o.age;
  };

  o.getSex = function() {
    return sex;
  };
  return o;
}

const p1 = new Person('man');
const p2 = new Person('woman');

console.log(p1, p2);

p1.setName('jack');
p2.setName('tom');

p1.setAge(20);
p2.setAge(10);

console.log(p1.name, p2);

console.log(p1.getName(), p1.getAge());
console.log(p2.getName(), p2.getAge());

console.log(p1.getSex(), p2.getSex());
