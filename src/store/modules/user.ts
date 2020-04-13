import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import Cookies from 'js-cookie'
import { LoginData } from '@/interface'
import router from '@/router'
@Module
export default class UserModule extends VuexModule {
  name = (() => Cookies.get('name'))()

  @Mutation
  setUser(name: string) {
    this.name = name
  }

  @Action
  setUserAction(data: LoginData) {
    Object.keys(data).forEach(item => {
      Cookies.set(item, data[item])
    })
    this.setUser(data.name)
    router.push({ name: 'article' })
  }
}
