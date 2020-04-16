import { Component, Prop } from 'vue-property-decorator'
import { Component as tsc } from 'vue-tsx-support'
import style from './index.module.scss'
interface Props {
  title: string
}

@Component
export default class Title extends tsc<Props> {
  @Prop() readonly title!: string
  render() {
    const { title } = this
    return (
      <div class={style.header}>
        <h2>{title}</h2>
      </div>
    )
  }
}
// type?: PropType<T>;
//   required?: boolean;
//   default?
