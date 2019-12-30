<template>
  <!-- 项目代码 -->
  <!-- 个人中心 -->
  <div class="personageContainer">
      <!-- 红色背景头部页面 -->
    <div class="personageHeader">
      <div class="profileHeader-user">
        <span></span>
        <span>个人中心</span>
      </div>
      <div class="profileHeader-login">
        <a class="loginBefore" @click="$router.push('/personage/register')">注册</a>
        <span class="line"></span>
        <a class="loginBefore" @click="$router.push('/login')">登录</a>
      </div>
    </div>

    <div class="personageBox">
        <!-- 我的订单 -->
        <a class="personageBoxUser">
            <span class="left">我的订单</span>
            <span class="right">全部订单</span>
        </a>
        <!-- 四个导航 -->
        <div class="userList">
            <a href="javascript:;">
                <i class="iconfont icon-daifukuan"></i>
                <span>待付款</span>
            </a>
            <a href="javascript:;">
                <em class="iconfont icon-daichengtuan"></em>
                <span>待成团</span>
            </a>
            <a href="javascript:;">
                <em class="iconfont icon-daishouhuo"></em>
                <span>待收货</span>
            </a>
            <a href="javascript:;">
                <em class="iconfont icon-shouhou1"></em>
                <span>退款/售后</span>
            </a>
        </div>
        <div class="bg"></div>
        <!-- 长导航 -->
        <div class="userItems">
            <a href="javascript:;">
                <span>我的优惠券</span>
            </a>
            <a href="javascript:;">
                <span>我的收藏</span>
            </a>
            <a href="javascript:;">
                <span>我的拼团</span>
            </a>
            <a href="javascript:;">
                <span>我的免单券</span>
                <span class="itemRight">0张</span>
            </a>
            <a href="javascript:;">
                <span>借钱</span>
                <span class="itemRight">新用户免费领1000元</span>
            </a>
        </div>
            <div class="bg"></div>
        <!-- 客服中心 -->
        <div class="userItem">
            <a href="javascript:;">
                <span>客服中心</span>
            </a>
            <a href="javascript:;">
                <span>关于卷皮</span>
            </a>
        </div>
    </div>
    <div class="bg"></div>
    <!-- 底部 -->
    <div class="personageFoot">
        <a href="javascript:;">返回首页</a>
        <a href="javascript:;">客户端</a>
        <a href="javascript:;">电脑版</a>
    </div>
  </div>
</template>

<script>
export default {
    // methods:{
    //     toLogin(){
    //         this.$router.replace('/login')
    //     }
        
    // }

};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
.personageContainer
  .personageHeader
    width: 100%;
    background-image: url('./images/user_center_bg.png');
    background-size :100% auto
    .profileHeader-user 
        width 100%
        height 88px
        font-size 36px
        line-height 88px
        text-align center
        color white
  .profileHeader-login
      width 100%
      height 200px
      font-size 40px
      line-height 200px
      text-align center
      display flex
      align-items center
      justify-content space-evenly
      color white
      .loginBefore
          color white
          margin-left 20px 
      .line
          width 2px
          height 40px 
          background-color white  
          
  .personageBox
      width 100%
      .personageBoxUser
          display block
          width 100%
          height 96px
          display flex
          justify-content space-between
          span
              font-size 30px
              line-height 96px
              &.left
                    margin-left 40px 
                &.right
                    margin-right 40px 
      .userList
          width 90%
          height 100px
          padding 30px 0
          font-size 24px
          margin 0 auto
          display flex
          border-top 1px solid #f1f1f1
          // flex-direction column
          text-align center
          a
              display block
              width 186px
              height 100%
              color #666
              
              .iconfont
                  font-size 60px
                  display block
                  margin-bottom 12px
              span 
                  font-size 24px
                  display block
      .userItems
          width 90%
          height 480px
          margin 0 auto
          a
              display block
              width 100%
              height 95px
              line-height 96px
              font-size 30px
              color #333
              border-bottom 1px solid #f1f1f1
              .itemRight
                  float right 
                  color #999
      .userItem
          width 90%
          height 192px
          margin 0 auto
          a
              display block
              width 100%
              height 95px
              line-height 96px
              font-size 30px
              color #333
              border-bottom 1px solid #f1f1f1
  .bg
      width 100%
      height 12px
      background-color #f1f1f1         
  .personageFoot
      width 100%
      height 83px
      display flex
      justify-content space-evenly
      text-align center
      align-items center
      a
          font-size 28px
</style>
