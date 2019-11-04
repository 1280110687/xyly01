<template>
  <div class="hotel">
    <!-- 酒店预订开始 -->
    <div class="bourn">
      <!-- 酒店搜索 -->
      <SearchForm :hotelList='hotelList'/>
      <!-- 酒店类型筛选 -->
      <HotelType :hotelList="hotelList" />
    </div>
    <!-- 酒店预订结束 -->
  </div>
</template>
<script>
import SearchForm from '@/components/hotel/SearchForm'
import HotelType from '@/components/hotel/HotelType'
export default {
  data() {
    return {
      hotelList: {}
    }
  },
  components: {
    SearchForm,
    HotelType
  },
  methods: {
    //获取酒店数据
    getList() {
      this.$axios.get('/hotels').then(res => {
        this.hotelList = res.data
        console.log(this.hotelList)
      })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.hotel {
  margin: 0 auto;
  width: 1000px;
}
</style>
