<template>
  <div class="flights_head">
    <div class="flights_head_item">航空信息</div>
    <div class="flights_head_item">起飞时间</div>
    <div class="flights_head_item">到达时间</div>
    <div class="flights_head_item">价格</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.flights_head{
  background-color: #f6f6f6;
  height: 35px;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 13px;
  border: 1px solid #ccc;
  color: #666;
  .flights_head_item{
    flex: 1;
  }
}
</style>