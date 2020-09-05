import axios from 'axios'
import qs from 'qs'
// 引入loading加载动画
import { Loading } from 'element-ui'

// 自定义动画函数
let loading
const startLoading = () => {
  /* 开场动画 */
  loading = Loading.service({
    lock: true,
    background: 'rgba(245,239,239, 1)'
  })
}
const endLoading = () => {
  /* 结束动画 */
  loading.close()
}

// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || 'http://lawfirm.gzbigbang.cn/lsmswebsite', // url = base url + request url
  withCredentials: false, // 是否允许携带cookie
  timeout: 30000, // 超时时间
  // 全局配置使用qs
  transformRequest: [(data) => {
    return qs.stringify({ ...data })
  }]
})
// request interceptor(拦截器)
service.interceptors.request.use(
  config => {
    startLoading()
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    endLoading()
    return response.data
  },
  error => {
    endLoading()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
