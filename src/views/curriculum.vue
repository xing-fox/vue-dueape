<style lang="less">
.curriculum {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .top-box {
    display: flex;
    height: 24px;
    line-height: 22px;
    padding: 15px 16px 0;
    background: #222222;
    justify-content: space-between;
    .school {
      flex:1;
      font-size:14px;
      color:#999;
      overflow:hidden;
      padding-bottom: 2px;
      span {
        max-width:86%;
        text-overflow: ellipsis;
        overflow:hidden;
        white-space: nowrap;
        display:inline-block;
        background: url("../assets/arr-down.png") right center no-repeat;
        padding-right: 16px;
        background-size: 12px;
      }
    }
    .search {
      width: 24px;
      height: 24px;
      background: url("../assets/search.png") center no-repeat;
      background-size: 20px 20px;
    }
  }
  .van-tabs {
    flex: 1;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    overflow:auto;
    background:#222222;
    .van-tab {
      line-height: 1rem;
      background:#222222;
    }
    .van-tabs__nav {
      background:#222222;
    }
    .van-tabs__wrap--scrollable .van-tab {
      flex: auto !important;
    }
    .van-tabs__line {
      width: 16px !important;
      bottom: 0.6rem;
      height: 0.04rem;
      background:linear-gradient(-90deg,rgba(223,181,117,1) 0%,rgba(248,228,197,1) 100%);
    }
    .van-tab__text {
      display:inline-block;
      color: #dfb575;
      transition: transform .3s ease-in-out;
    }
    .van-tab--active .van-tab__text {
      transform: scale(1.15);
      background-image: linear-gradient(-90deg,rgba(223,181,117,1) 0%,rgba(248,228,197,1) 100%); 
      -webkit-background-clip:text; 
      -webkit-text-fill-color:transparent;
    }
    .van-tabs__content {
      flex: 1;
      background: #fff;
      .van-tab__pane {
        height:100%;
        overflow-y: auto;
      }
    }
  }
  .class-list {
    padding: 15px 15px 0;
    .title {
      font-size: 18px;
      line-height: 18px;
      color: #2D2D2D;
      padding: 15px 0;
    }
    .class-box {
      border:#F5EADA solid 1px;
      border-radius: 4px;
      margin-bottom: 15px;
      .name {
        padding:20px 20px 6px;
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
    .open-class {
      .class-box {
        padding-top: 10px;
        background:linear-gradient(-90deg,#FFF5E3 0%,#FFFBF3 100%);
        .code {
          height:24px;
          span {
            display: inline-block;
            vertical-align: top;
            padding: 0 8px;
            line-height: 24px;
            height: 24px;
            font-size: 15px;
            color: #7E592A;
            font-weight: bold;
            border-radius: 0 12px 12px 0;
            background:linear-gradient(-90deg,rgba(248,231,200,1),rgba(215,183,130,1));
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
            font-size:13px;
            color:#666;
            img {
              width: 32px;
              height: 32px;
              border-radius:50%;
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
      color:#666;
      span {
        padding-right: 15px;
        background: url("../assets/arr-right.png") right center no-repeat;
        background-size: 10px;
      }
    }
  }
  .home {
    .banner {
      width: 100%;
      height: 135px;
      background: url("../assets/banner-bg.png") no-repeat;
      background-size: 100%;
      color: #fff;
      .van-swipe-item {
        background-color: #39a9ed;
        img {
          display:block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .advert {
      padding: 15px 15px 0;
      display: flex;
      justify-content: space-between;
      .item {
        width: 145px;
        padding-left: 22px;
        height: 60px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        background:rgba(245,245,245,1);
        font-size: 11px;
        color: #909090;
        line-height: 16px;
        p {
          font-size: 13px;
          color:#222222;
        }
        img {
          width: 26px;
          height: 26px;
          margin-right: 8px;
        }
      }
    }
  }
  .school-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color:#F7F6F6;
    overflow: hidden;
    .banner {
      width: 100%;
      height: 130px;
      position: relative;
      margin-bottom: 5px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        display: block;
        width: 22px;
        height: 22px;
        left: 18px;
        top: 15px;
        background: url("../assets/close.png") center no-repeat;
        background-size: 100%;
      }
    }
    ul {
      flex: 1;
      padding: 0 15px;
      overflow-y: auto;
      background-color: #fff;
      li {
        padding: 10px 0;
        font-size: 14px;
        color:#343434;
        line-height: 22px;
        border-bottom:#EDEDED solid 1px;
      }
    }
  }
}
</style>

<template>
  <div class="curriculum">
    <div class="top-box">
      <div class="school" @click="show = true"><span>{{ schoolName }}</span></div>
      <div class="search" @click="goSearch"></div>
    </div>
    <van-tabs v-model="active" animated swipeable :border="false" title-active-color="#DFB575" title-inactive-color="#666666">
      <van-tab v-for="(item, index) in classList" :key="index" :title="item.navTitle">
        <!-- 精选 -->
        <div v-if="index === 0" class="home">
          <van-swipe class="banner" :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for="(image, index) in images" :key="'banner' + index">
              <img :src="image" />
            </van-swipe-item>
          </van-swipe>

          <div class="advert">
            <div class="item">
              <img src="../assets/icon1.png">
              <div><p>了解DueApe</p>给您VIP式的服务</div>
            </div>
            <div class="item">
              <img src="../assets/icon4.png">
              <div><p>选课咨询</p>为您量身定制课程</div>
            </div>
          </div>

          <div class="class-list">
            <div class="open-class">
              <div class="title">公开课</div>
              <div class="class-box">
                <div class="code"><span>FIT9133</span></div>
                <div class="name">5大科目指数独家分析</div>
                <div class="des">Python编程和算法的基础课程讲解</div>
                <div class="des">11月22日18:00开课 </div>
                <div class="info">
                  <div class="user"><img src="../assets/icon2.png">Tony</div>
                  <p>免费</p>
                </div>              
              </div>
              <div class="class-box">
                <div class="code"><span>ECON1203</span></div>
                <div class="name">考试技巧分享，免费领取独家资料，分享 学习心得，建立知识框架</div>
                <div class="des">主讲人UNSW在读，均分Distinction</div>
                <div class="des">查看精彩回放</div>
                <div class="info">
                  <div class="user"><img src="../assets/icon2.png">Sunny</div>
                  <p>199</p>
                </div>              
              </div>
              <div class="open-more"><span>查看更多公开课</span></div>
            </div>
            <div class="title">好课推荐</div>
            <div class="class-box" v-for="(it, inx) in item.listData" :key="'list' + index + inx">
              <div class="name"><i class="hot" v-if="it.type === 1"></i><i class="offline" v-if="it.type === 2"></i>{{ it.title }}</div>
              <div class="des">{{ it.time }}</div>
              <div class="info">
                <span>{{ it.num }}人报名</span>
                <p class="price"><span>{{ it.originalPrice }}</span>{{ it.price }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 作业班 期中班 期末班 每周小课堂 -->
        <div v-else class="class-list">
          <div class="class-box" v-for="(it, inx) in item.listData" :key="'list' + index + inx">
            <div class="name"><i class="hot" v-if="it.type === 1"></i><i class="offline" v-if="it.type === 2"></i>{{ it.title }}</div>
            <div class="des">{{ it.time }}</div>
            <div class="info">
              <span>{{ it.num }}人报名</span>
              <p class="price"><span>{{ it.originalPrice }}</span>{{ it.price }}</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }" :round="true">
      <div class="school-list">
        <div class="banner">
          <span class="close" @click="show = false"></span>
          <img src="../assets/school-bg.png">
        </div>
        <ul>
          <li v-for="(item, index) in schoolList" :key="'school' + index" @click="selectSchool(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem, Popup } from 'vant'

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Popup.name]: Popup
  },
  data() {
    return {
      active: 0,
      show: false,
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
          navTitle: "作业班",
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
          navTitle: "期中班",
          listData: [{
            type: 0,
            title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
            time: "10月12日 15:30",
            num: 21,
            price: "100",
            originalPrice: "140"
          }]
        }, {
          navTitle: "期末班",
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
      ],
      images: [
        require('../assets/banner/1.jpg'),
        require('../assets/banner/2.jpg'),
        require('../assets/banner/3.jpg'),
        require('../assets/banner/4.jpg')
      ],
      schoolName: '加州大学圣地亚哥分校（UCSD）',
      schoolList: [
        '宾夕法尼亚州立大学（PSU）',
        '波士顿大学（BU）',
        '宾夕法尼亚州立大学（PSU）',
        '波士顿大学圣塔巴巴拉分校（UCSB）',
        '宾夕法尼亚州立大学（PSU）',
        '加州大学圣地亚哥分校（UCSD）',
        '波士顿大学（BU）',
        '宾夕法尼亚州立大学（PSU）',
        '波士顿大学圣塔巴巴拉分校（UCSB）',
        '宾夕法尼亚州立大学（PSU）',
        '加州大学圣地亚哥分校（UCSD）',
        '波士顿大学（BU）',
        '宾夕法尼亚州立大学（PSU）',
        '波士顿大学圣塔巴巴拉分校（UCSB）',
        '宾夕法尼亚州立大学（PSU）',
        '加州大学圣地亚哥分校（UCSD）'
      ],
    }
  },
  methods: {
    selectSchool (name) {
      this.schoolName = name
      this.show = false
    },
    goSearch () {
      this.$router.push({
        path: '/search'
      })
    }
  }
}
</script>
