import Vue from 'vue';
import App from './App.vue';

import print from './index';

console.log(print);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
