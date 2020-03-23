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
      @search="onSearch" 
      @cancel="onCancel" 
      :left-icon="searchIcon"/>
    <div class="search-box">
      <div v-show="!value && historyList.length" class="history-list">
        <div class="title">历史搜索</div>
        <div class="history-item" v-for="(item, index) in historyList" :key="'history' + index">{{ item }}</div>
        <div class="clear-btn">清除搜索历史</div>
      </div>
      <div v-show="value && searchList.length" class="search-list">
        <div class="title">相关课程</div>
        <div class="class-box" v-for="(item, index) in searchList" :key="'list' + index">
          <div class="name"><i class="hot" v-if="item.type === 1"></i><i class="offline" v-if="item.type === 2"></i>{{ item.title }}</div>
          <div class="des">{{ item.time }}</div>
          <div class="info">
            <span>{{ item.num }}人报名</span>
            <p class="price">{{ item.price }}</p>
          </div>
        </div>
      </div>
      <div v-show="value && !searchList.length" class="no-data">
        <img src="../assets/null.png">
        <p>抱歉，没有相关课程</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant'
export default {
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      searchIcon: require('../assets/icon-search.png'),
      value: '',
      historyList: [
        "111",
        "2222"
      ],
      searchList: [{
        type: 1,
        title: "AI算法大牛解密无人车技术-卷积神经网 络与深度强化学习",
        time: "10月12日 15:30",
        num: 21,
        price: "100"
      }, {
        type: 2,
        title: "MATH1081- 期末火箭班，教你拿高分的 秘诀",
        time: "11月5日 13:00",
        num: 3,
        price: "100"
      }]
    }
  },
  methods: {
    onSearch () {},
    onCancel () {
      this.$router.go(-1)
    }
  }
}
</script>