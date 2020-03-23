<template>
  <div id="app">
    <router-view />
    <van-popup
      v-model="loginStatus"
      closeable
      position="bottom"
      :style="{ height: '100%' }">
      <login />
    </van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant'
import Login from '@/components/login'
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'loginStatus'
  ]),
  components: {
    Login,
    [Popup.name]: Popup
  }
}
</script>
