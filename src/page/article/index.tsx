import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
// import style from './login.module.scss'
// import HelloWorld from '@/components/HelloWorld'
// import {add} from '@/api/article'
@Component
export default class About extends tsc<Vue> {
  names = '文章'
  activeIndex = '0'
  handleSelect(index: string) {
    console.log(index)
  }
  render() {
    return (
      <el-menu
        defaultActive={this.activeIndex}
        class="el-menu-demo"
        mode="horizontal"
        onSelect={this.handleSelect}
      >
        <el-menu-item index="3">处理中心</el-menu-item>
        {/* <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> */}
      </el-menu>
      // <div class="line"></div>
      // <el-menu
      //   :default-active="activeIndex2"
      //   class="el-menu-demo"
      //   mode="horizontal"
      //   @select="handleSelect"
      //   background-color="#545c64"
      //   text-color="#fff"
      //   active-text-color="#ffd04b">
      //   <el-menu-item index="1">处理中心</el-menu-item>
      //   <el-submenu index="2">
      //     <template slot="title">我的工作台</template>
      //     <el-menu-item index="2-1">选项1</el-menu-item>
      //     <el-menu-item index="2-2">选项2</el-menu-item>
      //     <el-menu-item index="2-3">选项3</el-menu-item>
      //     <el-submenu index="2-4">
      //       <template slot="title">选项4</template>
      //       <el-menu-item index="2-4-1">选项1</el-menu-item>
      //       <el-menu-item index="2-4-2">选项2</el-menu-item>
      //       <el-menu-item index="2-4-3">选项3</el-menu-item>
      //     </el-submenu>
      //   </el-submenu>
      //   <el-menu-item index="3" disabled>消息中心</el-menu-item>
      //   <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      // </el-menu>
    )
  }
}
