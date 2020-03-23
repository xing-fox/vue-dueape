import Vue from 'vue'
import App from './App'
import store from './store'
import { router } from './router'
import Components from './config/components'
import 'amfe-flexible'
import './styles/public.css'
import 'vant/lib/button/style'

Vue.use(Components)
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
