<template>
  <div class="flights">
    <!-- 正文 开始 -->
    <div class="flights_main">
      <!-- 筛选模块 开始 -->
      <FlightsFliter
        v-if="flightsData.flights.length"
        :info="flightsData.info"
        :options="flightsData.options"
      />
      <!-- 筛选模块 结束 -->

      <!-- 表单头部 开始 -->
      <FlightsHead />
      <!-- 表单头部 结束 -->

      <!-- 机票列表 开始 -->
      <div class="air_list">
        <div class="nothingness" v-if="nodata">抱歉！暂无该航班。/(ㄒoㄒ)/~~</div>
        <FlightsItem v-for="(item) in currentFlights" :key="item.id" :data="item" />
      </div>
      <!-- 机票列表 结束 -->

      <!-- 分页组件  开始 -->
      <div>
        <!-- 
          :current-page  当前的页码 
          :page-sizes= 页容量 数组 
          :page-size  当前 页容量 
          @size-change 页容量改变事件 
          @current-change 页码改变事件 
        -->
        <el-pagination
          :current-page="page.currentPage"
          :page-sizes="page.pageSizes"
          :page-size="page.pageSize"
          :total="page.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="total, sizes, prev, pager, next, jumper"
        ></el-pagination>
      </div>
      <!-- 分页组件  结束 -->
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
      nodata: false,
      // 分页对象
      page: {
        // 当前页码
        currentPage: 1,
        // 页容量数组
        pageSizes: [1, 2, 5, 10, 20, 100],
        // 页容量
        pageSize: 2,
        // 总条数
        total: 1
      },
      // 被分页后的 机票列表
      currentFlights: [],
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
          }
          this.flightsData = res.data
          this.page.total = this.flightsData.total
          // 需要将 数组 this.flightsData.flights 进行分页
          // 使用 slice() 获取数组中的某段 ， 且 不改变原数组的值
          // let list = totalList.slice( (当前的页码 - 1) * 当前的页容量, 当前的页码 * 当前的页容量)
          this.currentFlights = this.flightsData.flights.slice(
            (this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize
          )
        })
    },
    // 页容量改变事件
    handleSizeChange (value) {
      // 选择页容量
      // console.log(value)
      this.page.pageSize = value
      this.currentFlights = this.flightsData.flights.slice(
        (this.page.currentPage - 1) * this.page.pageSize,
        this.page.currentPage * this.page.pageSize
      )
    },
    // 当前页码改变事件
    handleCurrentChange (value) {
      // 选择后的页码数
      this.page.currentPage = value
      this.currentFlights = this.flightsData.flights.slice(
        (this.page.currentPage - 1) * this.page.pageSize,
        this.page.currentPage * this.page.pageSize
      )
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
