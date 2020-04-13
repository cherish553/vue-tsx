import { Component, Vue } from 'vue-property-decorator'
@Component
export class From extends Vue {
  // 当form下只有一个input则阻止enter自动提交
  // preventFormSubmit = (ref: string) => {
  //   ;((this.$refs[ref] as Vue).$el as HTMLFormElement).onsubmit = e =>
  //     e.preventDefault()
  // }
  // 提交表单
  validate = async (ref: string): Promise<boolean> => {
    try {
      await (this.$refs[ref] as HTMLFormElement).validate()
      return true
    } catch (err) {
      return false
    }
  }
  // 重置表单
  reset = (ref: string): void => {
    ;(this.$refs[ref] as HTMLFormElement).resetFields()
  }
}
