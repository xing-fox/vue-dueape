<template>
  <div class="curriculum">
    <div class="top-box">
      <div class="school"></div>
      <div class="search"></div>
    </div>
    <van-tabs v-model="active" animated swipeable :border="false" color="#DFB575" title-active-color="#DFB575" title-inactive-color="#666666">
      <van-tab v-for="(item, index) in classList" :key="index" :title="item.navTitle">
        <div class="class-list">
          <div class="class-box" v-for="(it, inx) in item.listData" :key="'list' + index + inx">
            <div class="name"><i class="hot" v-if="it.type === 1"></i><i class="offline" v-if="it.type === 2"></i>{{ it.title }}</div>
            <div class="time">{{ it.time }}</div>
            <div class="info">
              <span>{{ it.num }}人报名</span>
              <p class="price"><span>{{ it.originalPrice }}</span>{{ it.price }}</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Sticky, Tab, Tabs } from 'vant'

export default {
  components: {
    [Sticky.name]: Sticky,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },

  data() {
    return {
      active: 0,
      classList: [
        {
          navTitle: "精选",
          listData: [{
            type: 0,
            title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
            time: "10月12日 15:30",
            num: 21,
            price: "100",
            originalPrice: "140"
          }]
        }, {
          navTitle: "Assignment",
          listData: [{
            type: 1,
            title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
            time: "10月12日 15:30",
            num: 21,
            price: "100",
            originalPrice: "140"
          }, {
            type: 2,
            title: "MATH1081- 期末火箭班，教你拿高分的 秘诀",
            time: "11月5日 13:00",
            num: 3,
            price: "100",
            originalPrice: "140"
          }]
        }, {
          navTitle: "期中",
          listData: [{
            type: 0,
            title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
            time: "10月12日 15:30",
            num: 21,
            price: "100",
            originalPrice: "140"
          }]
        }, {
          navTitle: "期末",
          listData: [{
            type: 2,
            title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
            time: "10月12日 15:30",
            num: 21,
            price: "100",
            originalPrice: "140"
          }]
        }, {
          navTitle: "每周小课堂",
          listData: [{
            type: 1,
            title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
            time: "10月12日 15:30",
            num: 21,
            price: "100",
            originalPrice: "140"
          }]
        }
      ]
    }
  },
  methods: {
  }
};
</script>

<style lang="less">
.curriculum {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .van-tabs {
    flex: 1;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    overflow:auto;
    .van-tabs__content {
      flex: 1;
      .van-tab__pane {
        height:100%;
        overflow-y: auto;
      }
    }
    .class-list {
      padding: 15px 15px 0;
      .class-box {
        border:#F5EADA solid 1px;
        border-radius: 4px;
        margin-bottom: 15px;
        .name {
          padding:20px 20px 10px;
          font-size: 17px;
          color: #222;
          line-height: 22px;
          margin: 0;
          font-weight: bold;
          i {
            display: inline-block;
            vertical-align: middle;
            margin-right: 7px;
          }
          .hot {
            width: 14px;
            height: 14px;
            background: url("../assets/icon2.png") no-repeat;
            background-size: 100% 100%;
          }
          .offline {
            width: 46px;
            height: 16px;
            background: url("../assets/icon3.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .time {
          font-size: 13px;
          color:#666;
          padding: 0 20px 10px;
          line-height:22px;
        }
        .info {
          display: flex;
          justify-content: space-between;
          border-top:#EFEFEF solid 1px;
          padding: 15px 20px;
          line-height: 22px;
          p {
            font-size: 15px;
            color:#CDA34F;
            font-weight: bold;
            span {
              text-decoration: line-through;
            }
          }
          span {
            font-size: 12px;
            color:#909090;
            padding-right: 5px;
          }
        }
      }
    }
  }
  .top-box {
    display: flex;
    width: 100%;
    height: 22px;
    padding-top: 15px;
    background: #fff;
  }
}
</style>
