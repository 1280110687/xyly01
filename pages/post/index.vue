<template>
  <div class="post">
    <div class="post_mian">
    <!-- 旅游攻略左侧栏  开始-->
    <div class="post_left">
      <postLeft/>
    </div>
    <!-- 旅游攻略左侧栏  结束-->
    <!-- 旅游攻略主体  开始 -->
    <div class="post_content">

    </div>
    <!-- 旅游攻略主体  结束 -->
    </div>
  </div>
</template>
<script>
import postLeft from "@/components/post/postLeft"
export default {
components: {
  postLeft
}
}
</script>
<style lang="less" scoped>
.post {
  .post_mian {
    width: 1000px;
    margin: 0 auto;
    .post_left {

    }
  }
}
</style>
