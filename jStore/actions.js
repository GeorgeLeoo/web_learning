const {RECEIVE_USER_INFO} = require('./mutation-types');

module.exports = {
    saveUser({commit, state}) {
        let users = {name: 'Tom', age: 23};
        commit(RECEIVE_USER_INFO, {users})
    }
};
