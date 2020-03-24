<template>
  <div
    class="title"
    :class="{
      xtrue: isIosX,
      fixed: isFixed,
      normal: normal
    }"
    :style="{background: Opacity}">
    <i @click="returnBackFunc"></i>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    Opacity: {
      type: String
    },
    isIosX: {
      type: Boolean
    },
    name: {
      type: String
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    normal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    returnBackFunc () {
      this.$JsBridge.GetMethods(bridge => {
        bridge.callHandler('dueWebCallNative',{
          actionType: 0,
          actionTarget: 'ReturnBack',
          data: {}
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  color: #fff;
  font-size: 17px;
  height: 44px;
  line-height: 44px;
  padding: 24px 0 0 0;
  text-align: center;
  position: relative;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  &.normal {
    color: #2d2d2d;
    i {
      background-image: url("../assets/center/back_1.png");
    }
  }
  i {
    display: inline-block;
    width: 44px;
    height: 44px;
    background-image: url("../assets/center/back.png");
    background-size: 45% 45%;
    background-position: center left;
    background-repeat: no-repeat;
    position: absolute;
    left: 12px;
    bottom: 0;
  }
  &.xtrue {
    padding: 44px 0 0 0 !important;
    i {
      top: 44px;
    }
  }
  span {
    font-weight: bold;
  }
}
</style>
