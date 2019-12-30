<template>
  <div class="root">
    <!-- 头部样式 -->
    <div class="header">
      <img src="./images/lunbo/top.png">  
    </div>  
    <!-- 输入框 -->
    <div class="hea">
      <div class="searchContainer">
        <i class='iconfont icon-sousuo'></i>
        <input type="text" placeholder="搜索商品" placeholder-class="placeholder" />
      </div>
      <a><img src="./images/lunbo/search.png"></a>
    </div>

     <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/lunbo/01.png"></div>
        <div class="swiper-slide"><img src="./images/lunbo/02.jpg"></div>
        <div class="swiper-slide"><img src="./images/lunbo/03.jpg"></div>
        <div class="swiper-slide"><img src="./images/lunbo/04.jpg"></div>
        <div class="swiper-slide"><img src="./images/lunbo/05.jpg"></div>
        <div class="swiper-slide"><img src="./images/lunbo/06.png"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div> 
      
      <!-- 限时抢购 -->
    <div class="time">
      <div class="card">
        <img src="./images/time/1.png"/>
      </div>
      <div class="card">
        <img src="./images/time/2.png"/>
      </div>
      <div class="card">
        <img src="./images/time/3.png"/>
      </div>
      <div class="card">
        <img src="./images/time/4.png"/>
      </div>  
    </div>


    <div class="gif">
      <img src="./images/lunbo/11.gif">
    </div>


    <!-- 中间图片部分1 -->
    <div class="middle">
       <div class="left">
        <img src="./images/time/11.gif">
      </div>
      <div class="right">
        <div class="top"><img src="./images/time/12.png"></div>
        <div class="buttom"><img src="./images/time/13.png"></div>
      </div>
    </div>
    <div class="middle1">
      <img src="./images/time/0.gif">
    </div>
    <div class="middle2">
      <img src="./images/time/14.png">
    </div>
    <!-- 下面商品部分 -->
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import  'swiper/css/swiper.min.css'

  export default {
    mounted() {
      new Swiper ('.swiper-container', {
        autoplay: true,
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },    
      
    })        
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .root
    width 100%
    height 2000px
    .header
      width 100%
      height 112px
      img 
        width 100%
        height 100%
    .hea
      width 100%
      height 88px
      display flex
      justify-content space-between
      align-items: center
      .searchContainer
        width 634px
        height 56px
        background #eee
        border-radius 5px
        position relative
        left 28px
        line-height 56px
        .iconfont
          position absolute
          font-size 30px
          left 20px
        input
          background #eeeeee
          width 564px
          height 31px
          margin-left 70px
          .placeholder
            font-size 12px
      a
        width 100px
        height 88px
        img
          width 100%
          height 100%
    .swiper-container
      width 100%
      height 290px
      .swiper-wrapper
        img
          width 100%
          height 100%
      .swiper-pagination
        // width 50px
        // height 50px
    .time
      width 100% 
      height 168px    
      .card
        float left
        width 25%
        height 168px
        img 
          width 100%
          height 100%
    .gif
      width 100%
      height 250px
      img
        height 100%
        width 100%
    .middle
      width 100%
      height 450px
      .left
        float left
        width 50%
        height 450px
        img
         width 100%
         height 100% 
      .right
        float right
        width 50%
        height 450px
        position absolute
        .top
          position relative
          margin-left 100%
          width 100%
          height 50%
          img
            width 100%
            height 100%
        .buttom
          position relative
          width 100%
          height 50%
          margin-left 100% 
          img
            width 100%
            height 100%
    .middle1
      width 100%
      height 200px
      background #f4f4f8
      img
        width 100%
        height 100%
    .middle2
      width 100%
      height 120px
      margin 10px 0 10px 0
      background #f4f4f8
      img
        width 100%
        height 100px
    .shop
      width 100%
      height 100px
</style>
