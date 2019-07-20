

import vueFormCreate from './components/vueFormCreate.js'

const install = function(Vue, opts = {}) {
    Vue.component('vueFormCreate', vueFormCreate)
}

const API = {
    install,
    version: '1.0.0',
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(API);
}

export default API
