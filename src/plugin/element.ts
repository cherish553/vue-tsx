import Vue from 'vue'
import {
  Button,
  Message,
  Card,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
} from 'element-ui'
class Vues {
  public use(
    arg:
      | typeof Button
      | typeof Card
      | typeof Table
      | typeof TableColumn
      | typeof Form
      | typeof FormItem
      | typeof Input
  ) {
    if (arg) return this
    return this
  }
}
export default {
  install(Vue: Vues) {
    Vue.use(Button)
      .use(Card)
      .use(Table)
      .use(TableColumn)
      .use(Form)
      .use(FormItem)
      .use(Input)
  },
}
// * Vue.use(Select)
Vue.prototype.$message = Message
