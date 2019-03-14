import Vue from 'vue'
import {
  Button,
  Slider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Checkbox,
  InputNumber,
  Dialog,
  Table,
  TableColumn,
  Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Slider)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(InputNumber)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Message)

Vue.prototype.$message = Message