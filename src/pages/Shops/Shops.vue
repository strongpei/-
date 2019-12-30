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
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .select
    background black
    .select-header
      width 100%
      position absolute
      left 0
      bottom 0
      .header
        width 100%
        height 156px
        position relative
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
          
        
      

            
      
</style>
