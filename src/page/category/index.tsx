import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
// import style from './login.module.scss'
// import HelloWorld from '@/components/HelloWorld'
// import {add} from '@/api/article'

@Component
export default class About extends tsc<Vue> {
  names = '分类'
  render() {
    return (
      <div class="cherishs">
        <div>{this.names}</div>
        {/* login */}
        {/* <div class={style.hello} onClick={this.chifan}>{this.names}</div> */}
        {/* <input type="text" v-model={this.names} />
        <HelloWorld namea={'123'}>
        </HelloWorld> */}
      </div>
    )
  }
  chifan = () => {
    console.log(this.names)
    // console.log(await add());
    // this.naes=123
    // console.log()
    // const data=await http.get(`${process.env.VUE_APP_BASE_URL}/tag/all`)
    // console.log(data)
  }
}
// </script>
