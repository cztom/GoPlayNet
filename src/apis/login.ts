import { $http } from './http'


//api请求数据来源: https://fakeapi.platzi.com/en/rest/auth-jwt/#authentication
export const loginApi = (data: any) => {
  return $http({
    method: 'POST',
    url: '/auth/login',
    data
  })
}
