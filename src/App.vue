<template>
  <div>
    <!-- 在当前页面显示路由组件 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入底部组件
import Footer from "./components/Footer/Footer"
  export default {
    //注册组件
    components:{
      Footer
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
