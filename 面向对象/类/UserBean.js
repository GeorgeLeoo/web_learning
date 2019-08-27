/* eslint-disable no-unused-vars */
/**
 * userbean
 * @return {Object} The sum of the two numbers.
 */
function User() {
  this.username ='';
  this.password ='';

  const context = this;

  return {
    getUserName: function() {
      return context.username;
    },
    getPassword: function() {
      return context.password;
    },
    setUserName: function(username) {
      context.username = username;
    },
    setPassword: function(password) {
      context.password = password;
    },
    toJSON: function() {
      return {username: context.username, password: context.password};
    },
  };
}

const user1 = new User();
const user2 = new User();

// console.log(user1.getUserName(), user1.getPassword());

user1.setUserName('admin111');
user1.setPassword('111');

user2.setUserName('admin222');
user2.setPassword('222');

console.log(user1.getUserName(), user1.getPassword());
console.log(user2.getUserName(), user2.getPassword());

console.log(user1.toJSON());
console.log(user2.toJSON());
