<template>
  <div>
    <el-button type="info">信息按钮</el-button>
    <nuxt-link to="/post">攻略</nuxt-link>
    <nuxt-link to="/hotel">酒店</nuxt-link>
    <nuxt-link to="/air">机票</nuxt-link>
    <nuxt-link to="/user/login">登录</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="less" scoped>
div {
  h1 {
    background-color: #000;
  }
}
</style>
