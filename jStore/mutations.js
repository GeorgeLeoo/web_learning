const {RECEIVE_USER_INFO} = require('./mutation-types');
module.exports = {
    [RECEIVE_USER_INFO](state, {user}) {
        state.user = user
    }
};
