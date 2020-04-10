import { Component as tsc } from 'vue-tsx-support'
import { Vue, Component } from 'vue-property-decorator'
import './App.scss'
@Component
export default class App extends tsc<Vue> {
  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}
