import Vue from 'vue';
import Vuex from 'vuex';

import formBuilder from './formBuilder';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    formBuilder,
  },
});
