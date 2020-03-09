<template>
  <div class="curriculum">
    <van-tabs v-model="active" animated swipeable>
      <van-tab v-for="index in 4" :key="index" :title="'选项 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },

  data() {
    return {
      active: 0,
    }
  },

  methods: {
  }
};
</script>

<style lang="less">
.curriculum {
  height: 100vh;
}
</style>
