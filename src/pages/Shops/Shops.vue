<template>
  <div class="select">
    <div class="select-header">
      <div class="header">
        <div class="img-wrapper">
          <img src="https://goods2.juancdn.com/goods/170927/3/0/59cb12a58150a145d7684425_800x800.jpg?imageMogr2/thumbnail/350x350!" alt="">
        </div>
        <div class="money-wrapper">
          <p class="MW1">¥15.8</p>
          <p class="MW2">请选择 颜色 尺码</p>
        </div>
        <div class="co-wrapper">
          <i class="iconfont icon-error"></i>
        </div>
      </div>
    </div>
    <div class="select-main">
      <div class="color-wrapper">
        <p>颜色</p>
        <div class="color">
          <div class="on">粉色</div>
          <div>黑色</div>
          <div>白色</div>
        </div>
      </div>
      <div class="size-wrapper">
        <p>尺码</p>
        <div class="size">
           <div class="on">均码</div>
           <div>大</div>
           <div>小</div>
        </div>
      </div>
      <div class="select-arithmetic">
        <span>购买数量</span>
        <div class="arithmetic">
          <div class="arithmetic-left">-</div>
          <div class="arithmetic-middle">1</div>
          <div class="arithmetic-right">+</div>
        </div>
      </div>
    </div>
    
    <div class="select-footer">
        确定
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .select
    width 100%
    position absolute
    left 0
    bottom 0
    .select-header
      .header
        width 100%
        height 156px
        position relative
        padding-top 3% 
        .img-wrapper
          position absolute
          left 5%
          top -50%
          float left
          width 200px
          height 200px
          border-radius 20px
          overflow hidden
          img
            width 200px
            height 200px
        .money-wrapper
          float left
          margin-left 35%
          .MW1
            color #ff464e
            font-size 36px
          .MW2
            color #666
            font-size 24px
        .co-wrapper
          margin-right 3%
          float right
          .iconfont
            font-size 35px
            color gray
    .select-main
      width 93%
      height 474px
      margin 0 auto
      .color-wrapper
        p
          font-size 32px
        .color
          margin 22px 0
          display flex
          justify-content space-between
          div
            width 210px
            height 64px
            border 1px solid black
            font-weight 500
            text-align center
            line-height 64px
            box-sizing border-box
            &.on
              background #ff464e
              color #ffffff
              border none
      .size-wrapper
        p
          font-size 32px
        .size
          margin 22px 0
          display flex
          justify-content space-between
          div
            width 210px
            height 64px
            border 1px solid black
            font-weight 500
            text-align center
            line-height 64px 
            box-sizing border-box
            &.on
              background #ff464e
              color #ffffff
              border none
    .select-arithmetic
      width 100%
      padding 60px 0
      span 
        font-size 32px
      .arithmetic
        float right
        .arithmetic-left
          width 60px
          height 60px
          background #f7f7f7
          float left
          text-align center
          line-height 60px
          transform translateY(-25%)
          font-size 35px
        .arithmetic-middle
          width 60px
          height 60px
          float left
          line-height 60px
          text-align center
          line-height 60px
          font-size 35px
          transform translateY(-25%)
        .arithmetic-right
          width 60px
          height 60px
          background #f7f7f7
          float left
          text-align center
          line-height 60px
          transform translateY(-25%)
          font-size 35px
    .select-footer
      width 100%
      height 96px
      background #ff464e
      font-size 36px
      color #ffffff
      text-align center
      line-height 96px
</style>
