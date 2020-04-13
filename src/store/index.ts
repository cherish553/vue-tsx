import Vue from 'vue'
import Vuex from 'vuex'
// // import Cookies from 'js-cookie'
Vue.use(Vuex)
const store = new Vuex.Store({})
export default store
// const setUser = 'setUser'
// export default new Vuex.Store({
//   state: {
//     user: {
//       name: 'cherish',
//       mode: 0,
//     },
//   },
//   mutations: {
//     [setUser](state, e) {
//       console.log('mutation')

//       state.user.name = e
//     },
//     // 改变模式
//     // setMode(state, e) {
//     //   state.user.mode = e
//     // },
//   },
//   actions: {
//     // 保存用户名
//     setUser({ commit }) {
//       // const name = Cookies.get('name') || ''
//       console.log('action')
//       commit(setUser, name)
//     },
//     // 改变模式
//     // setMode({ commit }, e) {
//     //   if (String(e)) Cookies.set('mode', e)
//     //   const mode = parseInt(Cookies.get('mode')) || 0
//     //   commit('setMode', mode)
//     // },
//   },
// })

import { VuexModule, Module, Mutation } from 'vuex-class-modules'

@Module
class UserModule extends VuexModule {
  // state
  private firstName = 'Foo'
  private lastName = 'Bar'

  // getters
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  // mutations
  @Mutation
  setFirstName(firstName: string) {
    console.log(1111)
    this.firstName = firstName
  }
  @Mutation
  setLastName(lastName: string) {
    this.lastName = lastName
  }

  // actions
  // @Action
  // async loadUser() {
  //   const user = await fetchUser()
  //   this.setFirstName(user.firstName)
  //   this.setLastName(user.lastName)
  // }
}

// register module (could be in any file)
export const userModule = new UserModule({ store, name: 'user' })
