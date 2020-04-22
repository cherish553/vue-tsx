/** 登录响应数据 */
export interface LoginData {
  name: string
  token: string
}
/** 登录请求数据 */
export interface LoginParams {
  userName: string
  passWord: string
}
export type MenuList = {
  iClass: string
  spanText: string
  url: string
}
