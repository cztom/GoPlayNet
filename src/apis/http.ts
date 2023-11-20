import router from '@/router'
import axios, { AxiosError } from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { ElMessage, ElLoading } from 'element-plus'

export const httpInstance = axios.create()
export type ApiResponse = {
  statusCode: number
  status: true
  message: string
  data: any
}

//设置请求路径
httpInstance.defaults.baseURL = import.meta.env.VITE_BASEURL

//配置响应拦截器
export const $http = async (config: AxiosRequestConfig) => {
  const loadingInstance = ElLoading.service()
  console.log(1)
  try {
    const axiosResponse = await httpInstance<ApiResponse>(config)
    console.log(2)
    console.log(axiosResponse)
    const apiResponse = axiosResponse.data
    if (!axiosResponse?.status) {
      console.log(axiosResponse.status)
      let errTitle: string = 'Error'
      if (apiResponse.statusCode === 400) {
        errTitle = '错误'
        ElMessage.error(axiosResponse.statusText)
      } else if (apiResponse.statusCode === 401) {
        errTitle = 'Unauthorized'
        ElMessage.error('未授权，请先登录')
        router.push('/account/login')
      } else if (apiResponse.statusCode === 403) {
        errTitle = 'Forbidden'
      } else if (apiResponse.statusCode === 500) {
        errTitle = 'ServerError'
      } else if (apiResponse.statusCode === 9999) {
        errTitle = 'Error 9999'
      } else {
        errTitle = 'Unknown'
      }

      const err = new Error(apiResponse?.message || 'Unknown')
      err.name = errTitle
      throw err
    }
    return apiResponse
  } catch (err) {
    console.log(3)
    if (err instanceof AxiosError) {
      console.log(err.response)
      if (err.response) {
        if (err.response.data.statusCode === 400) {
          ElMessage.error(err.response.data.message)
        }
        if (err.response.data.statusCode === 401) {
          ElMessage.error(err.response.data.message)
          router.push('/account/login')
        } else if (err.response.data.statusCode === 403) {
          ElMessage.error(err.response.data.message)
        } else if (err.response.data.statusCode === 500) {
          ElMessage.error(err.response.data.message)
        }
      } else {
        ElMessage.error('网络错误')
      }
    }
    throw err
  } finally {
    loadingInstance.close()
  }
}
