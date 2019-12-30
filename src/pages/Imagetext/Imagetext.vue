<template>
  <div class="promotion-header">
    <div class="promotion">
      <div class="P1">促销<i class="iconfont icon-error"></i></div>
    </div>
    <div class="pormotion-main">
      <div class="main">
        <div class="main-left">
          <span class="MA1">满件减</span>
          <span class="MA2">满一件减10元,满两件减25元</span>
        </div>
        <div class="main-right">
          <i class="iconfont icon-dayuhao"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .promotion-header
    border: 1px solid #e0e0e0
    position relative
    width 100%
    position absolute
    left 0
    bottom 0
    .promotion
      width 100%
      height 98px
    .P1
      text-align center
      line-height 98px
      font-size 36px
      i
        float right
        margin-right 5%
        color gray
  .pormotion-main
    width 100%
    height 368px
    .main
      top-border-1px(#cccccc)
      bottom-border-1px(#cccccc)
      width 91%
      height 113px
      margin 0 auto 
      .main-left
        float left
        text-align center
        line-height 113px
        .MA1
          color red
          border 1px solid red
          margin-right 0.3rem
      .main-right
        float right
        text-align center
        line-height 113px
        i
          font-size 0.5rem
          color gray
</style>
