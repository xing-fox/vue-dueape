
<style lang="less">
.home {
}
</style>
<template>
  <div class="home">
    <router-view />
    <van-tabbar route v-model="active" active-color="#C59B46" inactive-color="#666666">
      <van-tabbar-item v-for="(item, index) in tabbarList" :key="index" replace :to="item.path">
        <span>{{ item.title }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.icon[1] : item.icon[0]"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem
} from 'vant';

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },

  data() {
    return {
      active: 0,
      tabbarList: [
        {
          title: "首页",
          path: "/home/curriculum",
          icon: [require('../assets/icon-1.png'),require('../assets/icon-1-on.png')]
        }, {
          title: "我的课程",
          path: "/home/payment",
          icon: [require('../assets/icon-2.png'),require('../assets/icon-2-on.png')]
        }, {
          title: "账户",
          path: "/home/user",
          icon: [require('../assets/icon-3.png'),require('../assets/icon-3-on.png')]
        }
      ]
    }
  },
  methods: {
  }
};
</script>

