import 'normalize.css';

import Vue from 'vue';
import VeeValidate from 'vee-validate';

import './styles/style.scss';

import App from './App';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: {
    App,
  },
});
