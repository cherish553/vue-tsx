import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({})
export default store

import UserModule from './modules/user'
export const user = new UserModule({ store, name: 'user' })
