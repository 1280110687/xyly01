<template>
  <div class="flights">
    <!-- 正文 开始 -->
    <div class="flights_main">
      <!-- 筛选模块 开始 -->
      <FlightsFliter v-if="false" />
      <!-- 筛选模块 结束 -->

      <!-- 表单头部 开始 -->
      <FlightsHead />
      <!-- 表单头部 结束 -->

      <!-- 机票列表 开始 -->
      <div class="air_list">
        <div class="nothingness" v-if="nodata">抱歉！暂无该航班。/(ㄒoㄒ)/~~</div>
        <FlightsItem v-for="(item) in flightsData.flights" :key="item.id" :data="item" />
      </div>
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
  },
  data () {
    return {
      flightsData: {
        // 机票列表数组
        flights: [],
        info: {},
        option: {}
      },
      nodata: false
    }
  },
  methods: {
    // 获取机票数据
    getList () {
      let form = this.$route.query
      this.$axios.get('/airs', { params: form })
        .then(res => {
          console.log(res)
          if (res.data.flights.length == 0) {
            this.$message.warning('暂无该航班')
            this.nodata = true
          } else {
            this.flightsData = res.data
          }

        })
    }
  },
  mounted () {
    this.getList()
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
  .air_list {
    .nothingness {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>
