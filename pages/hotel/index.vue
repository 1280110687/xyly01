<template>
  <div class="hotel">
    <div class="hotel_main">
      <!-- 头部 -- 面包屑和筛选 -->
      <div class="header_main">
        <!-- 面包屑 -->
        <div class="header_bum">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
            <el-breadcrumb-item v-show="name">{{name}}市酒店预订</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <!-- 介绍 -->
      <div>
        <hotelHeader @cityName="cityName" />
      </div>
      <!-- 酒店中间筛选 -->
      <div class="hotel_fights">
        <hotelFilter :cityName="cityName"/>
      </div>
    </div>
  </div>
</template>
<script>
import hotelHeader from "@/components/hotel/hotelHeader"
import hotelFilter from "@/components/hotel/hotelFilter"
export default {
  data () {
    return {
      name: ''
    }
  },
  components: {
    hotelHeader, hotelFilter
  },
  methods: {
    cityName (cityName) {
      this.name = cityName
    }
  }
}
</script>
<style lang="less" scoped>
.hotel {
  .hotel_main {
    max-width: 1000px;
    margin: 0 auto;
    .header_main {
      .header_bum {
        padding-top: 14px;
      }
    }
  }
}
</style>
