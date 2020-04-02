<style lang="less">
.search-content {
  display: flex;
  height: 100vh;
  padding: 0 4px;
  flex-direction: column;
  overflow: hidden;
  .search-box {
    flex: 1;
    overflow-y: auto;
    padding: 0 11px;
    .title {
      font-size: 15px;
      color: #999999;
      padding: 20px 0 4px;
    }
    .history-item {
      padding: 12px 0;
      font-size: 14px;
      color:#222;
      line-height: 22px;
      border-bottom:#EDEDED solid 1px;
    }
    .clear-btn {
      text-align: center;
      font-size: 14px;
      line-height: 14px;
      color:#666666;
      padding: 20px;
    }
  }
  .search-list {
    .title {
      padding-bottom: 20px;
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
  }
}
</style>

<template>
  <div class="search-content">
    <van-search 
      v-model="value" 
      shape="round" 
      placeholder="请输入课程编号" 
      show-action 
      @search="getCourseSearchFn" 
      @cancel="onCancel" 
      :left-icon="searchIcon"/>
    <div class="search-box">
      <div v-show="!value && historyList.length" class="history-list">
        <div class="title">历史搜索</div>
        <div class="history-item" v-for="(item, index) in historyList" :key="'history' + index" @click="historySearchFn(item)">{{ item }}</div>
        <div class="clear-btn" @click="clearFn">清除搜索历史</div>
      </div>
      <div v-show="value && searchList.length" class="search-list">
        <div class="title">相关课程</div>
        <div class="class-box" v-for="(item, index) in searchList" :key="'list' + index">
          <div class="name">
            <!-- 火爆 -->
            <i class="hot" v-if="item.hotFlag === 1"></i>
            <!-- 线下课图标 -->
            <i class="offline" v-if="item.offlineFlag === 1"></i>
            {{ item.courseTitle }}
          </div>
          <div class="des">{{ item | timeFilter }}</div>
          <div class="info">
            <span>{{ item.applyNum }}人报名</span>
            <p class="price">
              <span>{{ item.originalPriceStr }}</span>
              {{ item.currentPrice !== 0 ? item.currentPriceStr : '免费' }}
            </p>
          </div>
        </div>
      </div>
      <div v-show="value && !searchList.length && statue" class="no-data">
        <img src="../assets/null.png">
        <p>抱歉，没有相关课程</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant'
import { courseSearch } from '@/axios/api'
export default {
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      searchIcon: require('../assets/icon-search.png'),
      collegeId: this.$route.query.collegeId,
      value: '',
      historyList: [],
      searchList: [],
      statue: false
    }
  },
  filters:{
    timeFilter (val) {
      return val.packageFlag === "1" ? val.coursePeriod + " | 每期" + val.periodHour + "h" : val.courseTime
    }
  },
  methods: {
    // 获取课程列表
    getCourseSearchFn () {
      this.historyList.unshift(this.value)
      localStorage.setItem('searchHistory', JSON.stringify(this.historyList))
      courseSearch({
        collegeId: this.collegeId,
        courseNo: this.value
      }).then(res => {
        this.statue = true
        if (res.code === '0') {
          this.searchList = res.data
        }
      })
    },
    // 清空历史记录
    clearFn () {
      this.historyList = []
      localStorage.removeItem('searchHistory')
    },
    historySearchFn (item) {
      this.value = item
      this.getCourseSearchFn()
    },
    onCancel () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (localStorage.getItem('searchHistory')) {
      this.historyList = JSON.parse(localStorage.getItem('searchHistory'))
    }
  }
}
</script>