import axios from 'axios'
import { Warn, Error, ErrorStatus } from './util'
import Cookies from 'js-cookie'
const http = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
})

http.interceptors.request.use(
  config => {
    const token = Cookies.get('token')
    if (token) config.headers['token'] = token
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
    if (code === 0) return data
    const token = Cookies.get('token')
    return Warn(message), token ? Cookies.remove('token') : '', false
  },
  error => {
    if (error && error.response) {
      const errMessage = ErrorStatus[error.response.status]
      if (errMessage) error.message = errMessage
    }
    Error(error.message)
    return Promise.resolve(false)
  }
)
export const get = (url: string, params: object) => http.get(url, { params })
export const post = http.post
export const put = http.put
export const del = http.delete
