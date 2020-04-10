import axios from 'axios'
import { Warn, Error, ErrorStatus } from './util'

const http = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
})

http.interceptors.request.use(
  config => {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    const {
      data: { data, code, message },
    } = response
    if (code !== 0) return Warn(message), false
    return data
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case ErrorStatus['请求错误']:
          error.message = '请求错误'
          break
        case ErrorStatus['未授权，请登录']:
          error.message = '未授权，请登录'
          break
        case ErrorStatus['拒绝访问']:
          error.message = '拒绝访问'
          break
        case ErrorStatus['请求地址出错']:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case ErrorStatus['请求超时']:
          error.message = '请求超时'
          break
        case ErrorStatus['服务器内部错误']:
          error.message = '服务器内部错误'
          break
        case ErrorStatus['服务未实现']:
          error.message = '服务未实现'
          break
        case ErrorStatus['网关错误']:
          error.message = '网关错误'
          break
        case ErrorStatus['服务不可用']:
          error.message = '服务不可用'
          break
        case ErrorStatus['网关超时']:
          error.message = '网关超时'
          break
        case ErrorStatus['HTTP版本不受支持']:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
    }
    Error(error.message)
    return Promise.resolve(false)
  }
)
export const get = (url: string, params: object) => http.get(url, { params })
export const post = http.post
export const put = http.put
export const del = http.delete
