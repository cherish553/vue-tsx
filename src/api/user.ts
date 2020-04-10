import { post } from '@/plugin/axios/'
interface Login {
  userName: string
  passWord: string
}
// 登录
export const login = (data: Login) => post('/user/login', data)
//   // 获取qiniuyun的token
//   getToken: _ => http.get('/user/getQiniuToken'),
//   // 删除qiniu文件
//   delFile: key => http.delete(`/user/delQiniuFile/${key}`)
