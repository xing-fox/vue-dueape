<style lang="less">
.payment-content {
  padding: 0 15px;
  .title {
    font-size: 18px;
    line-height: 18px;
    color: #2D2D2D;
    padding: 24px 0 22px;
    font-weight: bold;
  }
  .price-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      position: relative;
      width: 109px;
      padding: 10px 0 7px;
      margin-bottom: 8px;
      border: 1px solid rgba(240, 240, 240, 1);
      border-radius: 3px;
      font-size: 13px;
      color: #666666;
      line-height: 22px;
      text-align: center;
      &.active {
        border-color: #E7BB79;
        background: #FFFAF2;
      }
      p {
        color: #222222;
        font-size: 14px;
        padding-bottom: 2px;
      }
      i {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        background: #E1BD83;
        line-height: 15px;
        padding: 0 5px;
        font-size: 11px;
        color:#fff;
        font-style: normal;
        border-radius: 3px 0 3px 0;
      }
    }
  }
  .payment-list {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        width: 21px;
        height: 21px;
        border: #D3D3D3 solid 1px;
        top: 50%;
        right: 10px;
        border-radius: 50%;
        margin-top: -11px;
      }
      &.active:before {
        border-color: #E5C378;
        background: url("../assets/seleted.png") #E5C378 center center no-repeat;
        background-size: 18px;
      }
      img {
        width: 22px;
        padding-right: 10px;
      }
      p {
        flex: 1;
        color: #333333;
        font-size: 14px;
      }
    }
  }
  .explain {
    padding: 10px 0;
    font-size:12px;
    color:#656565;
    line-height: 15px;
    p {
      padding-bottom: 10px;
    }
  }
}
</style>

<template>
  <inside-page title="Due币充值">
    <div class="payment-content">
      <div class="title">充值金额</div>
      <ul class="price-list">
        <li v-for="(item, index) in priceList" :key="index" :class="{'active': active === index}" @click="selectPrice(index)">
          <p>{{ item.price }}Due币</p>
          <span>¥ {{ item.cash }}</span>
          <i v-if="item.discount">{{ item.discount }}折</i>
        </li>
      </ul>
      <div class="title">支付方式</div>
      <ul class="payment-list">
        <li class="active">
          <img src="../assets/icon-wechat.png">
          <p>微信支付</p>
        </li>
      </ul>
      <div class="explain">
        <p>说明</p>
        <p>1.购买的Due币不支持提现、退款或转赠他人。</p>
        <p>2.Due币适用于尚思源旗下所有产品（DueApe、DACareer、DALab）。</p>
      </div>
      <div class="public-button" @click="submit">立即充值</div>
    </div>
  </inside-page>
</template>

<script>
import { Dialog } from 'vant';
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      active: 0,
      priceList: [
        {
          discount: 0,
          price: "1",
          cash: "1"
        }, {
          discount: 0,
          price: "20",
          cash: "20"
        }, {
          discount: 0,
          price: "50",
          cash: "50"
        }, {
          discount: 0,
          price: "100",
          cash: "100"
        }, {
          discount: 0,
          price: "300",
          cash: "300"
        }, {
          discount: 0,
          price: "500",
          cash: "500"
        }, {
          discount: 9,
          price: "1000",
          cash: "900"
        }, {
          discount: 0,
          price: "1500",
          cash: "1500"
        }, {
          discount: 8,
          price: "2000",
          cash: "1600"
        }
      ]
    }
  },
  methods: {
    selectPrice (index) {
      this.active = index
    },
    submit (res) {
      if (!res) {
        Dialog.alert({
          title: '支付成功',
          message: '您已成功完成充值',
          confirmButtonText: '好',
          confirmButtonColor: '#CDA34F'
        }).then(() => {
        });
      } else {
        Dialog.confirm({
          title: '支付尚未完成',
          message: '支付渠道操作失败，请重新支付',
          confirmButtonText: '重新支付',
          confirmButtonColor: '#CDA34F',
          cancelButtonText: '取消',
          cancelButtonColor: '#CDA34F'
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        })
      }
    }
  }
}
</script>