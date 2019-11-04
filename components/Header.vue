<template>
  <div class="header">
    <div class="main">
      <div class="main_pages">
        <nuxt-link to="/" class="pages_logo">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
        <nuxt-link class="pages_item" to="/">首页</nuxt-link>
        <nuxt-link class="pages_item" to="/post">旅游攻略</nuxt-link>
        <nuxt-link class="pages_item" to="/hotel">酒店</nuxt-link>
        <nuxt-link class="pages_item" to="/air">国内机票</nuxt-link>
      </div>
      <div class="main_login">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-bell"></i> 消息
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <nuxt-link class="login_link" to="/user/login/0">
          <div v-if="userinfo.token" class="login_user">
            <el-dropdown>
              <div class="el-dropdown-link">
                <img :src="$axios.defaults.baseURL+userinfo.user.defaultAvatar" alt />
                <span>{{userinfo.user.nickname}}</span>
                <i class="el-icon-caret-bottom"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>
                  <div @click="handleLogout">退出</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div v-else class="login_text">登录 / 注册</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userinfo () {
      return this.$store.state.user.userinfo
    }
  },
  mounted () {

    let userStr = localStorage.getItem("userinfo");
    if (userStr) {
      console.log(userStr)
      // 存在 
      let userinfo = JSON.parse(userStr);
      // 把值设置到vuex
      this.$store.commit("user/setUser", userinfo);
    }
  },
  methods: {
    handleLogout () {
      // 1  删除 vuex 中的用户信息
      // 2  删除 本地 存储的数据
      this.$store.commit('user/setUser', {token:'',user:{}}) //把token为空值 和 user为空对象 传回修改vuex中的数据
      localStorage.removeItem('userinfo') // 删除本地数据
      this.$message.success('退出成功')
      setTimeout(() => {
        this.$router.push('/user/login/0')
      }, 500);
    }
  }
}
</script>

<style lang="less"  scoped>
.header {
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 1px 4px 1px #ccc;
  a {
    text-decoration: none;
    // 继承父元素的字体颜色   div标签的 字体 就是这个值
    color: inherit;
  }
  .main {
    width: 1000px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .main_pages {
    display: flex;

    .pages_item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;

      &:hover {
        color: #0094ff;
        background-color: #fff;
        // border-bottom: 5px solid  #0094ff;
        // currentColor = 当前字体的颜色
        // border-bottom: 5px solid  currentColor;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background-color: #0094ff;
        }
      }
    }
    .nuxt-link-exact-active {
      color: #fff !important;
      background-color: #0094ff !important;
    }
    .pages_logo {
      background-color: #fff !important;
      display: flex;
      align-items: center;
      img {
        width: 156px;
      }
    }
  }
  .main_login {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .login_link {
      font-size: 13px;
      color: #666;
      margin-left: 15px;
      &:hover {
        color: #0094ff;
      }
    }
  }
}

.login_user {
  .el-dropdown-link {
    img {
      width: 36px;
    }
    display: flex;
    align-items: center;
  }
}
</style>