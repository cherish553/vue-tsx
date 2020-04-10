import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
Vue.use(Vuex)
const setUser = 'setUser'
export default new Vuex.Store({
  state: {
    user: {
      name: 'cherish',
      mode: 0,
    },
  },
  mutations: {
    [setUser](state, e) {
      console.log('mutation')

      state.user.name = e
    },
    // 改变模式
    // setMode(state, e) {
    //   state.user.mode = e
    // },
  },
  actions: {
    // 保存用户名
    setUser({ commit }) {
      // const name = Cookies.get('name') || ''
      console.log('action')
      commit(setUser, name)
    },
    // 改变模式
    // setMode({ commit }, e) {
    //   if (String(e)) Cookies.set('mode', e)
    //   const mode = parseInt(Cookies.get('mode')) || 0
    //   commit('setMode', mode)
    // },
  },
})
