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
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Popover,
  Menu,
  MenuItem,
} from 'element-ui'
class Vues {
  public use(arg) {
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
      .use(Dropdown)
      .use(DropdownItem)
      .use(DropdownMenu)
      .use(Popover)
      .use(Menu)
      .use(MenuItem)
  },
}
Vue.prototype.$message = Message
