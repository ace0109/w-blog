export default function({ $axios, redirect }) {
  $axios.defaults.timeout = 30000
  $axios.defaults.baseURL = process.env.BASE_URL || 'http://api.wangcaiyuan.cn'
  $axios.defaults.headers.post['Content-Type'] = 'application/json'

  $axios.interceptors.request.use(config => {
    config.headers['Authorization'] = 'wangcaiyuan'
    return config
  })
  $axios.interceptors.response.use(
    res => {
      return res
    },
    err => {
      if (err.response && err.response.status !== 200) {
        return Promise.reject('服务器开小差了，请稍后重试')
      }
      return Promise.reject(String(err))
    }
  )
}
