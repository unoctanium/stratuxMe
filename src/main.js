import Vue from 'vue'
import App from '@/App'
import router from '@/router'

// import stratux
import StratuxVue from '@/plugins/StratuxVue'
Vue.use(StratuxVue)

Vue.config.productionTip = false

// Declare cordova
Vue.cordova = Vue.prototype.$cordova = window.cordova


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
