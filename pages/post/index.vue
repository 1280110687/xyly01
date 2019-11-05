<template>
  <div class="post">
    <div class="post_mian">
      <!-- 旅游攻略左侧栏  开始-->
      <div class="post_left">
        <postLeft />
      </div>
      <!-- 旅游攻略左侧栏  结束-->
      <!-- 旅游攻略主体  开始 -->
      <div class="post_content">
        <postContent/>
      </div>
      <!-- 旅游攻略主体  结束 -->
    </div>
  </div>
</template>
<script>
import postLeft from "@/components/post/postLeft"
import postContent from "@/components/post/postContent"
export default {
  components: {
    postLeft, postContent
  },
  // asyncData (context) {
  //   const $axios = context.app.$axios
  //   return $axios.get('/posts/cities').then(res => {
  //     console.log(res)
  //     return {
  //       cityList: res.data.data
  //     }
  //   })
  // },
  mounted () {
    this.$axios.get('/posts/cities').then(res => {
      // console.log(res)
      this.cityList = res.data.data
    })
  }
}
</script>
<style lang="less" scoped>
.post {
  
  .post_mian {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    .post_left {
      flex: 3;
    }
    .post_content {
      flex: 7;
      margin-left: 40px;
    }
  }
}
</style>
