import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import i18n from "./i18n"
import CountryFlag from 'vue-country-flag';
import LanguageSwitcher from './components/LanguageSwitcher';
import axios from '@/services/axios'; // Import your Axios instance

Vue.prototype.axios = axios // Attach the Axios instance to the Vue prototype
Vue.prototype.$baseUrl = process.env.VUE_APP_BASEURL
Vue.prototype.$baseUrl_api = process.env.VUE_APP_BASEURL_API

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(CountryFlag)
Vue.component('LanguageSwitcher', LanguageSwitcher)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
