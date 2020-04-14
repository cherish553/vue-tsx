import { get } from '@/plugin/axios/'
import { LoginData, LoginParams } from '@/interface'

// 登录
export const login = (data: LoginParams): Promise<LoginData> =>
  get('/user/login', data)
//   // 获取qiniuyun的token
//   getToken: _ => http.get('/user/getQiniuToken'),
//   // 删除qiniu文件
//   delFile: key => http.delete(`/user/delQiniuFile/${key}`)
