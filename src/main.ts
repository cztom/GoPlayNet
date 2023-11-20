import './assets/main.css'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

async function asyncRegister() {
  const createPinia = (await import('pinia')).createPinia
  app.use(createPinia())

  const router = (await import('@/router')).default
  app.use(router)

  app.mount('#app')
}

asyncRegister()
