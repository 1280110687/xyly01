<template>
  <div class="flights_filter">
    <div class="filter_main">
      <div class="main_path">单程: 广州-上海/ 2019-10-28</div>
      <div class="main_selects">
        <div class="select_item">
          <el-select placeholder="请选择" size="mini">
            <el-option
              v-for="item in  [{ value: '选项1', label: '黄金糕' }]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select placeholder="请选择" size="mini">
            <el-option
              v-for="item in  [{ value: '选项1', label: '黄金糕' }]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select placeholder="请选择" size="mini">
            <el-option
              v-for="item in  [{ value: '选项1', label: '黄金糕' }]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select placeholder="请选择" size="mini">
            <el-option
              v-for="item in  [{ value: '选项1', label: '黄金糕' }]"
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
      <el-button type="primary" round size="mini">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {};
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
    padding: 10px 0 20px 0;
  }
}
</style>