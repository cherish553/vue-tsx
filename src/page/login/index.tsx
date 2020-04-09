import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
import style from './index.module.scss'
import classNames from 'classnames'
// import {add} from '@/api/article'

@Component
export default class About extends tsc<Vue> {
  names = 'login.names'
  form = {
    userName: '',
    passWord: '',
  }
  rules = {
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  }
  handleClick(row) {
    console.log(row)
    // console.log(this)
  }
  async created(): Promise<void> {
    await this.$nextTick()
    ;((this.$refs.form as this).$el as HTMLFormElement).onsubmit = e =>
      e.preventDefault()
  }
  // 提交表单
  submit(ref: string) {
    ;(this.$refs[ref] as HTMLFormElement).validate(valid => console.log(valid))
  }
  // 重置表单
  reset(ref: string) {
    ;(this.$refs[ref] as HTMLFormElement).resetFields()
  }
  render() {
    return (
      <div class={classNames(style.container, 'container')}>
        <el-card class={style.card}>
          <div slot="header" class="clearfix">
            <h2 class={style.title}>李可凡个人博客管理后台</h2>
          </div>
          <el-form
            class="whiteLabel"
            rules={this.rules}
            ref="form"
            label-width="70px"
            {...{ props: { model: this.form } }}
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                type="text"
                v-model={this.form.userName}
                nativeOnKeyup={({ keyCode }) =>
                  keyCode === 13 && this.handleClick
                }
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input
                type="password"
                v-model={this.form.passWord}
                nativeOnKeyup={({ keyCode }) =>
                  keyCode === 13 && this.handleClick
                }
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" onClick={() => this.submit('form')}>
                确认登录
              </el-button>
              <el-button onClick={() => this.reset('form')}>重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    )
  }
  chifan = () => {
    console.log(this.names)
  }
}
// </script>
