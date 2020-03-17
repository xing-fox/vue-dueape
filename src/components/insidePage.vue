<style lang="less">
.inside-page {
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  .public-title {
    position: relative;
    width: 100%;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    box-sizing: border-box;
    text-align: center;
    h3 {
      font-size: 17px;
      font-weight: normal;
    }
    .back {
      position: absolute;
      left: 0;
      top: 0;
      width: 42px;
      height: 42px;
      background: url("../assets/arrow-left-white.png") center center no-repeat;
      background-size: 24px;
    }
    .btn {
      position: absolute;
      right: 10px;
      top: 0;
      padding: 0 5px;
      &.unable {
        color: #AAAAAA;
        pointer-events: none;
      }
    }

    &.black {
      color: #fff;
      background: #222222;
    }
    &.white {
      color: #2D2D2D;
      background: #ffffff;
      border-bottom: #D7D7D7 solid 1px;
      .back {
        background: url("../assets/arrow-left.png") center center no-repeat;
        background-size: 24px;
      }
    }
  }
  .main-content {
    flex: 1;
    padding-bottom: 60px;
    overflow-y: auto;
  }
}
</style>

<template>
  <div class="inside-page">
    <div :class="['public-title', className]">
      <span class="back" @click="goback"></span>
      <h3>{{ title }}</h3>
      <span v-if="rightBtn" :class="{'btn': true, 'unable': !btnStatus}" @click="confirmFn">{{ rightBtn }}</span>
    </div>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsidePage',
  props: {
    title: String,
    className: {
      type: String,
      default: 'black'
    },
    rightBtn: {
      type: String
    },
    btnStatus: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    confirmFn () {
      this.$parent.confirmFn()
    }
  }
}
</script>
