import 'normalize.css';

import Vue from 'vue';
import VeeValidate from 'vee-validate';

import App from './App';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
});
