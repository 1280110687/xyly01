<template>
  <div class="hotel">
    <div class="hotel_main">
      <!-- 头部 -- 面包屑和筛选 -->
      <hotelHeader />
    </div>
  </div>
</template>
<script>
import hotelHeader from "@/components/hotel/hotelHeader"
export default {
  components: {
    hotelHeader
  }
}
</script>
<style lang="less" scoped>
.hotel {
  .hotel_main {
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
