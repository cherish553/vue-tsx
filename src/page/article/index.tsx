// import { Component as tsc } from 'vue-tsx-support'
import { Component, Vue } from 'vue-property-decorator'
import { CherishTitle } from '@/components/index'
// import style from './login.module.scss'
// import HelloWorld from '@/components/HelloWorld'
// import {add} from '@/api/article'
@Component({
  components: {
    CherishTitle,
  },
})
export default class Article extends Vue {
  title = this.$root.$route.meta.title
  render() {
    return (
      <div class={'111'}>
        <CherishTitle title={this.title} />
        {/* <div class={style.search}> */}
        <el-row gutter={20}>
          <el-col span={5}>
            <el-input></el-input>
          </el-col>
          <el-col span={5}>
            <el-input></el-input>
          </el-col>
          <el-col span={5}>
            <el-input></el-input>
          </el-col>
          <el-col span={5}>
            <el-input></el-input>
          </el-col>
          <el-col span={2}>
            <el-button icon="el-icon-search" type="primary">
              搜索
            </el-button>
          </el-col>
        </el-row>
        {/* </div> */}
      </div>
    )
  }
}
