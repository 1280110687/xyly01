<template>
  <div class="hotelFilter">
    <div class="filterMain">
      <!-- 价格 -->
      <div class="filter_price">
        <div class="spa">
          <span>价格</span>
          <span>0 - 4000</span>
        </div>
        <el-slider :max="4000" v-model="hotelData.price"></el-slider>
      </div>
      <!-- 价格 -->
      <!-- 星级 -->
      <div class="filter_star">
        <el-dropdown>
          <span class="el-dropdown-link choice">
            <div class="foo">
              <s>住宿等级</s>
              <s>不限</s>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in hotelData.levels" :key="item.id">{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 星级 -->
      <!-- 类型 -->
      <div class="filter_type">
        <el-dropdown>
          <span class="el-dropdown-link choice">
            <div class="foo">
              <s>住宿等级</s>
              <s>不限</s>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in hotelData.types" :key="item.id">{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 类型 -->
      <!-- 设施 -->
      <div class="filter_set">
        <el-dropdown>
          <span class="el-dropdown-link choice">
            <div class="foo">
              <s>住宿等级</s>
              <s>不限</s>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in hotelData.assets" :key="item.id">{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 设施 -->
      <!-- 品牌 -->
      <div class="filter_logo">
        <el-dropdown>
          <span class="el-dropdown-link choice">
            <div class="foo">
              <s>住宿等级</s>
              <s>不限</s>
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="height:260px">
            <el-scrollbar style="height:100%">
              <el-dropdown-item v-for="item in hotelData.brands" :key="item.id">{{item.name}}</el-dropdown-item>
            </el-scrollbar>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 品牌 -->
    </div>
  </div>
</template>
<script>
export default {
  p
  data () {
    return {
      hotelData: {
        price: 0,
        levels: [],
        types: [],
        assets: [],
        brands: []
      },
    }
  },
  mounted () {
    this.getHotel()
    
  },
  methods: {
    getHotel () {
      this.$axios.get('/hotels/options').then(res => {
        // console.log(res)
        this.hotelData = res.data
        console.log(this.hotelData)
        this.hotelData.levels = res.data.data.levels
        this.hotelData.types = res.data.data.types
        this.hotelData.assets = res.data.data.assets
        this.hotelData.brands = res.data.data.brands
        // console.log(this.hotelData.levels)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.hotelFilter {
  .filterMain {
    display: flex;
    border: 1px solid #ccc;
    padding: 5px 0;
    box-sizing: border-box;
    .filter_price {
      width: 250px;
      height: 80px;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      padding: 0 18px;
      .spa {
        display: flex;
        justify-content: space-between;
      }
    }

    .filter_star,
    .filter_type,
    .filter_set,
    .filter_logo {
      width: 190px;
      height: 80px;
      border-right: 1px solid #ccc;
      padding: 20px;
      box-sizing: border-box;
    }

    .filter_star {
    }
    .filter_type {
    }

    .filter_set {
    }

    .filter_logo {
      border: none;
    }
  }
}

.choice {
  display: flex;

  .foo {
    display: flex;
    flex-direction: column;
    margin-right: 60px;
    s {
      padding: 5px 0;
    }
  }
}
</style>
