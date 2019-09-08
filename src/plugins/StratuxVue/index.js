// src/plugins/StratuxVue/index.js
import stratux from './stratux.js'

const VueStratuxPlugin = {
  install(Vue, opts){   
    Vue.prototype.$stratux = stratux 
  }
}

export default VueStratuxPlugin
