import { Component as tsc } from 'vue-tsx-support'
import { Vue, Component } from 'vue-property-decorator'
import './App.scss'
@Component
export default class About extends tsc<Vue> {
  names: string | number = 'login.names'
  render() {
    return (
      <div>
        {/* <div onClick={() => this.jump('tag')}>标签</div>
        <div onClick={() => this.jump('article')}>文章</div>
        <div onClick={() => this.jump('category')}>分类</div> */}
        <router-view />
        {/* <div class={style.hello} onClick={this.chifan}>{this.names}</div> */}
        {/* <input type="text" v-model={this.names} /> */}
      </div>
    )
  }
  // jump(name: string) {
  //   this.$router.push({ name })
  // }
}
// </script>
