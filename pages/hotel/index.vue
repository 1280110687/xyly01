<template>
<<<<<<< HEAD
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
    <div class="hotel_main">
      <!-- 头部 -- 面包屑和筛选 -->
      <hotelHeader />
    </div>
=======
  <div>
    酒店
>>>>>>> parent of d9e9eb9... 评论的动态渲染完成
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
<<<<<<< HEAD
.hotel {
  margin: 0 auto;
  width: 1000px;
  .hotel_main {
    max-width: 1000px;
    margin: 0 auto;
  }
}
=======

>>>>>>> parent of d9e9eb9... 评论的动态渲染完成
</style>
