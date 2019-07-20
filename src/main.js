import Vue from 'vue'


import App from './App.vue'
import vueFormCreate from './lib/index.js'
Vue.use(vueFormCreate)

new Vue({
  el: '#root',
  render: h => h(App)
})

