// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import VueImg from 'vue-img'
import axios from './axios/axios.config'

Vue.config.productionTip = false
Vue.prototype.$http = axios

const protocol = window.location.protocol
// 自定义全局配置
Vue.use(VueImg, {
  loading: '',
  error: '',
  prefix: `${protocol}//apps-prd.oss-cn-shenzhen.aliyuncs.com`,
  quality: 100,
  cdn: 'ali',
  adapt: true,
  delay: 2000 // 单位ms
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
