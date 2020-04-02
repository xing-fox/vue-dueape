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
      flex: 1;
      font-size: 14px;
      color: #999;
      overflow: hidden;
      padding-bottom: 2px;
      span {
        max-width: 86%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
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
    overflow: auto;
    background: #222222;
    .van-tabs__wrap {
      padding: 0 8px;
    }
    .van-tab {
      flex: none;
      padding: 0 10px;
      line-height: 1rem;
      background: #222222;
    }
    .van-tabs__nav {
      background: #222222;
    }
    .van-tabs__wrap--scrollable .van-tab {
      flex: auto !important;
    }
    .van-tabs__line {
      width: 16px !important;
      bottom: 0.6rem;
      height: 0.04rem;
      background: linear-gradient(
        -90deg,
        rgba(223, 181, 117, 1) 0%,
        rgba(248, 228, 197, 1) 100%
      );
    }
    .van-tab__text {
      display: inline-block;
      color: #dfb575;
      transition: transform 0.3s ease-in-out;
    }
    .van-tab--active .van-tab__text {
      transform: scale(1.31);
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
      background: #fff;
      .van-tab__pane {
        height: 100%;
        overflow-y: auto;
        .van-pull-refresh, .van-pull-refresh__track, .home, .class-list{
          height: 100%;
          // overflow-y: auto;
        }
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
      border: #f5eada solid 1px;
      border-radius: 4px;
      margin-bottom: 15px;
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
        padding: 15px 20px;
        line-height: 22px;
        p {
          font-size: 15px;
          color: #cda34f;
          font-weight: bold;
          span {
            text-decoration: line-through;
          }
        }
        span {
          font-size: 12px;
          color: #909090;
          padding-right: 5px;
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
          display: block;
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
        background: rgba(245, 245, 245, 1);
        font-size: 11px;
        color: #909090;
        line-height: 16px;
        p {
          font-size: 13px;
          color: #222222;
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
    background-color: #f7f6f6;
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
        color: #343434;
        line-height: 22px;
        border-bottom: #ededed solid 1px;
      }
    }
  }
}
</style>

<template>
  <div class="curriculum">
    <div class="top-box">
      <div class="school" @click="show = true">
        <span>{{ collegeData | schoolName }}</span>
      </div>
      <div class="search" @click="goSearch"></div>
    </div>
    <van-tabs
      v-if="listStatue"
      v-model="active"
      animated
      swipeable
      scrollspy
      :border="false"
      title-active-color="#DFB575"
      title-inactive-color="#666666"
      @change="onChangefn"
    >
      <van-tab v-for="(item, index) in classList" :key="index" :title="item.navTitle">
        <van-pull-refresh v-model="item.isRefresh" @refresh="onRefresh(index)">
          <!-- 精选 -->
          <div v-if="index === 0" class="home">
            <van-swipe v-if="homeData.slideshows && homeData.slideshows.length" class="banner" :autoplay="3000" :show-indicators="false">
              <van-swipe-item v-for="(image, index) in homeData.slideshows" :key="'banner' + index">
                <img :src="image.imageUrl" />
              </van-swipe-item>
            </van-swipe>

            <div class="advert">
              <div class="item">
                <img src="../assets/icon1.png" />
                <div>
                  <p>了解DueApe</p>给您VIP式的服务
                </div>
              </div>
              <div class="item">
                <img src="../assets/icon4.png" />
                <div>
                  <p>选课咨询</p>为您量身定制课程
                </div>
              </div>
            </div>

            <div class="class-list">
              <div class="open-class" v-if="homeData.pulicCourses && homeData.pulicCourses.length">
                <div class="title">公开课</div>
                <div class="class-box" v-for="(it, inx) in homeData.pulicCourses" :key="'pulicCourses' + inx">
                  <div class="code">
                    <span>{{ it.courseNo }}</span>
                  </div>
                  <div class="name">{{ it.courseTitle }}</div>
                  <div class="des">{{ it.recommendReason }}</div>
                  <div class="des">{{ it | timeFilter }}</div>
                  <div class="info">
                    <div class="user">
                      <img :src="it.tutorPhotoUrl" />{{ it.tutorName }}
                    </div>
                    <p>{{ it.currentPrice !== 0 ? it.currentPriceStr : '免费' }}</p>
                  </div>
                </div>
                <div class="open-more">
                  <span>查看更多公开课</span>
                </div>
              </div>

              <template v-if="homeData.selectionCourses && homeData.selectionCourses.length">
                <div class="title">好课推荐</div>
                <div class="class-box" v-for="(it, inx) in homeData.selectionCourses" :key="'selectionCourses' + inx">
                  <div class="name">
                    <!-- 火爆 -->
                    <i class="hot" v-if="it.hotFlag === 1"></i>
                    <!-- 线下课图标 -->
                    <i class="offline" v-if="it.offlineFlag === 1"></i>
                    {{ it.courseTitle }}
                  </div>
                  <div class="des">{{ it | timeFilter }}</div>
                  <div class="info">
                    <span>{{ it.applyNum }}人报名</span>
                    <p class="price">
                      <span>{{ it.originalPriceStr }}</span>
                      {{ it.currentPrice !== 0 ? it.currentPriceStr : '免费' }}
                    </p>
                  </div>
                </div>
              </template>

              <template v-if="homeData.wholeCourses && homeData.wholeCourses.length">
                <div class="title">全部课程</div>
                <div class="class-box" v-for="(it, inx) in homeData.wholeCourses" :key="'selectionCourses' + inx">
                  <div class="name">
                    <!-- 火爆 -->
                    <i class="hot" v-if="it.hotFlag === 1"></i>
                    <!-- 线下课图标 -->
                    <i class="offline" v-if="it.offlineFlag === 1"></i>
                    {{ it.courseTitle }}
                  </div>
                  <div class="des">{{ it | timeFilter }}</div>
                  <div class="info">
                    <span>{{ it.applyNum }}人报名</span>
                    <p class="price">
                      <span>{{ it.originalPriceStr }}</span>
                      {{ it.currentPrice !== 0 ? it.currentPriceStr : '免费' }}
                    </p>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <!-- 作业班 期中班 期末班 每周小课堂 -->
          <div v-else class="class-list">
            <van-list
              v-model="item.finishedStatue"
              :finished="item.finished"
              finished-text=""
              @load="onLoadFn(index)"
            >
              <div class="class-box" v-for="(it, inx) in item.listData" :key="'list' + index + inx">
                <div class="name">
                  <!-- 火爆 -->
                  <i class="hot" v-if="it.hotFlag === 1"></i>
                  <!-- 线下课图标 -->
                  <i class="offline" v-if="it.offlineFlag === 1"></i>
                  {{ it.courseTitle }}
                </div>
                <div class="des">{{ it | timeFilter }}</div>
                <div class="info">
                  <span>{{ it.applyNum }}人报名</span>
                  <p class="price">
                    <span>{{ it.originalPriceStr }}</span>
                    {{ it.currentPrice !== 0 ? it.currentPriceStr : '免费' }}
                  </p>
                </div>
              </div>
            </van-list>
        </div>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }" :round="true">
      <div class="school-list">
        <div class="banner">
          <span class="close" @click="show = false"></span>
          <img src="../assets/school-bg.png" />
        </div>
        <ul>
          <li
            v-for="(item, index) in collegeList"
            :key="'school' + index"
            @click="selectSchool(item)"
          >{{ item | schoolName }}</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem, Popup, PullRefresh, List } from 'vant'
import { collegeIndex, topicIndex, slideShowIndex, homeIndex, courseIndex } from '@/axios/api'
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Popup.name]: Popup,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List
  },
  data() {
    return {
      active: 0,
      collegeData: { // 学校信息
        collegeCode: "",
        collegeId: null,
        collegeName: "",
        countryId: null
      },
      collegeList: [], // 学校列表
      show: false, // 学校选择弹框显示状态
      listStatue: false, // 学校列表显示状态
      pageSize: 10,
      classList: [],
      homeData: {},
    }
  },
  filters:{
    schoolName (val) {
      return val.collegeCode ? val.collegeName + "(" + val.collegeCode + ")" : val.collegeName
    },
    timeFilter (val) {
      return val.packageFlag === "1" ? val.coursePeriod + " | 每期" + val.periodHour + "h" : val.courseTime
    }
  },
  methods: {
    // 去搜索
    goSearch() {
      this.$router.push({
        path: "/search",
        query: {
          collegeId: this.collegeData.collegeId
        }
      })
    },
    // 获取学校列表
    getCollegeFn () {
      collegeIndex({order: "desc"}).then(res => {
        if (res.code === '0') {
          this.collegeList = res.data.rowList
        }
      })
    },
    // 选择学校
    selectSchool(item) {
      if (item.collegeId !== this.collegeData.collegeId) {
        this.collegeData = item
        localStorage.setItem('collegeData', JSON.stringify(item))
        this.listStatue = false
        this.updateIndex()
      } else {
        this.show = false
      }
    },
    // 切换学校更新数据
    updateIndex () {
      this.getTopicIndexFn()
    },
    // 获取频道Tab
    getTopicIndexFn () {
      topicIndex({collegeId: this.collegeData.collegeId}).then(res => {
        if (res.code === '0') {
          this.show = false
          this.classList = []
          res.data.map(item => {
            this.classList.push({
              navTitle: item.topicName,
              courseType: item.courseType,
              pageNum: 1,
              isRefresh: false,
              finishedStatue: false,
              finished: false,
              listData: []
            })
          })
          this.getHomeIndexFn()
        }
      })
    },
    // 获取首页数据
    getHomeIndexFn () {
      homeIndex({collegeId: this.collegeData.collegeId}).then(res => {
        if (res.code === '0') {
          this.listStatue = true
          this.homeData = res.data
          this.classList[0].isRefresh = false
        }
      })
    },
    // 获取课程列表
    getCourseIndexFn (index, courseType, pageN) {
      courseIndex({
        collegeId: this.collegeData.collegeId,
        courseType: courseType,
        pageNum: pageN,
        pageSize: this.pageSize
      }).then(res => {
        if (res.code === '0') {
          this.classList[index].listData = res.data.rowList
          this.classList[index].isRefresh = false
          this.classList[index].finishedStatue = false
          if (res.data.pages === 0) this.classList[index].finished = true
        }
      })
    },
    // 下拉刷新 index索引
    onRefresh (index) {
      if (index === 0) {
        this.getHomeIndexFn()
      } else {
        this.getCourseIndexFn(index, this.classList[index].courseType, 0)
      }
    },
    // 导航切换
    onChangefn (item) {
      let listD = this.classList[item]
      if (listD.listData && !listD.listData.length) {
        this.getCourseIndexFn(item, listD.courseType, 0)
      }
    },
    // 翻页加载
    onLoadFn (index) {
      let listD = this.classList[index]
      this.getCourseIndexFn(index, listD.courseType, listD.pageNum++)
    }
  },
  mounted () {
    this.getCollegeFn()
    if (!localStorage.getItem('collegeData')) {
      this.show = true
    } else {
      this.collegeData = JSON.parse(localStorage.getItem('collegeData'))
      this.updateIndex()
    }
  }
};
</script>
