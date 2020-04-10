import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vue-tsx-support/enable-check'
import element from '@/plugin/element'
Vue.use(element)
Vue.config.productionTip = false
export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
