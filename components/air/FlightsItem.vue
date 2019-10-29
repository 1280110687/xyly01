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
    <div class="item_info"></div>
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
  }
}
</style>
