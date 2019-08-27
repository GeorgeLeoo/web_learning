let _state,
    _mutations,
    _actions;

function Jstore({state, mutations, actions}) {
    _state = state
}

Jstore.dispatch = function (type, payload) {
    console.log('_state');
};

module.exports = Jstore;
