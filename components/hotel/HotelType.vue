<template>
  <div class="hotel_type">
    <div class="hotel_search">
      <div class="hotel_type_price">
        <div class="range">
          <p>价格</p>
          <span>0-4000</span>
        </div>
        <div class="block">
          <span class="demonstration"></span>
          <el-slider v-model="value"></el-slider>
        </div>
      </div>
      <div class="hotel_type_grade">
        <p>住宿等级</p>
        <el-dropdown>
          <span class="el-dropdown-link">
            不限
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-circle">
              <span class="my_circle">○</span>蚵仔煎
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="hotel_type_type">
        <p>住宿类型</p>
      </div>
      <div class="hotel_type_facility">
        <p>酒店设施</p>
      </div>
      <div class="hotel_type_brand">
        <p>酒店品牌</p>
      </div>
    </div>
    <div class="hotel_list">
      <div class="hotel_list_content">
        <div class="content_letf">
          <img src='http://157.122.54.189:9093/images/pic_sale.jpeg' style="width:320px" alt />
        </div>
        <div class="content_middle">
          <h2>好来阁商务宾馆</h2>
          <p>
            hao lai ge shang wu hotel
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>经济型
          </p>
          <div class="appraise"><i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i>
          <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"><!----></i> 
          <span>3.5分</span>
          <span>67条评价</span>
          <span>26篇游记</span>
          </div>
          <div class="location">
            <i data-v-0a769ebc="" class="iconfont iconlocation"></i>
            位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
          </div>
        </div>
        <div class="content_right">
          <div class="content_right_content">
            <p>携程 <span><i>￥57</i>起</span>></p>
            <p>艺龙 <span><i>￥57</i>起</span>></p>
            <p>Hotels.com <span><i>￥57</i>起</span>></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotelList: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      value: 100
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100
    }
  },
  mounted() {}
}
</script>

<style lang='less' scoped>
.my_circle {
  color: #000;
  font-size: 28px;
}
.hotel_type {
  .hotel_search {
    display: flex;
    margin: 20px 0;
    border: 1px solid #ccc;
    padding: 5px 0;
    .hotel_type_price {
      width: 246px;
      height: 72px;
      border-right: 1px solid #ccc;
      .range {
        display: flex;
        justify-content: space-between;
      }
    }
    .hotel_type_grade {
      flex: 1;
      border-right: 1px solid #ccc;
    }
    .hotel_type_type {
      flex: 1;
      border-right: 1px solid #ccc;
    }
    .hotel_type_facility {
      flex: 1;
      border-right: 1px solid #ccc;
    }
    .hotel_type_brand,
    .hotel_type_facility,
    .hotel_type_type,
    .hotel_type_grade,
    .hotel_type_price {
      flex: 1;
      padding: 14px;
      font-size: 13px;
      color: #666;
    }
  }
  .hotel_list{
    .hotel_list_content{
      display: flex;
      justify-content: space-between  ;
      // .content_letf{

      //   }
      // .content_middle{
        
      // }
    }
  }
}
</style>