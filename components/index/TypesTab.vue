<template>
  <div class="types_tab">
    <div class="types_tab_title">
      <div
        @click="titleChange(index)"
        class="title_item"
        :class="index === currentIndex?'active':''"
        v-for="(item, index) in titles"
        :key="index"
      >{{item.text}}</div>
    </div>
    <div class="types_tab_content">
      <input type="text" :placeholder="titles[currentIndex].ph" />
      <div @click="hotelSearch">
        <i class="el-icon-search"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titles: [
        { text: '攻略', ph: '请输入想去的城市' },
        { text: '酒店', ph: '请输入酒店名称' },
        { text: '机票', ph: '请输入地址' }
      ],
      currentIndex: 0,
      hotelList: {},
      jiudian:{}
    }
  },
  methods: {
    titleChange(index) {
      this.currentIndex = index
      if (index === 2) {
        this.$router.push('/air')
      }
    },
    //酒店搜索
    hotelSearch() {
      let input = document.querySelector('input')
      let value = input.value
      // if(value === this.hotelList.)
    }
  },
  mounted() {
    //获取城市id
    this.$axios.get('/hotels').then(res => {
      this.hotelList = res.data
      console.log(this.hotelList)
    })
    this.$axios.get('/hotels/options').then(res => {
      this.jiudian = res.data
      console.log(this.jiudian)
    })
  }
}
</script>
<style lang="less" scoped>
.types_tab {
  width: 550px;
  .types_tab_title {
    height: 40px;
    display: flex;
    .title_item {
      width: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      cursor: pointer;
    }
    .active {
      background-color: #eee;
      color: #000;
    }
  }
  .types_tab_content {
    height: 50px;
    input {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      text-indent: 14px;
      border-radius: 0px 5px 5px 5px;
      background-color: #fff;
      padding-right: 50px;
    }
    i {
      position: absolute;
      top: 56px;
      right: 24px;
      font-size: 22px;
      cursor: pointer;
    }
  }
}
</style>
