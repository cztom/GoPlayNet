<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>  
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/about">关于我们</RouterLink>
        <RouterLink to="/account/login">我要登录</RouterLink>
      </nav>
    </div>
  </header>
</template>
