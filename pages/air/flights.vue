<template>
  <div class="flights">
    <!-- 正文 开始 -->
    <div class="flights_main">
      <!-- 筛选模块 开始 -->
      <FlightsFliter v-if="false"/>
      <!-- 筛选模块 结束 -->

      <!-- 表单头部 开始 -->
      <FlightsHead/>
      <!-- 表单头部 结束 -->

      <!-- 机票列表 开始 -->
      <FlightsItem/>
      <FlightsItem/>
      <!-- 机票列表 结束 -->
    </div>
    <!-- 正文 结束 -->

    <!-- 侧边栏 开始 -->
    <div class="flights_aside">2</div>
    <!-- 侧边栏 结束 -->
  </div>
</template>
<script>
import FlightsFliter from "@/components/air/FlightsFliter"
import FlightsHead from "@/components/air/FlightsHead"
import FlightsItem from "@/components/air/FlightsItem"
export default {
  components: {
    FlightsFliter, FlightsHead, FlightsItem
  }
}
</script>
<style lang="less" scoped>
.flights {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  .flights_main {
    flex: 5;
  }
  .flights_aside {
    flex: 2;
  }
}
</style>
