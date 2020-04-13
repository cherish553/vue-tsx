import { Vue, Component } from 'vue-property-decorator'
import './App.scss'
@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}
