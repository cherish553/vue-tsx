import { Vue, Component } from 'vue-property-decorator'
import headers from './headers/index'
import leftMenu from './leftMenu'
import style from './index.module.scss'
@Component({
  components: {
    headers,
    leftMenu,
  },
})
export default class Layout extends Vue {
  render() {
    return (
      <div class={style.container}>
        {/* 头部 */}
        <headers />
        {/* 主要内容 */}
        <div class={style['layout-container']}>
          <left-menu />
          <div class={style['layout-container-main']}>
            <router-view />
          </div>
        </div>
      </div>
    )
  }
}
