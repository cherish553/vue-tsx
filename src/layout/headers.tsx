// import { mapState, mapActions } from 'vuex'
// import cookie from '@common/cookie'
type FullScreen = HTMLElement & {
  requestFullScreen: Function
  webkitRequestFullScreen: Function
  mozRequestFullScreen: Function
  msRequestFullscreen: Function
}
type Documents = Document & {
  exitFullscreen: Function
  mozCancelFullScreen: Function
  webkitCancelFullScreen: Function
  msExitFullscreen: Function
}
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Headers extends Vue {
  full = false
  // 退出登录
  layout() {
    //   cookie.delCookie('name')
    //   cookie.delCookie('token')
    //   this.$jump('login')
  }
  // 修改主题
  changeMode(index) {
    console.log(index)
    //   this.setMode(index)
  }
  // 全屏
  fullScreen() {
    this.full = true
    const el = document.documentElement as FullScreen
    const rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen
    if (typeof rfs !== 'undefined' && rfs) rfs.call(el)
  }
  // 退出全屏
  exitScreen() {
    this.full = false
    const doc = document as Documents
    const rfs =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitCancelFullScreen ||
      doc.msExitFullscreen
    if (typeof rfs !== 'undefined' && rfs) rfs.call(document)
  }
  render() {
    const { full, changeMode, fullScreen, exitScreen } = this
    return (
      <div class="flex w100">
        <h2 class="floatLeft">李可凡的个人博客后台管理</h2>
        <div class="floatRight">
          <el-dropdown class="mr20">
            <el-button type="primary" size="mini">
              选择主题
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item nativeOnClick={() => changeMode(0)}>
                <img
                  class="dropdownImg"
                  src="http://cdns.cherish553.cn/back.jpg"
                  alt=""
                />
              </el-dropdown-item>
              <el-dropdown-item nativeOnClick={() => changeMode(1)}>
                <img
                  class="dropdownImg"
                  src="http://cdns.cherish553.cn/back1.jpg"
                  alt=""
                />
              </el-dropdown-item>
              <el-dropdown-item nativeOnClick={() => changeMode(2)}>
                <img
                  class="dropdownImg"
                  src="http://cdns.cherish553.cn/back2.jpeg"
                  alt=""
                />
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          {!full ? (
            <i class="white el-icon-zoom-in fs mr20" onClick={fullScreen}></i>
          ) : (
            <i class="white el-icon-zoom-out fs mr20" onClick={exitScreen}></i>
          )}
          {/* <!-- <el-popover  popper-class="center" placement="bottom" width="0" trigger="click">
            <el-button class="mr20" slot="reference" size="mini" type="danger">选择模式</el-button>
          </el-popover>--> */}
          <el-popover
            popperClass="center"
            placement="bottom"
            width="150"
            trigger="click"
          >
            <el-button onClick="layout" size="mini" type="danger">
              退出登录
            </el-button>
            <p slot="reference" style="color:white">
              你好
            </p>
          </el-popover>
        </div>
      </div>
    )
  }
}
