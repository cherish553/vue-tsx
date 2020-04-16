import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vue-tsx-support/enable-check'
import element from '@/plugin/element'
// import cherish from '@/components'
Vue.use(element)
// Vue.use(cherish)
Vue.config.productionTip = false
export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
