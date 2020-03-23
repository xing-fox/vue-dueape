import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    loginStatus: false
  },
  mutations: {
    CHANGELOGIN (state, status) {
      state.loginStatus = status
    }
  },
  actions: {}
})
