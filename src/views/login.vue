<template>
  <div class="wrapper">
    <img class="header" src="../assets/login.png">
    <div class="content">
      <div class="title">
        <span>报名前请完善您的个人意料</span>
      </div>
      <div class="main">
        <div class="main-box van-hairline--bottom">
          <div class="name">学校</div>
          <input type="text" placeholder="请选择院校">
        </div>
        <div class="main-box van-hairline--bottom">
          <div class="name">姓名</div>
          <input type="text" placeholder="请填写真实姓名">
        </div>
        <div class="main-box van-hairline--bottom">
          <div class="name">+86</div>
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="main-box van-hairline--bottom">
          <div class="name">验证码</div>
          <input type="text" placeholder="请输入验证码">
          <div class="get-code">
            <span>获取验证码</span>
          </div>
        </div>
        <div class="submit">
          <span>确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="less">
  .wrapper {
    font-size: 0;
    width: 100vw;
    min-height: 100vh;
    background: #fcfcfc;
    position: relative;
    .header {
      width: 100%;
    }
    .content {
      text-align: center;
      position: absolute;
      top: .9rem;
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
          .name {
            color: #222;
            font-size: 15px;
            font-weight: 400;
            width: 70px;
            height: 44px;
            text-align: left;
          }
          input {
            flex: 1;
            height: 44px;
            border: none;
            -webkit-appearance: none;
          }
          .get-code {
            color: #CDA34F;
            width: 100px;
            height: 44px;
          }
        }
        .submit {
          color: #5E3B20;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 170px;
          height: 40px;
          margin: 35px auto;
          border-radius: 20px;
          background: linear-gradient(90deg,rgba(241, 209, 157, 1), rgba(232, 187, 120, 1));
        }
      }
    }
  }
</style>