<template>
  <div class="flights_item">
    <div class="item_main">
      <div class="item_name">上航FM9316</div>
      <div class="item_depart_date">
        <p>19:30</p>
        <p>白云机场T1</p>
      </div>
      <div class="duration">2时20分</div>
      <div class="item_dest_date">
        <p>19:30</p>
        <p>白云机场T1</p>
      </div>
      <div class="item_price">
        <p>
          ￥
          <span>800</span>起
        </p>
      </div>
    </div>
    <div class="item_info">
      <div class="item_low">低价推荐</div>
      <div class="item_seat">
        <div class="seat_row">
          <div class="seat_row_name">
            <span>经济舱</span> | 上海一诺千金航空服务有限公司
          </div>
          <div class="seat_row_price">$1999</div>
          <div class="seat_row_btns">
            <div>
              <el-button type="warning" size="mini">选定</el-button>
              <p>剩余:99</p>
            </div>
          </div>
        </div>
        <div class="seat_row">
          <div class="seat_row_name">
            <span>经济舱</span> | 上海一诺千金航空服务有限公司
          </div>
          <div class="seat_row_price">$1999</div>
          <div class="seat_row_btns">
            <div>
              <el-button type="warning" size="mini">选定</el-button>
              <p>剩余:99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

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
        border-bottom: 1px solid #000;
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
