<template>
  <div class="ewm" @click="$emit('cancel')">
    <div class="ewm-content animated fadeInUp" @click.stop.prevent>
      <div class="ewm-main">
        <img src="../assets/icon/header.png" class="main-header">
        <div class="main-title">客服二维码</div>
        <div class="main-add">请扫下方二维码添加</div>
        <img v-if="location" :src="dataUrl" class="main-ewm">
        <img v-else :src="dataUrl | httpFilter" class="main-ewm">
      </div>
      <div class="ewm-cancel bor-t" @click="cancelFunc()">
        <span>取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ewm',
  props: {
    dataUrl: {
      type: String
    },
    location: false
  },
  methods: {
    cancelFunc () {
      this.$emit('cancel')
    }
  },
  filters: {
    httpFilter (val) {
      if (val) {
        if (val.search("http") !== -1) return val
        return `https://${val}`
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .ewm {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, .5);
    .ewm-content {
      width: 100%;
      position: absolute;
      bottom: 0;
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      background: #fff;
      .ewm-main {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 284px;
        line-height: 1;
        padding: 25px 0 0 0;
        box-sizing: border-box;
        background-image: url('../assets/img/bg_ewm.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .main-header {
          width: 36px;
          height: 36px;
        }
        .main-title {
          color: #000;
          font-size: 13px;
          margin: 8.5px 0 0 0;
        }
        .main-add {
          color: #999;
          font-size: 12px;
          margin: 10px 0 17.5px 0;
        }
        .main-ewm {
          width: 140px;
          height: 140px;
        }
      }
      .ewm-cancel {
        color: #656565;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 55px;
        position: relative;
      }
    }
  }
</style>
