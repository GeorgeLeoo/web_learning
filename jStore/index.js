const Jstore = require('./jstore');
const state = require('./state');
const mutations = require('./mutations');
const actions = require('./actions');

module.exports= new Jstore({
    state,
    mutations,
    actions
});
