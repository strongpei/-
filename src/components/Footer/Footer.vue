<template>
  <div class="footer-guide">
    <span class="guide-item" @click="goto('/home')">
      <span class="img-item">
        <img v-if="!($route.path==='/home')" src="./images/home.png" alt="首页">
        <img v-else src="./images/home-active.png" alt="首页">
      </span>
      <span :class="{on : $route.path==='/home'}">首页</span>
    </span>
    <span class="guide-item" @click="goto('/categroy')">
      <span class="img-item">
        <img v-if="!($route.path==='/categroy')" src="./images/categroy.png" alt="分类">
        <img v-else src="./images/categroy-active.png" alt="分类">
      </span>
      <span :class="{on : $route.path==='/categroy'}">分类</span>
    </span>
    <span class="guide-item" @click="goto('/shopcart')">
      <span class="img-item">
        <img v-if="!($route.path==='/shopcart')" src="./images/shopcart.png" alt="购物车">
        <img v-else src="./images/shopcart-active.png" alt="购物车">
      </span>
      <span :class="{on : $route.path==='/shopcart'}">购物车</span>
    </span>
    <span class="guide-item" @click="goto('/profile')">
      <span class="img-item">
        <img v-if="!($route.path==='/profile')" src="./images/user.png" alt="我的卷皮">
        <img v-else src="./images/user-active.png" alt="我的卷皮">
      </span>
      <span :class="{on : $route.path==='/profile'}">我的卷皮</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isShow:false //图片默认是没有颜色的
      }
    },
    methods:{
      //编程式路由跳转
      goto(path){
        if(path!==this.$route.path){
          this.$router.replace(path)
        }else{
          window.location=path
        }
      },
      //动态切换图片
      show(){
        this.isShow=!this.isShow
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  .footer-guide
    top-border-1px(#cccccc)
    position fixed
    left 0
    bottom 10px
    display flex
    width 100%
    .guide-item
      display flex
      flex-direction column
      width 25%
      text-align center
      .img-item
        img 
          width 120px
      span 
        margin-top 3px
        font-size 22px
        color gray
        &.on
          color #FF464E
</style>