<template>
  <div class="login_form">
    <el-form label-position="top" label-width="80px" :model="form" ref="form">
      <el-form-item>
        <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="submitLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '13800138000',
        password: '13800138000'
      }
    }
  },
  methods: {
    submitLogin () {
      //console.log('%c'+'开心就好',"color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)")
      /* 
      1 把token 和 用户信息 都存起来 
        1 vuex 中 
        2 存到 本地存储中 
       */
      this.$store.dispatch('user/setUser', this.form)
        .then(res => {
          // console.log(res)
          this.$message.success('登录成功')
          setTimeout(() => {
            this.$router.push('/')
          }, 700);
        })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
