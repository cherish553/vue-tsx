import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
// import style from './login.module.scss'
import HelloWorld from '@/components/HelloWorld'
// import {add} from '@/api/article'
interface Chifan {
  (): void
}
@Component
export default class About extends tsc<Vue> {
  names = '文章'
  render() {
    return (
      <div class="cherishs">
        {this.names}
        {/* login */}
        {/* <div class={style.hello} onClick={this.chifan}>{this.names}</div> */}
        {/* <input type="text" v-model={this.names} /> */}
        <HelloWorld namea={'123'} />
      </div>
    )
  }
  chifan: Chifan = () => {
    console.log(this.names)
    // console.log(await add());
    // this.naes=123
    // console.log()
    // const data=await http.get(`${process.env.VUE_APP_BASE_URL}/tag/all`)
    // console.log(data)
  }
}
// </script>
