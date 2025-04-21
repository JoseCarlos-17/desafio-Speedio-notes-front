import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/reset.css';
import locale from 'element-ui/lib/locale/lang/en';
import store from '../src/store/store'

export const API_url = axios.create({
  baseURL: 'http://localhost:3000',
})

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
