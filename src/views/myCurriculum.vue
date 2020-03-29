<style lang="less">
.mycurriculum {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .van-tabs {
    flex: 1;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background: #222222;
    .van-tab {
      line-height: 1rem;
      background: #222222;
    }
    .van-tabs__nav {
      background: #222222;
    }
    .van-tabs__wrap {
      width: 60%;
      margin: 0 auto;
    }
    .van-tabs__wrap--scrollable .van-tab {
      flex: auto !important;
    }
    .van-tabs__line {
      width: 16px !important;
      bottom: 0.5rem;
      height: 0.06rem;
      background: linear-gradient(
        -90deg,
        rgba(223, 181, 117, 1) 0%,
        rgba(248, 228, 197, 1) 100%
      );
    }
    .van-tab__text {
      padding-top: 4px;
      display: inline-block;
      background: #222222;
      color: #dfb575;
      transition: transform 0.3s ease-in-out;
    }
    .van-tab--active .van-tab__text {
      transform: scale(1.28);
      background-color: #222;
      background-image: linear-gradient(
        -90deg,
        rgba(223, 181, 117, 1) 0%,
        rgba(248, 228, 197, 1) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .van-tabs__content {
      flex: 1;
      background: #FAFAFA;
      .van-tab__pane {
        height: 100%;
        overflow-y: auto;
      }
    }
  }
  .class-list {
    padding: 15px 15px 0;
    .title {
      font-size: 18px;
      line-height: 18px;
      color: #2d2d2d;
      padding: 15px 0;
    }
    .class-box {
      position: relative;
      border: #f5eada solid 1px;
      border-radius: 4px;
      margin-bottom: 15px;
      &.active {
        background: #FEF8EF;
        border:#F9DFB5 solid 1px;
      }
      .today {
        position: absolute;
        right: 0;
        top: 0;
        display:block;
        padding: 0 7px;
        height:17px;
        line-height: 18px;
        font-size: 11px;
        font-style: normal;
        color:#fff;
        background:linear-gradient(90deg,rgba(255,92,0,1),rgba(255,129,0,1));
        border-radius: 0 4px 0 17px;
      }
      .name {
        padding: 20px 20px 6px;
        font-size: 17px;
        color: #222;
        line-height: 22px;
        margin: 0;
        font-weight: bold;
        i {
          display: inline-block;
          vertical-align: top;
          margin-right: 7px;
          margin-top: 3px;
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
      .des {
        font-size: 13px;
        color: #666;
        padding: 0 20px 10px;
        line-height: 22px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        border-top: #efefef solid 1px;
        padding: 10px 20px;
        align-items: center;
        line-height: 32px;
        span {
          font-size: 12px;
          color: #909090;
          padding-right: 5px;
        }
        .public-button {
          width: 90px;
          height: 32px;
          font-size:14px; 
          font-weight: bold;
          line-height: 32px;
          border-radius: 16px;
        }
      }
    }
    .open-class {
      .class-box {
        padding-top: 10px;
        background: linear-gradient(-90deg, #fff5e3 0%, #fffbf3 100%);
        .code {
          height: 24px;
          span {
            display: inline-block;
            vertical-align: top;
            padding: 0 8px;
            line-height: 24px;
            height: 24px;
            font-size: 15px;
            color: #7e592a;
            font-weight: bold;
            border-radius: 0 12px 12px 0;
            background: linear-gradient(
              -90deg,
              rgba(248, 231, 200, 1),
              rgba(215, 183, 130, 1)
            );
          }
        }
        .name {
          padding-top: 10px;
        }
        .des {
          padding-bottom: 3px;
        }
        .info {
          padding: 5px 20px 15px;
          border: none;
          .user {
            display: flex;
            align-items: center;
            font-size: 13px;
            color: #666;
            img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              overflow: hidden;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .open-more {
      text-align: center;
      font-size: 14px;
      color: #666;
      span {
        padding-right: 15px;
        background: url("../assets/arr-right.png") right center no-repeat;
        background-size: 10px;
      }
    }
  }
}
</style>

<template>
  <div class="mycurriculum">
    <van-tabs
      v-model="active"
      animated
      swipeable
      :border="false"
      title-active-color="#DFB575"
      title-inactive-color="#666666"
    >
      <van-tab v-for="(item, index) in classList" :key="index" :title="item.navTitle">
        <div class="class-list" v-if="item.listData.length">
          <div v-for="(it, inx) in item.listData" :key="'list' + index + inx" :class="{'class-box': true, 'active': it.type === 1}">
            <i v-if="it.type === 1" class="today">今日课程</i>
            <div class="name">{{ it.title }}</div>
            <div class="des">{{ it.time }}</div>
            <div v-if="it.nextTime" class="info"><span>{{ it.nextTime }}</span></div>
            <div v-else class="info">
              <span>正在上课中...</span>
              <div class="public-button">进入教室</div>
            </div>
          </div>
        </div>
        <div v-else class="no-data">
          <img src="../assets/nodata.png">
          <p>暂无课程，快去选课吧</p>
          <div class="public-button">立即充值</div>
        </div>
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
      show: false,
      classList: [
        {
          navTitle: "进行中",
          listData: []
        },
        {
          navTitle: "已结束",
          listData: [
            {
              type: 1,
              title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
              time: "10月12日 15:30",
              nextTime: ""
            },
            {
              type: 2,
              title: "MATH1081- 期末火箭班，教你拿高分的 秘诀",
              time: "11月5日 13:00",
              nextTime: "下一次课·11月5日 周五 13:00-14:30"
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
};
</script>
