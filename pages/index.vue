<template>
  <div class="xyly_index">
    <!-- 轮播图 开始 -->
    <div class="index_carousel">
      <el-carousel height="700px">
        <el-carousel-item v-for="(item,index) in swiperList" :key="index">
          <div :style="`background:url(${$axios.defaults.baseURL+item.url}) center;height: 700px`"></div>
        </el-carousel-item>
      </el-carousel>
      <!-- tabs栏 开始 -->
      <div class="index_tabs">
        <TypesTab/>
      </div>
      <!-- tabs栏 结束 -->
    </div>
  </div>
</template>

<script>
import TypesTab from "@/components/index/TypesTab"
export default {
  components: {
    TypesTab
  },
  data () {
    return {
      swiperList: []
    }
  },
  asyncData (context) {
    const $axios = context.app.$axios
    return $axios.get('/scenics/banners').then(res => {
      // console.log(res)
      return {
        swiperList: res.data.data
      }
    })
  }
  // mounted () {
  //  // 获取首页 轮播图 数据
  //   this.$axios.get("/scenics/banners")
  //   .then(res => {
  //     console.log(res)
  //     if (res.status === 200) {
  //       this.swiperList = res.data.data
  //     }
  //   })
  // }
}
</script>

<style lang="less" scoped>
.xyly_index {
  min-width: 1000px;
  .index_carousel {
    position: relative;
    .index_tabs {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
    }
  }
}
</style>
