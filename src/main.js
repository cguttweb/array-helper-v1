//jshint esversion:6

import Vue from 'vue';
import App from './App.vue';
import VueClipboard from 'vue-clipboard2';

// import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
