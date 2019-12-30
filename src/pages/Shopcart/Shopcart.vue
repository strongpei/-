<template>
  <div class="all">
    <div class="shopping-container">
      <div class="shopping-middle">购物车</div>
      <div class="shopping-right">编辑</div>
    </div>
    <div class="main-container">
      <div class="main-top"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt=""></div>
      <div class="main-middle">看到喜欢的就带回家吧</div>
      <div class="main-bottom" @click = "goto('/home')">今日推荐</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'order',
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .all
    height 100%
    
    .shopping-container
      width 100%
      height 88px
      font-size 36px
      background #fff
      .shopping-middle
        display flex
        justify-content center
        line-height 88px
        position relative
      .shopping-right
        position absolute
        top 0
        right 0
        margin 22px 28px 0 0
    .main-container
      width 100%
      height 2000px
      padding 35px 0 0 0
      background #f4f4f8
      .main-top
        width 280px
        height 280px
        margin  0 auto
        img 
          width 100%
          height 100%
      .main-middle
        text-align center
        font-size 32px
        color rgb(51, 51, 51)
        margin 20px 0 20px 0
      .main-bottom
        margin 0 auto
        width 278px
        height 82px
        color #ff464e
        font-size 32px
        border 1px solid currentColor
        text-align center
        line-height 82px  
</style>
