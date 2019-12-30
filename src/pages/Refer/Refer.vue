<template>
  <div class="promotion-header">
    <div class="promotion">
      <div class="P1">服务说明<i class="iconfont icon-error"></i></div>
    </div>
    <div class="serve-main">
      <div class="main">
        <div class="main-header" v-for="(item,index) in user" :key="index">
          <div class="MA1"><i></i>{{item.name}}</div>
          <div class="MA2">
            <span class="p1"><i></i>{{item.content}}</span>
            <span class="p2"><i class="iconfont icon-dayuhao"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="serve-footer">
      知道了
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
     return{
         user:[
        {
        id:1,
        name:'24小时发货',
        content:'买家付款成功后，商家将在24小时内完成发货。（节假日等特殊情况除外）'
        },
        {
        id:2,
        name:'7天包退',
        content:'卷皮严格按照消费者保障服务，接受买家7天无理由退货。'
        },
        {
        id:3,
        name:'售后补贴',
        content:'商品存在问题时，请及时申请售后，卷皮将提供价值10元的退货运费补贴。如遇少件、错发、空包裹等情况，还额外提供至少10元的补偿（详见“客服中心”相关规则说明）。'
        },
      ]
     }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .promotion-header
    position relative
    width 100%
    position absolute
    left 0
    bottom 0
    .promotion
      width 100%
      height 98px
      border: 1px solid #e0e0e0
    .P1
      text-align center
      line-height 98px
      font-size 36px
      i
        float right
        margin-right 5%
        color gray
  .serve-main
    width 100%
    height 600px
    .main
      width 92%
      height 100%
      margin 0 auto
      .main-header
        padding 22px 0
        bottom-border-1px(#cccccc)
        overflow hidden
        .MA1
          margin 10px 0
          margin-left 4%
          font-size 28px
          position relative
          i 
            display block
            width 8px
            height 8px
            border-radius 50%
            background #ff464e
            position absolute
            left -20px
            top 8px
            opacity 0.5
        .MA2
          font-size 24px 
          color #9b9b9b
          position relative
          margin-left 4%
          .p1
            display block
            width 84%
            float left
            i
              display block
              width 8px
              height 8px
              border-radius 50%
              background #ff464e
              position absolute
              left -20px
              top 8px
              opacity 0.5
              font-size 46px
          .p2
            float right
            color #9b9b9b
  .serve-footer
    width 100%
    height 96px
    font-size 30px
    background #ff464e
    text-align center
    line-height 96px
    color #ffffff
          




      

 

</style>
