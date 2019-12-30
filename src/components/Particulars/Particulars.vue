<template>
  <div class="wrapper">
    <div class="particulars-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://goods5.juancdn.com/goods/191204/8/8/5de7609633b089431c46383b_800x800.jpg?iopcmd=convert&Q=88&dst=jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://goods7.juancdn.com/goods/191204/d/4/5de7609833b089432a5d60bb_800x800.jpg?iopcmd=convert&Q=88&dst=jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://goods2.juancdn.com/goods/191204/2/f/5de76097b6f8ea7d5a3b47cb_800x800.jpg?imageMogr2/quality/88!/format/jpg" alt=""></div>
            <div class="swiper-slide"><img src="https://goods8.juancdn.com/goods/191204/f/8/5de76095b6f8ea01dc7be86b_800x800.jpg?imageMogr2/quality/88!/format/jpg" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="item_icon">
        <i class="iconfont icon-19" style=""></i>
      </div>
      <div class="girl">
        <div class="particulars-money">
          <div class="money0">
            <span class="money1">¥69</span>
            <span class="money2">¥698</span>
            <span class="money3">包邮</span>
          </div>
          <span class="money4">2403人已购</span>
        </div>
        <div class="particulars-thorough">
          <div class="particulars-shoe">2019新款冬季粗跟短靴秋冬季女靴高跟时装靴尖头拼色中筒马丁靴</div>
          <button><i class="iconfont icon-shoucang"></i></button>
        </div>
      </div>
      <div class="particulars-discount">
        <span class="discount1">满件折</span>
        <span class="discount2">满两件8.5折</span>
        <span class="discount3"><i class="iconfont icon-gengduo"></i></span>
      </div>
      <div class="particulars-sale">
        <span class="sale1">24小时发货</span>
        <span class="sale2">7天包邮</span>
        <span class="sale3">售后补贴</span>
        <span class="sale4"><i class="iconfont icon-gengduo"></i></span>
      </div>
      <div class="particulars-select">
        <span class="select1">请选择: 颜色、尺码</span>
        <span class="select2"><i class="iconfont icon-dayuhao"></i></span>
      </div>
      <div class="particulars-store">
        <div class="store1"><img src="https://goods4.juancdn.com/bao/170320/6/6/58cf3e40a43d1f01be2edb68_180x90.png?imageMogr2/quality/88!/format/png" alt=""></div>
        <div class="store2">
          <p class="ST1">TWO DOVE女鞋旗舰店</p>
          <p class="ST2">共100件商品</p>
        </div>
        <div class="store3">
          <span class="SE1">进入店铺</span>
          <span class="SE2"><i class="iconfont icon-dayuhao"></i></span>
        </div>
      </div>
      <div class="particulars-foot">
        <div class="consult-one">
          <div class="consult1">
            <span >图文详情</span>
            
          </div>
          <div class="consult2">
            <span>商品参数</span>
          </div>
          <div class="consult3">
            <span>咨询与售后</span>
          </div>
        </div>
        <div class="consult-two">
          <span class="CS1">商家提醒: </span>
          <span class="CS2">此商品是由品牌商从【浙江台州】发货</span>
        </div>
      </div>
      <div class="particulars-cart">
        <div class="btn1">
          <span><i class="iconfont icon-1"></i></span>
          <span @click = "goto('/home')">首页</span>
        </div>
        <div class="btn2">
          <span @click = "goto('/shopcart')"><i class="iconfont icon-gouwucheman"></i></span>
          <span>购物车</span>
        </div>
        <div class="btn3">
          <span>立即购买</span>
        </div>
        <div class="btn4">
          <span>加入购物车</span>
        </div>
      </div>
      
    </div>
  </div>  

</template>

<script type="text/ecmascript-6">
  import Swiper from "swiper"
  import 'swiper/css/swiper.css'
  
  export default {
    name: 'FooterGuide',
    methods: {
      goto (path) {
        if (this.$route.path!==path) {
          this.$router.replace(path)
        } else {
          window.location.reload()
        }
      }
    },
    mounted(){
      new Swiper(".swiper-container",{
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrapper
    background rgb(244, 244, 248)
    .particulars-container
      position relative
      .swiper-container
        --swiper-theme-color: #ff6600
        .swiper-wrapper
          .swiper-slide
            width 100%11
            height 750px
            img 
              width 100%
              height 750px
      .item_icon
        i
          display block
          border-radius 40px
          font-size:0.9rem
          opacity 0.8
          position absolute
          top 0
          right 0
          z-index 10
          color #ffffff
          margin 20px 20px 0 0
          background black
          opacity .5
      .girl
        background #fff
        width 100%
        height 226px
        padding 24px 28px 20px
        box-sizing border-box
        .particulars-money
          .money0
            float left
            .money1
              color #ff464e
              font-size 48px
              margin-right 8px
            .money2
              font-size 24px
              text-decoration: line-through
              margin-right 8px
            .money3
              font-size 20px
              background red
              color #ffffff
          .money4
            float right
            color rgb(153, 153, 153)
            font-size 24px
            margin 20px 0
        .particulars-thorough
          .particulars-shoe
            width 90%
            height 100%
            padding-top 10px
            float left 
            font-size 32px
          button
            border: none
            float right
            width 48px
            height 48px
            background #ffff
            outline  none
            //需要解决
            i
              font-size 45px
  
      .particulars-discount
        width 100%
        height 96px
        display flex
        justify-content space-between
        padding 0 28px
        box-sizing border-box
        background #ffffff
        margin 15px 0 2px 0
        .discount1
          display block
          width 68px
          height 20px
          background red
          color #ffffff
          font-size 20px
          margin auto 0
        .discount2
          float left
          display block
          width 140px
          height 26px
          margin auto 0
        .discount3
          float right
          margin auto 0
          i
            color rgb(102, 102, 102)
            font-size 60px
      .particulars-sale
        background #ffffff
        width 100%
        height 96px
        display flex
        justify-content space-between
        padding 0 28px
        box-sizing border-box
        .sale1
          color rgb(102, 102, 102)
          margin auto 0
          position relative
          &:before
            content "·"
            color #ff464e
            font-size 50px
            position absolute
            left -15px
            top -70%
            opacity 0.5

        .sale2
          color rgb(102, 102, 102)
          margin auto 0
          position relative
          &:before
            content "·"
            color #ff464e
            font-size 50px
            position absolute
            left -15px
            top -70%
            opacity 0.5
        .sale3
          color rgb(102, 102, 102)
          margin auto 0
          position relative
          &:before
            content "·"
            color #ff464e
            font-size 50px
            position absolute
            left -15px
            top -70%
            opacity 0.5
        .sale4
          margin auto 0
          i
            font-size 60px
            color rgb(102, 102, 102)
      .particulars-select
        margin 15px 0
        width 100%
        height 96px
        padding 0 28px
        background #ffffff
        box-sizing border-box
        .select1
          float left
          font-size 30px
          line-height 96px
        .select2
          float right
          i
            line-height 96px
            font-size 50px
            color gray
      .particulars-store
        width 100%
        height 148px
        background  #ffffff
        padding 28px
        box-sizing border-box
        .store1
          width 92px
          height 92px
          border 1px solid #e7e7e7
          float left
          img 
            width 100%
            height 100%
        .store2
          float left
          padding 15px
          .ST1
            font-size 32px
          .ST2
            font-size 24px
            color #999
            padding 5px 0
        .store3
          float right
          width 164px
          height 58px
          border 1px solid gray
          padding 0 15px
          box-sizing border-box
          position relative
          margin-top 20px
          .SE1
            font-size 24px
            line-height 58px
          .SE2
            position absolute
            top 17%
            i
              font-size 40px
              color gray
      .particulars-foot
        width 100%
        padding 22px 20px
        // height 106px
        overflow hidden
        box-sizing border-box
        background #ffffff 
        margin 15px 0 
        .consult-one
          .consult1
            height 60px
            width 227px
            border 1px solid #666666
            border-radius 10px 0 0 10px
            float left
            span 
              display block
              line-height 60px
              font-size 28px
              text-align center
          .consult2
            height 60px
            width 227px
            border 1px solid #666666
            float left
            span 
              display block
              line-height 60px
              font-size 28px
              text-align center
          .consult3
            height 60px
            width 250px
            border 1px solid #666666
            border-radius 0 10px 10px 0
            float left
            &.on
              background  #ff464e
            span 
              display block
              line-height 60px
              font-size 28px
              text-align center
        .consult-two
          float left
          width 100%
          height 100px
          padding 28px 28px 18px 28px
          box-sizing border-box
          margin-top 20px
          background #ffffff
          .CS1
            color rgb(255, 119, 0)
            font-size 28px
          .CS2
            color rgb(155, 155, 155)
            font-size 28px
      .particulars-cart
        top-border-1px(#cccccc)
        display flex
        position fixed
        left 0
        bottom 0
        width 100%
        height 100px
        background-color #fff
        .btn1
          display flex
          flex-direction column
          text-align center
          width 19%
          color rgb(51, 51, 51)
          border-right 1px solid #cccccc
          span
            margin-top 10px
            font-size 20px
            .iconfont
              font-size 47px
        .btn2
          display flex
          flex-direction column
          text-align center
          width 19%
          color rgb(51, 51, 51)
          border-right 1px solid #cccccc
          span
            margin-top 10px
            font-size 20px
            .iconfont
              font-size 47px
        .btn3
          width 25%
          text-align center
          line-height 100px
          font-size 24px
        .btn4
          width 37%
          text-align center
          line-height 100px
          background rgb(255, 70, 78)
          color #ffffff
          font-size 24px


        
        
          
      

            
            
            
            
          
            


          





        



          
  

          
        



          

        



            


      
  
      



</style>
