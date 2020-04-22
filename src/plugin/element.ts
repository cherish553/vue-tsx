import Vue, { VueConstructor } from 'vue'
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
  Row,
  Col,
} from 'element-ui'
export default {
  install(Vue: VueConstructor) {
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
      .use(Row)
      .use(Col)
  },
}
Vue.prototype.$message = Message
