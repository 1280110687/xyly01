<template>
  <div class="flights_item">
    <div class="item_main" @click="isShow=!isShow">
      <div class="item_name">{{data.airline_name}}{{data.flight_no}} -- {{data.plane_size}}</div>
      <div class="item_depart_date">
        <p>{{data.dep_time}}</p>
        <p>{{data.org_airport_name}}{{data.org_airport_quay}}</p>
      </div>
      <div class="duration">{{duration}}</div>
      <div class="item_dest_date">
        <p>{{data.arr_time}}</p>
        <p>{{data.dst_airport_name}}{{data.dst_airport_quay}}</p>
      </div>
      <div class="item_price">
        <p>
          ￥
          <span>{{data.base_price * 0.4}}</span>起
        </p>
      </div>
    </div>
    <div class="item_info" v-show="isShow">
      <div class="item_low">低价推荐</div>
      <div class="item_seat">
        <!-- 循环 显示 -->
        <div class="seat_row" v-for="(item, index) in data.seat_infos" :key="index">
          <div class="seat_row_name">
            <span>{{item.name}}</span> | {{item.supplierName}}
          </div>
          <div class="seat_row_price">￥{{item.settle_price}}</div>
          <div class="seat_row_btns">
            <div>
              <el-button type="warning" size="mini">选定</el-button>
              <p>剩余:{{item.discount}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      isShow: false
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
  }
}
</script>
<style lang="less" scoped>
/* css tree  */
.flights_item {
  border: 1px solid #e5e5e5;
  margin: 10px 0;

  .item_main {
    height: 80px;
    background-color: #fff;
    display: flex;
    position: relative;
    > div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .item_name {
      font-size: 13px;
    }

    .item_depart_date,
    .item_dest_date {
      p:nth-child(1) {
        font-size: 25px;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #666;
      }
    }

    .item_price {
      span {
        color: orange;
        font-size: 20px;
      }
    }
    .duration {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
      color: #666;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
  }

  .item_info {
    background-color: #f6f6f6;
    display: flex;
    .item_low {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }

    .item_seat {
      flex: 5;
      .seat_row {
        height: 70px;
        display: flex;
        border-bottom: 1px solid #ccc;
        &:last-child {
          border-bottom: none;
        }
        > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .seat_row_name {
          flex: 4;
          font-size: 13px;
          span {
            color: green;
          }
        }

        .seat_row_price {
          flex: 1;
          font-size: 18px;
          color: orange;
        }

        .seat_row_btns {
          flex: 1;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
