import Vue from 'vue'
import { Button, Message, Card, Table, TableColumn } from 'element-ui'
class Vues {
  public use(
    arg: typeof Button | typeof Card | typeof Table | typeof TableColumn
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
  },
}
// * Vue.use(Select)
Vue.prototype.$message = Message
