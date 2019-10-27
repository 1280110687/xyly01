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
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <nuxt-link class="login_link" to="/user/login">登录 / 注册</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less"  scoped>
.header {
  border-bottom: 1px solid #ccc;
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
          height: 4px;
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
</style>