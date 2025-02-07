import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueTap from 'v-tap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Spinner } from 'mint-ui'
Vue.component(Spinner.name, Spinner);
Vue.use(VueAxios,axios)
Vue.use(vueTap)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')