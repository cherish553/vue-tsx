import { Component as tsc } from 'vue-tsx-support'
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class About extends tsc<Vue> {
  names: string | number = 'login.names'
  render() {
    return (
      <div class="cherishs">
        app
        <router-view />
        {/* <div class={style.hello} onClick={this.chifan}>{this.names}</div> */}
        {/* <input type="text" v-model={this.names} /> */}
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
