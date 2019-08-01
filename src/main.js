import Vue from 'vue'


import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueFormCreate from './lib/index.js'

Vue.use(ElementUI);
Vue.use(vueFormCreate)

new Vue({
  el: '#root',
  render: h => h(App)
})

