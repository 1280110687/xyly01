<template>
  <div class="search_form">
    <div class="search_title">
      <div
        class="title_item"
        v-for="(item, index) in ['单程', '往返']"
        :key="index"
        :class="currentIndex===index?'active':''"
      >{{item}}</div>
    </div>
    <div class="search_content">
      <el-form label-width="80px">
        <el-form-item label="出发城市">
          <el-autocomplete :fetch-suggestions="querySearchAsync" v-model="form.departCity"></el-autocomplete>
        </el-form-item>
        <!-- 换 -->
        <div class="city_change">换</div>
        <!-- 换 -->
        <el-form-item label="到达城市">
          <el-autocomplete :fetch-suggestions="querySearchAsync" v-model="form.destCity"></el-autocomplete>
        </el-form-item>
        <el-form-item label="出发时间">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            style="width: 100%;"
            v-model="form.departDate"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      form: {
        //  出发城市
        departCity: "",
        // 出发城市 编码
        departCode: "",
        // 到达城市
        destCity: "",
        // 到达城市 编码
        destCode: "",
        // 出发时间
        departDate: ""
      }
    }
  },
  methods: {
    // 搜索建议的输入  事件
    querySearchAsync (queryString, callback) {
      // queryString = 当前输入框的值
      // 把关键字 “广” 发送请求
      // callback()
      // console.log(queryString)
      if (queryString) {
        this.$axios
          .get('/airs/city', { params: { name: queryString } })
          .then(res => {
            console.log(res)
            let cityArr = res.data.data
            cityArr.forEach(v => {
              v.value = v.name
            })
            callback(cityArr)
          })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search_form {
}

.search_title {
  height: 50px;
  background-color: #fff;
  display: flex;
  .title_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
  .active {
    background-color: #fff;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      top: 0;
      left: 0;
      background-color: orange;
    }
  }
}
.search_content {
  padding: 20px 50px 20px 25px;
  position: relative;
  .city_change {
    position: absolute;
    background-color: #666;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 13px;
    right: 11px;
    top: 59px;
    cursor: pointer;
    &::before {
      content: '';
      width: 30px;
      height: 19px;
      border: 1px solid #ccc;
      border-left: none;
      border-bottom: none;
      position: absolute;
      top: -20px;
      left: -20px;
    }
    &::after {
      content: '';
      width: 30px;
      height: 19px;
      border: 1px solid #ccc;
      border-left: none;
      border-top: none;
      position: absolute;
      bottom: -20px;
      left: -20px;
    }
  }
}
</style>
