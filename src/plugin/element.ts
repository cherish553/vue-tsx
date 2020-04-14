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
  Switch,
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
      | typeof Dropdown
      | typeof DropdownItem
      | typeof DropdownMenu
      | typeof Popover
      | typeof Menu
      | typeof MenuItem
      | typeof Switch
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
      .use(Dropdown)
      .use(DropdownItem)
      .use(DropdownMenu)
      .use(Popover)
      .use(Menu)
      .use(MenuItem)
      .use(Switch)
  },
}
Vue.prototype.$message = Message
