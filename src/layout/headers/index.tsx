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
// 选择模式
const dropdownItem = [
  'http://cdns.cherish553.cn/back.jpg',
  'http://cdns.cherish553.cn/back1.jpg',
  'http://cdns.cherish553.cn/back2.jpeg',
].map((item, index) => ({
  src: item,
  command: index,
}))
import { Component, Vue } from 'vue-property-decorator'
import style from './index.module.scss'
import { user } from '@/store/'
import classnames from 'classnames'
@Component
export default class Headers extends Vue {
  full = false
  // 退出登录
  logout() {
    user.removeUserAction()
    this.$router.push({ name: 'login' })
  }
  // 修改主题
  changeMode(index: number) {
    console.log(index)
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
    const { full, changeMode, fullScreen, exitScreen, logout } = this
    return (
      <div class={classnames('white', style.container)}>
        {/* 左侧内容 */}
        <h2>李可凡的个人博客后台管理</h2>
        {/* 右侧内容 */}
        <div class={style.headerRight}>
          {/* 选择主题 */}
          <el-dropdown onCommand={changeMode} class={style.mr20}>
            <el-button type="primary" size="mini">
              选择主题
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              {dropdownItem.map(item => (
                <el-dropdown-item key={item.src} command={item.command}>
                  <img class="dropdownImg" src={item.src} />
                </el-dropdown-item>
              ))}
            </el-dropdown-menu>
          </el-dropdown>
          {/* 全屏控制按钮 */}
          <i
            class={classnames(
              !full ? 'el-icon-zoom-in' : 'el-icon-zoom-out',
              style.fs20,
              style.mr20
            )}
            onClick={!full ? fullScreen : exitScreen}
          ></i>
          {/* 用户信息&退出按钮 */}
          <el-popover
            popperClass="center"
            placement="bottom"
            width="150"
            trigger="click"
          >
            <el-button onClick={logout} size="mini" type="danger">
              退出登录
            </el-button>
            <p slot="reference">你好{user.name}</p>
          </el-popover>
        </div>
      </div>
    )
  }
}
