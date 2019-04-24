import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Axios from 'axios'
import setAxios from './setaxios'
setAxios();

Vue.config.productionTip = false
//将Axios挂载到vue的原型上面
Vue.prototype.$http = Axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
