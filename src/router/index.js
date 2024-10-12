import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Shanyang from '../views/Shanyang.vue'
import CompoundInterestCalculator from '../views/CompoundInterestCalculator.vue'
import LoanAmortizationCalculator from '../views/LoanAmortizationCalculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
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
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
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
  routes
})

export default router
