import { Component, Mixins } from 'vue-property-decorator'
import { modifiers as mod } from 'vue-tsx-support'
import style from './index.module.scss'
import classNames from 'classnames'
import { login } from '@/api/user'
import debounce from 'lodash/debounce'
import md5 from 'md5'
import { From } from '@/mixins'
import { normalRules } from '@/util/rule'
import { user } from '@/store/index'
import { LoginParams } from '@/interface'
@Component
export default class Login extends Mixins(From) {
  form: LoginParams = {
    userName: '',
    passWord: '',
  }
  value = true
  rules = normalRules([
    { key: 'userName', message: '用户名' },
    { key: 'passWord', message: '密码' },
  ])
  // 提交表单
  async submit(ref: string): Promise<void | undefined> {
    const validate = await this.validate(ref)
    if (!validate) return
    this.login()
  }
  // 登录
  login = debounce(async (): Promise<void | undefined> => {
    let { passWord } = this.form
    passWord = md5(passWord)
    const data = await login({ ...this.form, passWord })
    if (!data) return
    user.setUserAction(data)
  }, 150)
  render() {
    const { rules, form, submit, reset } = this
    return (
      <div class={classNames(style.container, 'container')}>
        <el-card class={style.card}>
          <div slot="header" class="clearfix">
            <h2 class={style.title}>李可凡个人博客管理后台</h2>
          </div>
          <el-form
            nativeOnSubmit={mod.prevent}
            class="whiteLabel"
            rules={rules}
            ref="form"
            label-width="70px"
            props={{ model: form }}
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                type="text"
                v-model={form.userName}
                nativeOnKeyup={mod.enter(() => submit('form'))}
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input
                type="password"
                v-model={form.passWord}
                nativeOnKeyup={mod.enter(() => submit('form'))}
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" onClick={() => submit('form')}>
                确认登录
              </el-button>
              <el-button onClick={() => reset('form')}>重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    )
  }
}
