import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja' // lang i18n
import './assets/common/index.css'

// // 引入echarts
// import echarts from 'echarts'
// // 还要特别引入china.json，这样中国地图才会出现，不然只会出现右下角的南海诸岛
// import china from 'echarts/map/json/china.json'
// echarts.registerMap('china', china)

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.prototype.$ = $
// Vue.prototype.$echarts = echarts
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
