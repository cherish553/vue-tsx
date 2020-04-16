import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules'
import Cookies from 'js-cookie'
import { LoginData } from '@/interface'
import { jump } from '@/util'
@Module
export default class UserModule extends VuexModule {
  name = (() => Cookies.get('name'))()

  @Mutation
  setUser(name: string) {
    this.name = name
  }

  @Action
  setUserAction(data: LoginData): void {
    ;(Object.keys(data) as Array<keyof LoginData>).forEach((item): void => {
      Cookies.set(item, data[item])
    })
    this.setUser(data.name)
    jump('article')
  }

  @Action
  removeUserAction(data: Array<keyof LoginData> = ['name', 'token']) {
    data.forEach(item => {
      Cookies.remove(item)
    })
    this.setUser('')
  }
}
