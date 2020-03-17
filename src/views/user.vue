<style lang="less">
.user-set {
  padding: 0 15px;
  .explain {
    padding: 24px 0 0;
    font-size: 17px;
    line-height: 22px;
    color:#222;
  }
  .form-list {
    padding-top: 6px;
    .form-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom:1px solid #D7D7D7;
      &.focus {
        border-color: rgba(214,145,14,1);
      }
      .country-code {
        font-size: 16px;
        color: #222222;
        display: block;
        width: 45px;
        box-sizing: border-box;
        margin-right: 12px;
        background: url("../assets/arr-down.png") right center no-repeat;
        background-size: 7px;
      }
      input {
        flex: 1;
        color: #CDA34F;
        font-size: 18px;
      }
      .verify-code {
        span {
          display: block;
          padding: 0 12px;
          color: #CDA34F;
          font-size: 12px;
          line-height: 35px;
          border:1px solid rgba(191,160,101, .5);
          border-radius: 4px;
          &.unable {
            color: #CACACA;
            border-color: rgba(202,202,202, .5);
            pointer-events: none;
          }
        }
      }
    }

  }
}
</style>

<template>
  <inside-page title="账号安全" className="white" rightBtn="保存" :btnStatus="btnStatus">
    <div class="user-set">
      <p class="explain">当前手机号：(+86) 15063383064</p>
      <p class="explain">请填写新手机号与验证码，下次登录请使用新 手机号</p>
      <div class="form-list">
        <div class="form-item">
          <span class="country-code" @click="show = true">{{ countryCode }}</span>
          <input v-code type="tel" v-model="mobile" placeholder="请输入新手机号" />
        </div>
        <div class="form-item">
          <input v-code type="tel" v-model="code" placeholder="请输入验证码" />
          <div class="verify-code">
            <span :class="{'unable': !btnStatus}" v-if="setCutDownStatus" @click="codeVerifyFunc">获取验证码</span>
            <span class="unable" v-else>{{ setCutDown }}s</span>
          </div>
        </div>
      </div>
    </div>
    
    <van-action-sheet v-model="show" :actions="actions" :close-on-click-action="true" @select="onSelect" cancel-text="取消"/>
  </inside-page>
</template>

<script>
import { ActionSheet } from 'vant';
export default {
  components: {
    [ActionSheet.name]: ActionSheet
  },
  data() {
    return {
      show: false,
      countryCode: '+86',
      actions: [
        { name: '中国 +86', value: '+86' },
        { name: '美国 +1' , value: '+1'},
        { name: '澳大利亚 +61', value: '+61' },
        { name: '英国 +44', value: '+44' },
        { name: '加拿大 +1', value: '+1' }
      ],
      mobile: '',
      code: '',
      setInterval: '', // 验证码定时器
      setCutDown: 60, // 倒计时时间
      setCutDownStatus: true // 定时器状态
    }
  },
  directives: {
    // 输入框获取焦点以及失去焦点时value值得变化以及父元素样式的变化
    'code': {
      inserted: function (el) {
        let parent = el.parentNode
        el.onfocus = function () {
          parent.className = 'form-item focus'
        }
        el.onblur = function () {
          parent.className = 'form-item'
        }
      }
    }
  },
  computed: {
    btnStatus () {
      if (this.mobile && !isNaN(this.mobile) && this.mobile.length === 11) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onSelect(item) {
      this.countryCode = item.value
      this.show = false
    },
    // 获取验证码
    codeVerifyFunc () {
      console.log("获取验证码")
      this.codeVerifyStatus()
    },
    codeVerifyStatus () {
      this.setCutDownStatus = false
      this.setInterval = setInterval(() => {
        this.setCutDown--
        if (this.setCutDown === 0) {
          clearInterval(this.setInterval)
          this.setCutDownStatus = true
          this.setCutDown = 60
        }
      }, 1000)
    },
    // 确认保存
    confirmFn () {
    }
  }
}
</script>
