import { Vue, Component } from 'vue-property-decorator'
import headers from './headers'
@Component({
  components: {
    headers,
  },
})
export default class About extends Vue {
  names: string | number = 'login.names'
  render() {
    return (
      <div class="cherishs">
        <headers />
        <router-view />
      </div>
    )
  }
}
