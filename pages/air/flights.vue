<template>
  <div class="flights">
    <!-- 正文 开始 -->
    <div class="flights_main">
      <!-- 筛选模块 开始 -->
      <FlightsFliter
        v-if="flightsData.flights.length"
        :info="flightsData.info"
        :options="flightsData.options"
        @filterChange="filterChange"
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
        pageSize: 5,
        // 总条数
        total: 1
      },
      // 被分页后的 机票列表
      currentFlights: [],
      // 筛选后的数据源 第一次加载页面的时候  值 === 总的数据源
      filterList: [],
    }
  },
  methods: {
    // 获取机票数据
    getList (isFirst) {
      if (isFirst) {
        let form = this.$route.query
        this.$axios.get('/airs', { params: form }).then(res => {
          console.log(res)
          if (res.data.flights.length == 0) {
            this.$message.warning('暂无该航班')
            this.nodata = true
          }

          // 定义 所有的数据源
          this.flightsData = res.data
          // 定义 过滤后 数组 数据源 
          this.filterList = this.flightsData.flights;
          // 定义 总条数
          this.page.total = this.filterList.length
          // 需要将 数组 this.flightsData.flights 进行分页
          // 使用 slice() 获取数组中的某段 ， 且 不改变原数组的值
          // let list = totalList.slice( (当前的页码 - 1) * 当前的页容量, 当前的页码 * 当前的页容量)
          this.currentFlights = this.flightsData.flights.slice(
            (this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize
          )
        })
      } else {
        // 定义总条数 （属于过滤后的 总条数）
        this.page.total = this.filterList.length;
        // 分页
        this.currentFlights = this.filterList.slice(
          (this.page.currentPage - 1) * this.page.pageSize, // 0
          this.page.currentPage * this.page.pageSize // 2
        );
      }
    },
    // 页容量改变事件
    handleSizeChange (value) {
      // 选择页容量
      this.page.pageSize = value
      this.getList()
    },
    // 当前页码改变事件
    handleCurrentChange (value) {
      // 选择后的页码数
      this.page.currentPage = value
      this.getList()
    },
    filterChange (filterObj) {
      // {airport: "首都机场", flightTimes: "6|12", company: "国航", sizes: "M"}
      // {airport: "", flightTimes: "", company: "国航", sizes: ""}
      console.log(filterObj)
      // 1 先过滤 第一个条件 航空公司
      // 2 当 航空公司 等于 空字符串的时候 表示 不用过滤
      let filterList = this.flightsData.flights.filter(v => {
        // company == "";
        // if (filterObj.company === "") {
        //   return true;
        // }
        // console.log(v)   //filter（）过滤数组  v 是数组每一项
        // 1 航空公司的条件
        let isOk1 = filterObj.company === "" || v.airline_name === filterObj.company;
        // 2 起飞机场的条件
        let isOk2 = filterObj.airport === "" || v.org_airport_name === filterObj.airport;
        // 3 机型的条件
        let isOk3 = filterObj.sizes === "" || v.plane_size === filterObj.sizes;

        // 4 起飞时间 只拿完整数据中 起飞时间（dep_time） 和 筛选条件中的 from | to 做比较即可 (6|12)
        // 4.1 获取 条件中的 开始时间
        // 4.2 格式要注意 字符串的格式 加减运算
        let from = +filterObj.flightTimes.split("|")[0];
        let to = +filterObj.flightTimes.split("|")[1];

        // 4.3 把 6:30 ==> 6.5 格式
        let hour = +v.dep_time.split(":")[0] + +v.dep_time.split(":")[1] / 60;

        let isOk4 = filterObj.flightTimes === "" || (hour >= from && hour <= to);


        return isOk1&&isOk2&&isOk3&&isOk4;
      });

      this.filterList = filterList;
      this.getList();
    }
  },
  mounted () {
    this.getList(true)
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
