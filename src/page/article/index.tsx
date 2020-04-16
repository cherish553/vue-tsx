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
      <div>
        <CherishTitle title={this.title} />
        {/* <HelloWorld /> */}
      </div>
    )
  }
}
