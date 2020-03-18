import Vue from 'vue'
import App from './App'
import { router } from './router'
import 'amfe-flexible'
import 'vant/lib/button/style'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
