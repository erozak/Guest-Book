import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import modules from './modules/book';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  modules,
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
