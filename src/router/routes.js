//包含多个路由的数组
import Home from "@/pages/Home/Home.vue"
import Categroy from "@/pages/Categroy/Categroy.vue"
import Shopcart from "@/pages/Shopcart/Shopcart.vue"
import Profile from "@/pages/Profile/Profile.vue"

export default [
  //注册路由
  {
    path:"/home",
    component:Home
  },
  {
    path:"/categroy",
    component:Categroy
  },
  {
    path:"/shopcart",
    component:Shopcart
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/",
    redirect:"/home"
  }
]