//包含多个路由的数组

// import Home from "@/pages/Home/Home.vue"
// import Category from "@/pages/Category/Category.vue"
// import Shopcart from "@/pages/Shopcart/Shopcart.vue"
// import Profile from "@/pages/Profile/Profile.vue"


//动态导入模块
const Home =()=>import('@/pages/Home/Home.vue')
const Category =()=>import('@/pages/Category/Category.vue')
const Shopcart =()=>import('@/pages/Shopcart/Shopcart.vue')
const Profile =()=>import('@/pages/Profile/Profile.vue')
const Particulars =()=>import('@/components/Particulars/Particulars.vue')
const Imagetext=()=>import('@/pages/Imagetext/Imagetext.vue')
const Refer=()=>import('@/pages/Refer/Refer.vue')
const Shops=()=>import('@/pages/Shops/Shops.vue')
export default [
  //注册路由
  {
    path:"/home",
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/categroy",
    component:Category,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/shopcart",
    component:Shopcart,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/imagetext",
    component:Imagetext
  },
  {
    path:"/refer",
    component:Refer
  },
  {
    path:"/shops",
    component:Shops
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:"/particulars",
    component:Particulars
  },
  {
    path:"/",
    redirect:"/home"
  }
]