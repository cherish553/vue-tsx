import { Component, Prop } from 'vue-property-decorator'
import { Component as tsc } from 'vue-tsx-support'

interface Props {
  namea: string
}
@Component({
  name: 'HelloWorld',
})
export default class HelloWorld extends tsc<Props> {
  public names = 'hellowprd'
  @Prop() private namea!: string
  render() {
    const { names, namea } = this
    return (
      <div class="hello">
        {names}
        {namea}
      </div>
    )
  }
}
