<template>
  <div class="hotelHeader">
    <div class="header_main">
      <!-- 酒店预订  begin -->
      <div class="header_flights">
        <div class="flights_city">
          <el-autocomplete
            :fetch-suggestions="querySearchAsync"
            v-model="form.desCity"
            @select="handleSelect1"
            placeholder="目的地"
          ></el-autocomplete>
        </div>
        <div class="flights_time">
          <el-date-picker
            v-model="form.dateTime"
            type="daterange"
            range-separator="-"
            start-placeholder="入住日期"
            end-placeholder="离店日期"
          ></el-date-picker>
        </div>
        <div class="flights_person">
          <el-input placeholder="人数" suffix-icon="el-input__icon iconfont iconuser"></el-input>
        </div>
        <div class="see_btn">
          <el-button type="primary">查看价格</el-button>
        </div>
      </div>
      <!-- 酒店预订  end -->
      <!-- 城市简介 begin -->
      <div class="city_referral">
        <div class="referral_left">
          <div class="scenic_spot">
            <div class="spot_left">区域：</div>
            <div class="spot_right">
              <s>全部</s>
              <a >博古通今</a>
            </div>
            <div class="btt">
              <i class="el-icon-d-arrow-right iiccoo"></i>
              <i>等345个区域</i>
            </div>
          </div>
          <div class="scenic_spost">
            <div class="spost_left">攻略：</div>
            <div class="spost_right">
              <p>北京,你想要的都能在这找到。博古通今,兼容并蓄,天下一城,如是帝都。景点以故宫为中心向四处辐射;地铁便宜通畅,而且覆盖绝大多数景点。由于早上有天安门升旗仪式,所以大多数人选择在天安门附近住宿。</p>
            </div>
          </div>
          <div class="scenic_price">
            <div class="price_left">均价&nbsp;：</div>
            <div class="price_right">
              <el-tooltip class="item" effect="dark" content="等级均价由平日价格计算得出,节假日价格会有上浮" placement="bottom">
              <div class="price_num">
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <s>$99</s>
              </div>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="等级均价由平日价格计算得出,节假日价格会有上浮" placement="bottom">
              <div class="price_num">
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <s>$8798</s>
              </div>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="等级均价由平日价格计算得出,节假日价格会有上浮" placement="bottom">
              <div class="price_num">
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <i class="iconfont iconhuangguan"></i>
                <s>$1289</s>
              </div>
              </el-tooltip>
            </div>
            <el-tooltip class="item" effect="dark" content="等级均价由平日价格计算得出,节假日价格会有上浮" placement="top">
              <span>?</span>
            </el-tooltip>
          </div>
        </div>
        <div class="referral_right">
          <div id="container"></div>
        </div>
      </div>
      <!-- 城市简介 end -->
    </div>
   
  </div>
</template>
<script>

export default {
  
  data () {
    return {
      form: {
        desCity: '',
        dateTime: ''
      }
    }
  },
  methods: {
    // 1 搜索建议的输入 事件
    querySearchAsync (queryString, callback) {
      // 1 queryString  =  当前输入框的值
      // 2 把关键字 “广”  发送请求
      // callback();
      // console.log(queryString);
      if (queryString) {
        this.$axios
          .get("/airs/city", { params: { name: queryString } })
          .then(res => {
            let cityArr = res.data.data;
            console.log(cityArr)
            cityArr.forEach(v => {
              // 把 广州市  “市” 移除 因为 后台不需要 “市”
              v.name = v.name.replace("市", "");
              v.value = v.name;
            });
            callback(cityArr);
          });
      }
    },
    // 2 点击  目的城市
    handleSelect1 (item) {
      this.form.desCity = item.name;
      // 向父组件发射事件   面包屑需要该城市名
      this.$emit('cityName', this.form.desCity)
    }
  },
  mounted () {
    window.onLoad = function () {
      // 5  js 加载完毕了！！！
      var map = new AMap.Map("container");
    };

    // 1 定义 高度地图 js 路径
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=b7ea936233398bea0e932b30ecb3864b&callback=onLoad";
    // 2 手动创建了一个script标签
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    // 3 定义 script标签的 引入地址
    jsapi.src = url;
    // 4 把script标签 放入到 html标签的 head标签的中
    document.head.appendChild(jsapi);
  }
}
</script>
<style lang="less" scoped>
.hotelHeader {
  .header_main {
    .header_flights {
      display: flex;
      padding: 20px 0;
      .flights_city {
      }
      .flights_time {
        margin: 0 10px 0 20px;
      }
      .flights_person {
      }
      .see_btn {
        margin-left: 20px;
      }
    }
    // 城市简介  样式 ↓
    .city_referral {
      display: flex;
      margin-bottom: 20px;
      .referral_left {
        flex: 5;
        // margin-right: 10px;
        // border: 1px solid #000;

        .scenic_spot {
          margin-bottom: 30px !important;
          position: relative;
          .btt {
            position: absolute;
            bottom: -20px;
            left: 56px;
            i {
              font-size: 14px;
              color: #666;
            }
            .iiccoo {
              color: orange;
              transform: rotate(90deg);
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
        .scenic_spot,
        .scenic_spost,
        .scenic_price {
          display: flex;
          margin-bottom: 20px;
          // border: 1px solid #f00;
          .spot_left,
          .spost_left,
          .price_left {
            flex: 1;
            display: flex;
          }

          .spot_right {
            flex: 9;
            height: 42px;
            overflow: hidden;

            s {
              color: #666;
              background-color: #eee;
              border-radius: 3px;
            }
            a {
              color: rgb(83, 81, 81);
              margin: 0 5px;
              &:hover {
                text-decoration: underline;
                color: blue;
              }
            }
          }

          .spost_right {
            flex: 9;
          }

          .price_right {
            flex: 9;
            display: flex;
            .price_num {
              margin-right: 34px;
              i {
                color: orange;
              }
              s {
              }
            }
          }
          span {
            position: absolute;
            top: -4px;
            left: 30px;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            background-color: #ccc;
            color: #fff;
            border-radius: 50%;
            cursor: pointer;
          }
        }
        .scenic_spot {
        }
        .scenic_price {
          position: relative;
        }
      }
      .referral_right {
        flex: 4;
        margin-left: 16px;
        #container {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
