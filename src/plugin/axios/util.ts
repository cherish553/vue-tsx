import vue from '@/main'
import { MessageType } from 'element-ui/types/message'
// export const message = (message: string) =>
const message = (type: MessageType) => (message: string) =>
  vue.$message({ message, type })
export const Warn = message('warning')
export const Error = message('error')
export enum ErrorStatus {
  '请求错误' = 400,
  '未授权，请登录' = 401,
  '拒绝访问' = 403,
  '请求地址出错' = 404,
  '请求超时' = 408,
  '服务器内部错误' = 500,
  '服务未实现' = 501,
  '网关错误' = 502,
  '服务不可用' = 503,
  '网关超时' = 504,
  'HTTP版本不受支持' = 505,
}
