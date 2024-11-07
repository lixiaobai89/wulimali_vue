import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CompoundInterestCalculator from '../views/CompoundInterestCalculator.vue'
import LoanAmortizationCalculator from '../views/LoanAmortizationCalculator.vue'
import Finance from '../views/Finance.vue'
import Medicine from '../views/Medicine.vue'
import Shanyang from '../views/Shanyang.vue'
import GoodsSelect from '../views/GoodsSelect.vue'
import ManageGoods from '../views/ManageGoods.vue'
import Video from '../views/Video.vue'
import TeacherRoom from '../views/video/TeacherRoom.vue'
import TeacherRoomMessage from '../views/video/TeacherRoomMessage.vue'
import StudentRoom from '../views/video/StudentRoom.vue'
import StudentRoomMessage from '../views/video/StudentRoomMessage.vue'
import SuccessPay from '../views/SuccessPay.vue'
import Callback from '../views/login/Callback.vue'
import axios from 'axios' // 引入全局 axios 实例


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }  // 需要登录的页面
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false }  // 需要登录的页面
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/Home',
  //   component: Home,
  //   meta: { requiresAuth: true }  // 需要登录的页面
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  ,
  {
    path: '/CompoundInterestCalculator',
    name: 'CompoundInterestCalculator',
    component: CompoundInterestCalculator
  },
  {
    path: '/LoanAmortizationCalculator',
    name: 'LoanAmortizationCalculator',
    component: LoanAmortizationCalculator
  },
  {
    path: '/Finance',
    name: 'Finance',
    component: Finance
  },
  {
    path: '/Medicine',
    name: 'Medicine',
    component: Medicine
  },
  {
    path: '/Shanyang',
    name: 'Shanyang',
    component: Shanyang
  },
  {
    path: '/GoodsSelect',
    name: 'GoodsSelect',
    component: GoodsSelect
  },
  {
    path: '/ManageGoods',
    name: 'ManageGoods',
    component: ManageGoods
  },
  {
    path: '/Video',
    name: 'Video',
    component: Video
  },
  {
    path: '/SuccessPay',
    name: 'SuccessPay',
    component: SuccessPay
  },
  {
    path: '/Callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/TeacherRoom',
    name: 'TeacherRoom',
    component: TeacherRoom
  },
  {
    path: '/StudentRoom',
    name: 'StudentRoom',
    component: StudentRoom
  },
  {
    path: '/TeacherRoomMessage',
    name: 'TeacherRoomMessage',
    component: TeacherRoomMessage
  },
  {
    path: '/StudentRoomMessage',
    name: 'StudentRoomMessage',
    component: StudentRoomMessage
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   let loginName = sessionStorage.getItem('loginName');
//   let password = sessionStorage.getItem('password');
//   //管理员直接登录
//   if (loginName == 'admin' && password == '123456') {
//     next();
//   }
//   const token = sessionStorage.getItem('token');
//   //跳过不需要守卫的
//   if (to.meta.requiresAuth === false) {
//     console.info(111)
//     next();
//   } else {
//     console.info(222)

//     if (!token || token == 'undefined') {
//       console.info(333)
//       return;
//     } else {
//       console.info(444)

//       //验证token
//       axios.post(`${process.env.VUE_APP_BASEURL}/sys-user/auth/${token}`).then((resp) => {
//         let data = resp.data;
//         console.info( data);
//         if (data.success) {
//           //设置新token
//           sessionStorage.setItem('token', data.content)
//           next();
//         }
//         else {
//           return;
//         }
//       })
//     }
//   }
// })

export default router
