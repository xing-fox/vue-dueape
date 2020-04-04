<template>
  <div
    :class="['wrapper', {xwrapper: isIosX && adStatus}]">
    <common-title
      isFixed
      name="课程详情"
      :isIosX="isIosX"
      :normal="false"
      :Opacity="opacity"
      v-if="adStatus"
    ></common-title>
    <div class="ad" v-if="!adStatus">
      <img src="../assets/icon/logo.jpg">
      <div class="ad-content">
        <div class="content-download">下载DueApp APP</div>
        <span>让自己开启“人生外挂”之旅</span>
      </div>
      <div class="choise-course">
        <span>立即选课</span>
      </div>
    </div>
    <div
      :class="['header',{xheader: isIosX && adStatus}]"
      ref="header">
      <div class="main">
        <div class="m-title">{{ Data.courseTitle }}</div>
        <div class="m-times">{{ Data.courseShowInfo }}</div>
        <div class="m-price">
          <span v-if="Data.currentPrice">
            {{ Data.currentPrice }} Due币
          </span>
          <span v-else>免费</span>
          <span class="m-price-origin" v-if="Data.originalPrice">{{ Data.originalPrice }} Due币</span></div>
        <div class="m-has">{{ Data.applyNum }}人已报名</div>
      </div>
    </div>
    <div class="content">
      <div class="data" v-if="adStatus && Data.isPay == '1'">
        <div class="list" @click="RouterView(0)">课程资料</div>
        <div class="list" @click="RouterView(1)">离线课程</div>
      </div>
      <div class="title">课程大纲</div>
      <div v-for="(item, index) in Data.courseDetails" :key="index" class="item bor-b">
        <div class="i-list">{{ index + 1 }}</div>
        <div class="i-main">
          <div class="m-title">{{ item.detailTitle }}</div>
          <div class="m-time">{{ item.courseTime }} | {{ item.status | courseStatus }}</div>
          <div class="m-list bor-l">
            <div class="list-item">{{ item.coreCourseStr }} 核心课</div>
            <div class="list-item">{{ item.explainCourseStr }} 答疑</div>
          </div>
        </div>
        <div v-if="item.status == 3 && adStatus && Data.isPay == '1'" class="playback" @click="RouterItem(0, item)">看回放 <i></i> </div>
        <div v-if="item.status == 2 && adStatus && Data.isPay == '1'" class="join-course" @click="RouterItem(1, item)">进入教室</div>
      </div>
      <div class="title t-height">老师介绍</div>
      <div class="teacher">
        <div class="t-image">
          <img :src="Data.tutorPhotoUrl | httpFilter">
        </div>
        <div class="t-details">
          <div class="details-name">{{ Data.tutorName }}</div>
          <div class="details-item" v-for="(item, index) in teacherIntro" :key="item">
            <span>·</span>
            <span class="item-intro">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="title t-height">购课须知</div>
      <div class="notice">
        <div class="notice-list">
          <span>1</span>
        </div>
        <div class="notice-main">
          <div class="notice-main-title">课程说明</div>
          <div class="notice-main-intro">
            <span>开课前5分钟教室开放，在“我的课程”页面进入教室。</span>
          </div>
          <div class="notice-main-intro">
            <span>课程直播结束后自动生成回放，可无限次查看回放，并支持离线下载。</span>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-list">
          <span>2</span>
        </div>
        <div class="notice-main">
          <div class="notice-main-title">听课方式</div>
          <div class="notice-main-intro">
            <span>手机端[DueApe]APP，支持直播和回看。</span>
          </div>
          <div class="notice-main-intro">
            <span>电脑端[DueApe]官网，登陆后在“我的课程”页面上课和回看。</span>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-list">
          <span>3</span>
        </div>
        <div class="notice-main">
          <div class="notice-main-title">支付方式</div>
          <div class="notice-main-intro">
            <span>IOS系统里APP仅支持Due币报名。</span>
          </div>
          <div class="notice-main-intro">
            <span>Due币可通过APP内购充值。</span>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-list">
          <span>4</span>
        </div>
        <div class="notice-main">
          <div class="notice-main-title">游客模式</div>
          <div class="notice-main-intro">
            <span>游客模式下，订单等相关信息仅支持在当前设备查看，如需在其他设备也能同步查看，请在设置-账号安全里绑定手机号。</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div v-if="adStatus" :class="['wx', {xfooter: isIosX}]" @click="ShareCourse">
        <i class="share"></i>
        <div>分享课程</div>
      </div>
      <div :class="['share', {xfooter: isIosX}, {shareWx: !adStatus}]" @click="status=true">
        <i class="wx"></i>
        <div>客服微信</div>
      </div>
      <div v-if="adStatus && Data.isPay == '1'" :class="['sign-up', {xfooter: isIosX}]">已报名</div>
      <div v-if="adStatus && Data.isPay == '0'" :class="['app', {xfooter: isIosX}]" @click="signUp">立即报名</div>
    </div>
    <ewm-modal
    v-if="status"
    :dataUrl="Data.serviceId"
    @cancel="status=false"></ewm-modal>
  </div>
</template>

<script>
import {
  courseDetail
} from '@/axios/api'
import EwmModal from "@/components/ewm"
import CommonTitle from "@/components/common-title"
export default {
  name: "courseDetails",
  data () {
    return {
      status: false, // 二维码状态
      adStatus: this.$formValue,
      isIosX: false,
      footStatus: false,
      opacity: 'rgba(41, 44, 50, 0)',
      Data: Object,
      teacherIntro: []
    }
  },
  filters: {
    courseStatus (val) {
      return ['未开始', '正在上课中', '已结束'][val - 1]
    },
    httpFilter (val) {
      if (val) {
        if (val.search("http") !== -1) return val
        return `https://${val}`
      } else {
        return ''
      }
    }
  },
  components: {
    EwmModal,
    CommonTitle
  },
  methods: {
    /**
     * 课程资料，离线课程
     */
    RouterView (val) {
      const Type = [{
        target: 'CourseData',
        data: {
          courseFileAttrList: this.Data.courseFileAttrList
        }
      }, {
        target: 'OffLineCourse',
        data: this.Data
      }]
      this.$JsBridge.GetMethods(bridge => {
        bridge.callHandler('dueWebCallNative',{
          actionType: 1,
          actionTarget: Type[val].target,
          data: Type[val].data
        })
      })
    },
    /**
     * 看回放、进入教室
     */
    RouterItem (val, data) {
      const Type = [{
        target: 'PlayBack',
        data: {
          courseVideoPath: data.courseVideoPath
        }
      }, {
        target: 'JoinRoom',
        data: {
          detailId: data.detailId
        }
      }]
      this.$JsBridge.GetMethods(bridge => {
        bridge.callHandler('dueWebCallNative',{
          actionType: 1,
          actionTarget: Type[val].target,
          data: Type[val].data
        })
      })
    },
    /**
     * 课程分享
     */
    ShareCourse () {
      const self = this
      this.$JsBridge.GetMethods(bridge => {
        bridge.callHandler('dueWebCallNative',{
          actionType: 0,
          actionTarget: 'ShareCourse',
          data: {
            title: self.Data.courseTitle,
            subTitle: self.Data.recommendReason,
            linkUrl: `http://app.dueape.com/courseDetails?id=${self.Data.courseId}&origin=web`,
          }
        })
      })
    },
    /**
     * 立即报名
     */
    signUp () {
      const self = this
      this.$JsBridge.GetMethods(bridge => {
        bridge.callHandler('dueWebCallNative',{
          actionType: 1,
          actionTarget: 'BuyCourse',
          data: self.Data
        })
      })
    },
    /**
     * 获取url参数
     */
    getUrlParam (val) {
      const url = window.location.href
      if (url.indexOf('?') === -1) return false
      const vars = url.split('?')[1].split('&')
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=')
        if (pair[0] == val) return pair[1]
      }
      return false
    }
  },
  mounted () {
    const self = this
    window.onscroll = function() {
      if (window.scrollY > 100) self.opacity = `rgba(41, 44, 50, 1)`
      if (window.scrollY < 100) self.opacity = `rgba(41, 44, 50, ${window.scrollY / 100})`
    }
    // 判断ios机型
    if ((this.$isIos && (window.screen.height === 812 && window.screen.width === 375)) ||
      (window.screen.height === 896 && window.screen.width === 414)
    ) this.isIosX = true
    // 获取data
    courseDetail({
      courseId: this.getUrlParam('id')
    }).then(res => {
      if (Number(res.code) === 0) {
        this.Data = res.data
        this.teacherIntro = this.Data.tutorIntroduce.split('\n')
      }
    })
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  font-size: 0;
  width: 100%;
  min-height: 100vh;
  line-height: 1;
  padding: 84px 0 35px 0;
  position: relative;
  &.xwrapper {
    padding: 104px 0 25px 0;
  }
  &:after {
    content: '';
    width: 100%;
    height: 105vw;
    background-image: url('../assets/img/bg_course.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .ad {
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    padding: 0 15px;
    box-sizing: border-box;
    background: #ebc486;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    img {
      width: 38px;
      height: 38px;
    }
    .ad-content {
      color: #292c32;
      flex: 1;
      margin: 0 0 0 15px;
      .content-download {
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
      }
    }
    .choise-course {
      display: flex;
      align-items: center;
      width: 83px;
      height: 31px;
      padding: 1px;
      border-radius: 5px;
      border: 1px solid #292c32;
      box-sizing: border-box;
      span {
        color: #ebc486;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: #292c32;
      }
    }
  }
  .header {
    padding: 0 16.5px 50px;
    position: relative;
    .main {
      .m-title {
        color: #eac397;
        font-size: 19px;
        font-weight: 500;
        line-height: 25px;
        margin: 0 0 14px 0;
      }
      .m-times {
        color: #cdcdcd;
        font-size: 14px;
        line-height: 16px;
        margin: 0 0 13px 0;
      }
      .m-price {
        color: #ddaf7b;
        font-size: 19px;
        font-weight: 500;
        line-height: 22px;
        margin: 0 0 5px 0;
        span {
          margin: 0 7.5px 0 0;
          &.m-price-origin {
            color: #cccccc;
            font-size: 13px;
            font-weight: normal;
            text-decoration: line-through;
          }
        }
      }
      .m-has {
        color: #989898;
        font-size: 11px;
      }
    }
  }
  .content {
    padding: 0 15px 50px;
    margin: -10px 0 0 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #fff;
    position: relative;
    .data {
      display: flex;
      justify-content: space-between;
      height: 40px;
      padding: 15px 0 0 0;
      .list {
        color: #222;
        font-size: 15px;
        font-weight: 500;
        display: flex;
        align-items: center;
        width: 167px;
        height: 40px;
        padding: 0 0 0 13.5px;
        box-sizing: border-box;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &:first-child {
          background-image: url('../assets/img/data_1.png');
        }
        &:last-child {
          background-image: url('../assets/img/data_2.png');
        }
      }
    }
    .title {
      color: #222;
      font-size: 18px;
      font-weight: bold;
      margin: 0 0 .7.5px 0;
      padding: 34px 0 0 0;
      &.t-height {
        padding: 38.5px 0 0 0;
      }
    }
    .item {
      display: flex;
      padding: 20px 0;
      position: relative;
      .i-list {
        color: #c39d56;
        font-size: 15px;
        width: 21px;
        height: 21px;
        line-height: 21px;
        text-align: center;
        border-radius: 10px;
        background: #fbf7ee;
      }
      .i-main {
        flex: 1;
        margin: 0 0 0 10px;
        .m-title {
          color: #2d2d2d;
          font-size: 15px;
          line-height: 20px;
        }
        .m-time {
          color: #666;
          font-size: 13px;
          line-height: 14px;
          margin: 12.5px 0 22.5px 0;
        }
        .m-list {
          padding: 0 0 0 7.5px;
          position: relative;
          .list-item {
            color: #666;
            font-size: 13px;
            margin: 0 0 12.5px 0;
            &:nth-last-child(1) {
              margin: 0;
            }
          }
        }
      }
      .playback {
        color: #C39D56;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        right: 0;
        bottom: 20px;
        i {
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url('../assets/icon/right.png');
          background-size: 70% 70%;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
      .join-course {
        color: #5e3b20;
        font-size: 13px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 33px;
        border-radius: 16.5px;
        background: linear-gradient(90deg,rgba(241, 209, 157, 1), rgba(232, 187, 120, 1));
        position: absolute;
        right: 0;
        bottom: 20px;
      }
    }
    .teacher {
      display: flex;
      padding: 15px 0 0 0;
      .t-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 53px;
        height: 53px;
        position: relative;
        &:before {
          content: "";
          width: 200%;
          height: 200%;
          border: 0.5px solid #dcaf55;
          transform: scale(0.5, 0.5);
          transform-origin: 0 50%;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto auto;
          z-index: 1;
        }
        img {
          width: 45px;
          height: 45px;
          border-radius: 22.5px;
          margin: 0 0 0 0.25px;
          background-image: url('../assets/icon/header.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
      .t-details {
        flex: 1;
        margin: 0 0 0 15px;
        .details-name {
          color: #bfa065;
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 5px 0;
        }
        .details-item {
          color: #666;
          font-size: 13px;
          margin: 0 0 5px 0;
          display: flex;
          line-height: 19px;
          span.item-intro {
            margin: 0 0 0 5px;
          }
        }
      }
    }
    .notice {
      display: flex;
      padding: 20px 0 0 0;
      position: relative;
      .notice-list {
        color: #c39d56;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 21px;
        height: 21px;
        background: #fbf7ee;
        border-radius: 50%;
      }
      .notice-main {
        flex: 1;
        margin: 0 0 0 15px;
        .notice-main-title {
          color: #2d2d2d;
          font-size: 15px;
          font-weight: bold;
          height: 20px;
          line-height: 21px;
          margin: 0 0 10px 0;
        }
        .notice-main-intro {
          color: #666;
          font-size: 13px;
          line-height: 16px;
          margin: 0 0 7.5px 0;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    .share,
    .wx {
      color: #e5c175;
      font-size: 12px;
      width: 90px;
      height: 55px;
      line-height: 55px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #2f3245;
      &.xfooter {
        padding: 0 0 15px 0;
      }
      &.shareWx {
        width: initial;
        flex: 1;
        height: 55px;
      }
      i {
        display: inline-block;
        width: 22px;
        height: 22px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &.wx {
          background-image: url("../assets/icon/wx.png");
        }
        &.share {
          background-image: url("../assets/icon/share.png");
        }
      }
      div {
        display: inline-block;
        line-height: 12px;
        margin: 3.5px 0 0 0;
      }
    }
    .app {
      color: #323546;
      font-size: 18px;
      font-weight: bold;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 55px;
      background: #e5c175;
      &.xfooter {
        padding: 0 0 15px 0;
      }
    }
    .sign-up {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 55px;
      background: #d3d3d3;
      &.xfooter {
        padding: 0 0 15px 0;
      }
    }
  }
}
</style>
