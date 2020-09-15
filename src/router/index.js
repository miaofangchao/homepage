import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import InvestmentProduct from '../views/InvestmentProduct'
import CompanyNewsList from '../views/CompanyNewsList'
import InvestmentPolicy from '../views/InvestmentPolicy'
import CompanyNewsSingle from '../views/CompanyNewsSingle'
import LeaveMessage from '../views/LeaveMessage'
import ProductDetails from '../views/ProductDetails'
import AgentInfor from '../components/AgentInfor'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/InvestmentProduct',
    component:InvestmentProduct
  },
  {
    path:'/InvestmentPolicy',
    component:InvestmentPolicy,
  },
  {
    path:'/CompanyNewsList',
    component:CompanyNewsList,
  },
  {
    path:'/CompanyNewsSingle/:id',
    component:CompanyNewsSingle
  },
  {
    path:'/LeaveMessage',
    component:LeaveMessage
  },
  {
    path:'/ProductDetails/:id',
    component:ProductDetails
  },
  {
    path:'/AgentInfor',
    component:AgentInfor
  }
//   {
//     path: '/about',
//     name: '  ',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(false)
        },350)
      })
    }else{
      // 使用Promise来实现异步延迟，直接延迟无效。直接return，页面会先返回顶部，再进入过渡效果
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({x:0,y:0})
        },350)
      })
    }
  }
})
export default router