<template>
  <div class="order">
    <div class="order_main">
      <orderForm :airTicket="airTicket" />
    </div>
    <div class="order_aside">
      <orderBill :data="airTicket" />
    </div>
  </div>
</template>
<script>
import orderForm from "@/components/air/orderForm"
import orderBill from "@/components/air/orderBill"
export default {
  components: {
    orderForm, orderBill
  },
  data () {
    return {
      airTicket: {}
    }
  },
  mounted () {
    // http://127.0.0.1:1337/airs/167?seat_xid=557f1a56db044b4d450ace41fb401d6b
    // 由于接口传参方式的特殊性 ， 所以传参时需要拼接一下
    // console.log(this.$route.query)
    this.$axios.get('/airs/' + this.$route.query.id, {
      params: { seat_xid: this.$route.query.seat_xid }
    })
      .then(res => {
        console.log(res) // 这里可以拿到需要的所有数据
        this.airTicket = res.data
      })

  }
}
</script>
<style lang="less" scoped>
.order {
  width: 1000px;
  margin: 0 auto;
  display: flex;
}
.order_main {
  flex: 2;
}
.order_aside {
  flex: 1;
}
</style>
