import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false, // 登录状态
    token: localStorage.getItem('Token') || '', // token信息
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {} // 用户信息
  },
  mutations: {
    CHANGETOKEN (state, info) {
      state.token = info
      localStorage.setItem('Token', info)
    },
    CHANGELOGIN (state, status) {
      state.loginStatus = status
    },
    CHANGEUSERINFO (state, info) {
      state.userInfo = info
      localStorage.setItem('UserInfo', JSON.stringify(info))
    }
  },
  actions: {}
})
