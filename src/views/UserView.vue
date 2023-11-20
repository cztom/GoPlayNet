<script setup lang="ts">
import router from '@/router'
import { ElMessageBox } from 'element-plus'

const logout = () => {
  ElMessageBox.confirm('您确定要退出登录吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      router.push('/account/logout')
    })
    .catch(() => {})
}
</script>

<template>
  <main id="profile">
    <h1>个人中心</h1>
    <a href="javascript:;" @click="logout">我要登出</a>
  </main>
</template>

<style scoped lang="scss">
#profile {
  margin: 100px auto 50px;
  text-align: center;
}
</style>
