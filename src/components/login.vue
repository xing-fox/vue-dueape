<template>
  <div class="wrapper">
    <img class="header" src="../assets/login.png" />
    <div class="content">
      <div class="title">
        <span>报名前请完善您的个人意料</span>
      </div>
      <div class="main">
        <div class="main-box van-hairline--bottom arrow">
          <div class="name">学校</div>
          <input readonly type="text" placeholder="请选择院校" @click="SchoolShow = true" />
        </div>
        <div class="main-box van-hairline--bottom">
          <div class="name">姓名</div>
          <input type="text" placeholder="请填写真实姓名" />
        </div>
        <div class="main-box van-hairline--bottom">
          <div class="name" @click="AreaShow = true">
            {{AreaCodeIndex}}
            <i class="arrow"></i>
          </div>
          <input type="text" placeholder="请输入手机号" />
        </div>
        <div class="main-box van-hairline--bottom">
          <div class="name">验证码</div>
          <input type="text" placeholder="请输入验证码" />
          <div class="get-code">
            <span>获取验证码</span>
          </div>
        </div>
        <div class="submit">
          <span>确定</span>
        </div>
      </div>
    </div>
    <van-popup v-model="AreaShow" position="bottom" :round="true">
      <div class="box">
        <div class="title van-hairline--bottom">请选择区号</div>
        <ul>
          <li
            class="van-hairline--bottom"
            v-for="(item, index) in AreaCode"
            :key="index"
            @click="ChoiseArea(index)"
          >{{ item.city }} {{ item.code }}</li>
        </ul>
      </div>
    </van-popup>
    <van-popup v-model="SchoolShow" position="bottom" :round="true">
      <div class="box">
        <div class="title van-hairline--bottom">请选择区号</div>
        <ul>
          <li
            class="van-hairline--bottom"
            v-for="(item, index) in AreaCode"
            :key="index"
            @click="ChoiseSchool(index)"
          >{{ item.city }} {{ item.code }}</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant'
import { mapMutations } from 'vuex'
import { collegeIndex } from '@/axios/api'
export default {
  name: "Login",
  data () {
    return {
      AreaShow: false,
      AreaCodeIndex: "+86",
      AreaCode: [
        {
          city: "中国",
          code: "+86"
        },
        {
          city: "美国",
          code: "+1"
        },
        {
          city: "澳大利亚",
          code: "+61"
        },
        {
          city: "英国",
          code: "+44"
        },
        {
          city: "加拿大",
          code: "+1"
        }
      ],
      SchoolShow: false,
      SchoolData: []
    }
  },
  components: {
    [Popup.name]: Popup
  },
  methods: {
    /**
     * 登录
     */
    ...mapMutations([
      'CHANGELOGIN'
    ]),
    /**
     * 选择区号
     */
    ChoiseArea (eq) {
      [this.AreaShow, this.AreaCodeIndex] = [false, this.AreaCode[eq].code]
    }
    /**
     * 选择学校
     */
    // ChoiseSchool (eq) {},
  },
  mounted () {
    collegeIndex({}).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  font-size: 0;
  width: 100vw;
  min-height: 100vh;
  background: #fcfcfc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .header {
    width: 100%;
  }
  .content {
    text-align: center;
    position: absolute;
    top: 0.9rem;
    left: 0;
    right: 0;
    .title {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
    .main {
      padding: 8px 20px;
      margin: 38px 15px 0;
      background: #fff;
      border-radius: 4px;
      border: 1px solid rgba(245, 234, 218, 1);
      box-sizing: border-box;
      .main-box {
        display: flex;
        align-items: center;
        font-size: 15px;
        height: 65px;
        line-height: 44px;
        &.arrow {
          position: relative;
          &:before {
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            background-image: url("../assets/down.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        .name {
          color: #222;
          font-weight: 400;
          display: flex;
          align-items: center;
          width: 70px;
          height: 44px;
          text-align: left;
          .arrow {
            display: inline-block;
            width: 10px;
            height: 10px;
            margin: 0 0 0 5px;
            background-image: url("../assets/down.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
        input {
          flex: 1;
          width: 0;
          height: 44px;
          border: none;
          outline: none;
          -webkit-appearance: none;
        }
        input::input-placeholder {
          font-size: 12px;
        }
        input::-webkit-input-placeholder {
          font-size: 12px;
        }
        .get-code {
          color: #cda34f;
          height: 44px;
        }
      }
      .submit {
        color: #5e3b20;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 170px;
        height: 40px;
        margin: 35px auto;
        border-radius: 20px;
        background: linear-gradient(
          90deg,
          rgba(241, 209, 157, 1),
          rgba(232, 187, 120, 1)
        );
      }
    }
  }
  .box {
    margin: 0 15px;
    .title {
      color: #222;
      font-size: 15px;
      font-weight: bold;
      height: 65px;
      line-height: 65px;
    }
    ul {
      li {
        color: #393939;
        font-size: 14px;
        height: 46px;
        line-height: 46px;
        &:nth-last-child(1):after {
          content: none;
        }
      }
    }
  }
}
</style>
