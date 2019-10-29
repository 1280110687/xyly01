<template>
  <!-- 这个组件是搜索机票的大盒子 -->
  <div class="air_contain">
    <div class="air_title">
      <i class="iconfont iconfeiji"></i>
      国内机票
    </div>
    <div class="air_form">
      <div class="air_search">
        <SearchForm/>
      </div>
      <div class="air_img">
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/air/SearchForm"
export default {
  components: {
    SearchForm
  }
}
</script>

<style lang="less" scoped>
.air_contain{
  width: 1000px;
  margin: 0 auto;
}
.air_title{
  padding: 20px 0;
  color: orange;
  font-size: 22px;
  .iconfont{
    font-size: inherit;
  }
}
.air_form{
  display: flex;
  justify-content: space-between;
  .air_search{
    width: 360px;
    border: 1px solid #ccc;
    height: 350px;
  }
}

</style>