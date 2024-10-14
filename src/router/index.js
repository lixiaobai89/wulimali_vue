import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Shanyang from '../views/Shanyang.vue'
import CompoundInterestCalculator from '../views/CompoundInterestCalculator.vue'
import LoanAmortizationCalculator from '../views/LoanAmortizationCalculator.vue'
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
    path: '/Shanyang',
    name: 'Shanyang',
    component: Shanyang
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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  //跳过不需要守卫的
  if (to.meta.requiresAuth === false) {
    next();
  } else {
    if (!token || token == 'undefined') {
      //token不存在则去登录
      next({ path: '/' });
    } else {
      //验证token
      axios.post(`${process.env.VUE_APP_BASEURL}/sys-user/auth/${token}`).then((resp) => {
        let data = resp.data;
        console.info( data);
        if (data.success) {
          //设置新token
          sessionStorage.setItem('token', data.content)
          next();
        }
        else {
          next({ path: '/' });
        }
      })
    }
  }
})

export default router
