<template>
  <div class="login">
    <div class="login_main">
      <div class="login_main_title">
        <div
          class="title_item"
          :class="currentIndex==index?'active':''"
          @click="$router.push('/user/login/'+index)"
          v-for="(item,index) in ['登录','注册']"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="login_main_content">
        <!-- 登录组件 -->
        <div v-if="currentIndex==0">
          <LoginForm />
        </div>
        <!-- 注册组件 -->
        <div v-else>
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/user/LoginForm";
import RegisterForm from "@/components/user/RegisterForm";

export default {
  data () {
    return {
      currentIndex: this.$route.params.id
    }
  },
  components: {
    LoginForm,
    RegisterForm
  },
  // mounted () {
  //   console.log(this.$route.params.id)
  //   console.log(this.$route.params)
  //   console.log(this.$route)
  // }
}
</script>
<style lang="less" scoped>
.login {
  position: relative;
  height: 700px;
  min-width: 1000px;
  background: url(http://127.1:1337/assets/images/th03.jfif) center;
  .login_main {
    position: absolute;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login_main_title {
      display: flex;
      height: 50px;
      color: #666;
      background-color: #eee;
      .title_item {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .active {
        color: orange;
        position: relative;
        background-color: #fff;
        font-weight: 600;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: orange;
        }
      }
    }
  }
}
.login_main_content {
  background-color: #fff;
  padding: 24px;
}
</style>
