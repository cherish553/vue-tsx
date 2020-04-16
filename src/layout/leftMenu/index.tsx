import { Component, Vue } from 'vue-property-decorator'
import style from './index.module.scss'
// 左侧菜单栏
const menuList = [
  {
    iClass: 'el-icon-document',
    spanText: '文章管理',
  },
  {
    iClass: 'el-icon-collection-tag',
    spanText: '文章类别',
  },
  {
    iClass: 'el-icon-tickets',
    spanText: '标签类别',
  },
]

@Component
export default class LeftMenu extends Vue {
  render() {
    return (
      <el-menu
        text-color="#ffffff"
        active-text-color="#409EFF"
        class={style.menu}
        default-active="1"
      >
        {menuList.map((item, index) => (
          <el-menu-item
            index={(++index).toString()}
            scopedSlots={{
              title: () => [
                <i class={item.iClass}></i>,
                <span>{item.spanText}</span>,
              ],
            }}
          ></el-menu-item>
        ))}
      </el-menu>
    )
  }
}
