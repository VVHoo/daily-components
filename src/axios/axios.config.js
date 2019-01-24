import axios from 'axios'

// axios.defaults.baseURL = 'http://apps.mingshiedu.com/'
axios.defaults.baseURL = 'http://192.168.12.6:20001/'
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求返回值转成json
axios.defaults.transformResponse = [function (data) {
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}]

const queue = [] // 请求队列
const CancelToken = axios.CancelToken // 内置中断方法
const token = (config) => {
  return `${config.url}_${config.method}`
}
const removeQueue = (config, index) => {
  queue.map(item => {
    const task = item
    if (item.token === token(config)) {
      task.cancel()
      queue.splice(index, 1)
    }
  })
}
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  removeQueue(config)
  config.cancelToken = new CancelToken((c) => {
    queue.push({ token: token(config), cancel: c })
  })
  // 在发送请求之前做某件事
  // config.headers.app = -1
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  removeQueue(response.config)
  return response
}, function (error) {
  return Promise.reject(error)
})
axios.defaults.timeout = 10000 // 请求超时毫秒数

export default axios
