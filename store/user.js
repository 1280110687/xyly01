//1, 定义 state 函数 返回对象 名称不能改
export const state = () => ({
  // this.$store.state.user.userinfo.user.nickname
  userinfo: {
    token: '',
    user: {}
  }
})
//2, 定义 mutations 
export const mutations = {
  setUser (state, userinfo) {
    state.userinfo = userinfo
  }
}
//3, 定义 actions 负责异步
export const actions = {
  setUser (context, form) {
    // this.$axios.post  执行完毕后就会返回一个promise对象 
    // 第一个return是必须的  文档所规定 
    return this.$axios.post('/accounts/login', form)
      .then(res => {
        // console.log(res)
        context.commit('setUser', res.data)
        // 把 用户信息 存入 本地存储中
        localStorage.setItem("userinfo", JSON.stringify(res.data));
        // console.log(123)
        return res.data
      })
  }
}