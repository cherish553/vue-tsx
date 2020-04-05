import Vue from 'vue';
import { Button, Message } from 'element-ui';

export default {
    install(Vue: { use: (arg0: typeof Button) => void; }) {
        Vue.use(Button)
        // .use(Message)
    }
}
// * Vue.use(Select)
Vue.prototype.$message = Message;
