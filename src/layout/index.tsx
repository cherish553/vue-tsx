import { Vue, Component } from 'vue-property-decorator'
import headers from './headers/index'
@Component({
  components: {
    headers,
  },
})
export default class Layout extends Vue {
  render() {
    return (
      <div>
        <headers />
        <router-view />
      </div>
    )
  }
}
