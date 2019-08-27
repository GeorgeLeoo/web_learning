/**
 * vuex核心管理对象
 */
import Vue from './../vue.js'
import Vuex from './../vuex.js'

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
