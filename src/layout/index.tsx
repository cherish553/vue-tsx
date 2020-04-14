import { Vue, Component } from 'vue-property-decorator'
import headers from './headers/index'
import leftMenu from './leftMenu'
@Component({
  components: {
    headers,
    leftMenu,
  },
})
export default class Layout extends Vue {
  render() {
    return (
      <div>
        <headers />
        <left-menu />
        <router-view />
      </div>
    )
  }
}
