<script setup lang="ts">
import { useTokenStore } from '@/stores/tokenStore'
import { ref } from 'vue'
const tokenStore = useTokenStore()
const logout = () => {
  tokenStore.removeAuth()
}

const totalTime = ref(3)
const refreshData = window.setInterval(function () {
  totalTime.value--
  if (totalTime.value < 0) {
    //当倒计时小于0时清除定时器
    window.clearInterval(refreshData) //清除定时器
    tokenStore.removeAuth()
    totalTime.value = 3
  }
}, 1000)
setTimeout(logout, 3000)
</script>
<template>
  <div style="margin: 200px auto 10px; text-align: center">请稍候，您正在退出登录...</div>
  <div style="margin: 0 auto; text-align: center" id="seconds"><span class="bold">{{ totalTime }}</span>秒后登出</div>
</template>

<style scoped lang="scss">
.bold {
    font-weight: 700;
    color:#f00;
}
</style>