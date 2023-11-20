import { httpInstance } from '@/apis/http'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'
import store from '@/utils/store'

export interface Token {
  access_token: string
  refresh_token: string
}

export const useTokenStore = defineStore('token-store', () => {
  const token = ref<Token>()

  const setAuth = (data: any) => {
    httpInstance.defaults.headers.common.Authorization = `Bearer ${data.access_token}`
    const tokenStore = store.get('token')
    if (!tokenStore.value) {
      store.set('token', JSON.stringify(data), Date.now() + 30 * 1000)
    }
  }
  const authFromLocal = () => {
    const tokenStore = store.get('token')
    if (tokenStore.value){
      const tokenValue = tokenStore ? JSON.parse(tokenStore.value || '') : null
      setAuth(tokenValue)
      return true
    }
    return false
  }
  const removeAuth = (returnUrl?: string) => {
    console.log('returnUrl')
    console.log(returnUrl)
    delete httpInstance.defaults.headers.common.Authorization
    store.remove('token')
    router.push(returnUrl ? returnUrl : '/account/login')
  }

  return { token, setAuth, authFromLocal, removeAuth }
})
