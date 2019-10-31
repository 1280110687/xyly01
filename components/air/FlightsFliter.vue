<template>
  <div class="flights_filter">
    <div class="filter_main">
      <div class="main_path">单程: {{info.departCity}} - {{info.destCity}} / {{info.departDate}}</div>
      <div class="main_selects">
        <div class="select_item">
          <el-select @change="filterChange" placeholder="起飞机场" size="mini" v-model="airport">
            <el-option
              v-for="item in  filterOptions.airport"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select @change="filterChange" placeholder="起飞时间" size="mini" v-model="flightTimes">
            <el-option
              v-for="item in  filterOptions.flightTimes "
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select @change="filterChange" placeholder="航空公司" size="mini" v-model="company">
            <el-option
              v-for="item in  filterOptions.company"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select @change="filterChange" placeholder="机型" size="mini" v-model="sizes">
            <el-option
              v-for="item in   filterOptions.sizes "
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="filters_btns">
      筛选:
      <el-button type="primary" round size="mini" @click="handleClick">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {}
    }
  },
  computed: {
    // airport(){},
    filterOptions () {
      // 起飞机场
      // let airport=this.options.airport.filter(v=>v).map(v=>({value:v,label:v}));
      let airport = [];
      this.options.airport.forEach(v => {
        v && airport.push({ value: v, label: v });
      });
      // 起飞时间
      let flightTimes = this.options.flightTimes.map(v => ({
        label: `${v.from}:00 - ${v.to}:00`,
        value: v.from + "|" + v.to // 6|10
        // value:v
      }));
      // 航空公司
      let company = this.options.company.map(v => ({ value: v, label: v }));
      // 机型
      let sizes = [
        { value: "L", label: "大" },
        { value: "M", label: "中" },
        { value: "S", label: "小" }
      ];

      return { airport, flightTimes, company, sizes };
    }
  },
  methods: {
    handleClick () {
      // console.log(this.airport,this.flightTimes,this.company,this.sizes);
    },
    // 下拉框值改变事件
    filterChange () {
      // 把选中的值 发送到父组件中即可
      // console.log(this.airport,this.flightTimes,this.company,this.sizes)
      let filter = {
        airport: this.airport,
        flightTimes: this.flightTimes,
        company: this.company,
        sizes: this.sizes
      };
      this.$emit("filterChange", filter);
    }
  },
  data () {
    return {
      // 起飞机场默认值
      airport: "",
      // 起飞时间
      flightTimes: "",
      // 航空公司
      company: "",
      // 机型
      sizes: ""
    };
  }

  // airport:["首都机场"]
  // [{ value: '首都机场', label: '首都机场' }]
};
</script>
<style lang="less" scoped>
.flights_filter {
  .filter_main {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main_path {
      font-size: 13px;
    }
    .main_selects {
      display: flex;

      .select_item {
        width: 120px;
        margin-left: 5px;
      }
    }
  }
  .filters_btns {
    padding: 10px 0;
  }
}
</style>