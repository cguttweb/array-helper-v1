//jshint esversion:6

import Vue from 'vue';
import App from './App.vue';

// import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);

import VueClipboards from 'vue-clipboards';

Vue.use(VueClipboards);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
