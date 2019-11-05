<template>
  <div class="hotelHeader">
    <div class="header_main">
      <!-- 面包屑 -->
      <div class="header_bum">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
          <el-breadcrumb-item>xxx酒店预订</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 酒店筛选  begin -->
      <div class="header_flights">
        <div class="flights_city">
          <el-autocomplete :fetch-suggestions="querySearchAsync" placeholder="请输入内容"></el-autocomplete>
        </div>
        <div class="flights_time">
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="-"
            start-placeholder="入住日期"
            end-placeholder="离店日期"
          ></el-date-picker>
        </div>
        <div class="flights_person">
          <el-input placeholder="人数" suffix-icon="el-input__icon iconfont iconuser" v-model="input2"></el-input>
        </div>
        .
      </div>
      <!-- 酒店筛选  end -->
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.hotelHeader {
  .header_main {
    .header_bum {
    }
    .header_flights {
      display: flex;
      .flights_city {

      }
      .flights_time {
        margin: 0 10px 0 20px;
      }
      .flights_person {

      }
    }
  }
}
</style>
