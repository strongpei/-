//向外暴露的路由器模块
import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"

//声明使用vue的插件
Vue.use(VueRouter)

export default new  VueRouter({
  //使用history模式路径中不带#号
  mode: 'history',
  routes
})