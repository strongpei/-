import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from "./router"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router  //全局多了一个router
}).$mount('#app')
