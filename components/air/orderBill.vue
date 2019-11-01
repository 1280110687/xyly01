<template>
  <div class="orderBill">
    <div class="billTitle">
      <div class="title_left">
        <p>{{data.dep_date}}</p>
        <p>{{data.dep_time}}</p>
        <p>{{data.org_airport_name}}{{data.org_airport_quay}}</p>
      </div>
      <div class="title_middle">
        <p></p>
        <p>-- {{duration}} --</p>
        <p>{{data.airline_name}}{{data.flight_no}}</p>
      </div>
      <div class="title_right">
        <p>{{data.org_city_name}} - {{data.dst_city_name}}</p>
        <p>{{data.arr_time}}</p>
        <p>{{data.dst_airport_name}}{{data.dst_airport_quay}}</p>
      </div>
    </div>
    <div class="billContent">
      <div class="content_f1">
        <span>订单总价</span>
        <span>金额</span>
        <span>数量</span>
      </div>
      <div class="content_f2">
        <span>成人机票</span>
        <span>￥{{data.base_price}}</span>
        <span>x {{usersLength}}</span>
      </div>
      <div class="content_f3">
        <span>机建 + 燃油</span>
        <span>￥{{data.airport_tax_audlet}}/人/单程</span>
        <span>x {{usersLength}}</span>
      </div>
    </div>
    <div class="billTotat">
      <span>应付总额：</span>
      <span>￥{{price}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    },
    price: {
      type: Number,
      default: 0
    },
    usersLength: {
      type: Number,
      default:0
    }
  },
  computed: {
    duration () {
      let startTime = this.data.dep_datetime
      let endTime = this.data.arr_datetime
      let startDate = new Date(startTime)
      let endDate = new Date(endTime)

      let duration = endDate - startDate

      let hour = parseInt(duration / 1000 / 60 / 60)

      let minutes = duration / 1000 / 60 - hour * 60

      return `${hour}时${minutes}分`
    }
  },
}
</script>
<style lang="less" scoped>
.orderBill {
  width: 350px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 20px 0 0 20px;
  .billTitle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px dashed #ccc;
    .title_left,
    .title_right {
      p:nth-child(1) {
        font-size: 14px;
        padding-bottom: 8px;
      }
      p:nth-child(2) {
        font-size: 24px;
        padding-bottom: 6px;
      }
      p:nth-child(3) {
        font-size: 12px;
        color: #999;
      }
    }

    .title_middle {
      p:nth-child(1) {
        padding-bottom: 26px;
      }
      p:nth-child(2) {
        font-size: 13px;
        color: #999;
      }
      p:nth-child(3) {
        text-align: center;
        font-size: 12px;
        color: #999;
      }
    }
  }

  .billContent {
    display: flex;
    flex-direction: column;
    .content_f1,
    .content_f2,
    .content_f3 {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed #ccc;
      padding: 10px 0;
    }
  }

  .billTotat {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 50px;
    span:nth-child(2) {
      font-size: 30px;
      color: orange;
    }
  }
}
</style>
