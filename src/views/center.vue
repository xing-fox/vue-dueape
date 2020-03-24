<style lang="less" scoped>
  .wrapper {
    font-size: 0;
    line-height: 0;
    min-height: 100vh;
    padding: 0 0 55px 0;
    box-sizing: border-box;
    background: #fafafa;
    .bg {
      width: 100vw;
      height: 157px;
      position: relative;
      background-image: url('../assets/center/bg.jpg');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .title {  
        height: 22px;
        padding: 25px 0 0 0;
        text-align: center;
        position: relative;
        img {
          width: 78px;
          height: 22px;
        }
        .set-up {
          color: #9a9a9a;
          font-size: 15px;
          position: absolute;
          top: 36px;
          right: 15px;
        }
      }
      .content {
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 35px;
        right: 35px;
        bottom: 25px;
        .login {
          color: #fff;
          font-size: 15px;
          line-height: 28px;
          .login-name {
            display: flex;
            align-items: center;
            .arrow-right {
              display: inline-block;
              width: 12px;
              height: 12px;
              margin: 0 0 0 5px;
              background-image:url('../assets/center/right.png');
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }
        }
        .tutor {
          color: #835717;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 28px;
          border-radius: 14px;
          background: linear-gradient(-90deg, rgba(227, 181, 117, 1), rgba(251, 227, 168, 1));
        }
      }
    }
    .main {
      padding: 25px 0;
      .un-login {
        text-align: center;
        .title {
          color: #CEA553;
          font-size: 17px;
          font-weight: bold;
          height: 20px;
        }
        .content {
          color: #666;
          font-size: 14px;
        }
      }
      .login {
        display: flex;
        justify-content: center;
        margin: 0 15px;
        min-height: 40px;
        position: relative;
        &:after {
          content: '';
          width: 1px;
          height: 80%;
          transform: scaleX(.5);
          transform-origin: 0 0;
          background: #adadad;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto auto;
        }
        .item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
            height: 30px;
          }
          .item-right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 0 0 0 8px;
            .right-top {
              color: #CDA34F;
              font-size: 17px;
              font-weight: bold;
              line-height: 20px;
            }
            .right-bottom {
              color: #666666;
              font-size: 12px;
              height: 20px;
              display: flex;
              align-items: center;
              i {
                display: inline-block;
                width: 8px;
                height: 8px;
                background-image: url('../assets/center/right-1.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
              }
            }
          }
        }
      }
    }
    .list {
      margin: 0 15px;
      border-radius: 4px;
      border: 1px solid rgba(245, 234, 218, 1);
      background: rgba(253, 250, 244, 1);
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 28px 0;
        span {
          color: #666;
          font-size: 18px;
        }
        img {
          width: 18px;
          height: 18px;
        }
        span {
          margin: 0 10px 0 6px;
        }
        i {
          width: 10px;
          height: 10px;
          background-image: url('../assets/arr-right.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>

<template>
  <div class="wrapper">
    <div class="bg">
      <div class="title">
        <img src="../assets/center/title.png">
        <span class="set-up">设置</span>
      </div>
      <div class="content">
        <div class="login" @click="CHANGELOGIN(true)">
          <div v-if="!userInfo">登录 \ 注册</div>
          <div class="login-name" v-else>
            <span>{{ userInfo.user_login }}</span>
            <i class="arrow-right"></i>
          </div>
        </div>
        <div class="tutor">
          <span>申请tutor</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="un-login" v-if="!userInfo">
        <div class="title">
          <span>立即登录</span>
        </div>
        <div class="content">
          <span>未来的日子在这里成就更好的自己</span>
        </div>  
      </div>
      <div class="login" v-else>
        <div class="item">
          <img src="../assets/center/due.png">
          <div class="item-right">
            <div class="right-top">{{ userInfo.money || 0 }}</div>
            <div class="right-bottom">
              <span>Due币</span>
              <i></i>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/center/coupon.png">
          <div class="item-right">
            <div class="right-top">{{ userInfo.couponNum || 0 }}</div>
            <div class="right-bottom">
              <span>优惠券</span>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in ListData" :key="index">
        <img :src="item.icon">
        <span>{{ item.name }}</span>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Center',
  data () {
    return {
      ListData: [
        {
          icon: require('../assets/center/3.png'),
          name: '我的订单'
        }, {
          icon: require('../assets/center/4.png'),
          name: '邀请好友'
        }, {
          icon: require('../assets/center/6.png'),
          name: '在线客服'
        }, {
          icon: require('../assets/center/7.png'),
          name: '意见反馈'
        }
      ]
    }
  },
  computed: mapState([
    'userInfo'
  ]),
  methods: {
    /**
     * 登录
     */
    ...mapMutations([
      'CHANGELOGIN'
    ])
  },
  mounted () {}
}
</script>
