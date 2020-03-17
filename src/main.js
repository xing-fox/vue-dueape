import Vue from 'vue'
import App from './App'
import { router } from './router'
import 'amfe-flexible'
import Components from './config/components'
import './styles/public.css'

Vue.use(Components)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
