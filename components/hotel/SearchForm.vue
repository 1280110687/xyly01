<template>
  <div class="search_form">
    <div class="bourn_title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{hotelList.data&&hotelList.data[0].city.name}}酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bourn_search">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="目的地"
        @select="handleSelect"
      ></el-autocomplete>
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="-"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
        style="margin:0 5px 0 15px"
      >></el-date-picker>
      <div @click="isShowa">
        <el-input placeholder="人数未定" slot="suffix" style="width:220px;margin:0 15px 0 0">
          <i class="el-icon-user-solid el-input__icon" slot="suffix"></i>
        </el-input>
      </div>
      <div class="peopleMun" v-show="isShow">
        <div class="peopleMun_top">
          <span class="meijian">每间</span>
          <el-select v-model="value" placeholder="成人" size="mini">
            <el-option
              v-for="item in adult"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" placeholder="儿童" size="mini">
            <el-option
              v-for="item in child"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="peopleMun_bottom">
          <el-button type="primary" size="mini" class="sure">确定</el-button>
        </div>
      </div>
      <el-button type="primary">查看价格</el-button>
    </div>
    <div class="bourn_map">
      <div class="bourn_map_left">
        <p>
          区域:{{}}
        </p>
        <p>
          攻略:
          北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。
        </p>
        <p>
          均价 ? :
          ¥332
          ¥521
          ¥768
        </p>
      </div>
      <div class="bourn_map_right">
        <div id="container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //选择成人儿童下拉列表值
      value:'',
      //显示隐藏
      isShow: false,
      //成人
      adult: [
        {
          value: '选项1',
          label: '1'
        },
        {
          value: '选项2',
          label: '2'
        },
        {
          value: '选项3',
          label: '3'
        },
        {
          value: '选项4',
          label: '4'
        },
        {
          value: '选项5',
          label: '5'
        },
        {
          value: '选项6',
          label: '6'
        },
        {
          value: '选项7',
          label: '7'
        }
      ],
      //儿童
      child: [
        {
          value: '选项0',
          label: '0'
        },
        {
          value: '选项1',
          label: '1'
        },
        {
          value: '选项2',
          label: '2'
        },
        {
          value: '选项3',
          label: '3'
        },
        {
          value: '选项4',
          label: '4'
        }
      ],
      //日期选择
      date: '',
      state: '南京',
      options: {},
      cityHotel: {},
      //地图所需参数
      mapPar: [
        //中心坐标
        // center
      ]
    }
  },
  props: {
    hotelList: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 搜索建议的输入  事件
    querySearchAsync(queryString, callback) {
      // queryString = 当前输入框的值
      // 把关键字 “广” 发送请求
      // callback()
      // console.log(queryString)
      if (queryString) {
        this.$axios
          .get('/cities', { params: { name: queryString } })
          .then(res => {
            let cityArr = res.data.data
            callback(cityArr)
          })
      }
    },
    handleSelect() {},

    isShowa() {
      this.isShow = !this.isShow
    },
    getScenics(){

    }
  },
  mounted() {

    // this.mapPar.center = this.hotelList.data[0].location.latitude
    window.onLoad = function() {
      // 5  js 加载完毕了！！！
      var map = new AMap.Map('container', {
        // 地图的缩放倍数
        zoom: 12,
        // 要显示的经纬度[经度，纬度]
        center: [116.39, 39.9]
      })
      // 6 使用插件
      var toolbar = new AMap.ToolBar()
      // map.plugin(toolbar);
      map.addControl(toolbar)
      // 7 自定义点标记
      // var content ='<div style="background:red;" class="marker-route marker-marker-bus-from">😄</div>'
      // var marker = new AMap.Marker({
      //   content: content, // 自定义点标记覆盖物内容
      //   position: [116.397428, 39.90923], // 基点位置
      //   offset: new AMap.Pixel(-17, -42) // 相对于基点的偏移位置
      // })
      // map.add(marker)
    }
    // 1 定义 高度地图 js 路径
    var url =
      'https://webapi.amap.com/maps?v=1.4.15&key=26933cfee2b7d2431e68ffde2d38ae87&callback=onLoad'
    // 2 手动创建了一个script标签
    var jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    // 3 定义 script标签的 引入地址
    jsapi.src = url
    // 4 把script标签 放入到 html标签的 head标签的中
    document.head.appendChild(jsapi)

    // setTimeout(() => {
    //   console.log(this.hotelList)
    // }, 3000)

    
  }
}
</script>

<style lang='less' scpoed>
.search_form {
  .bourn_title {
    padding: 20px 0;
  }
  .bourn_search {
    position: relative;
    display: flex;
    padding: 0 0 20px 0;
    .peopleMun {
      position: absolute;
      bottom: -108px;
      right: 96px;
      z-index: 1;
      background-color: #ccc;
      width: 332px;
      height: 120px;
      padding: 15px;
      .peopleMun_top {
        display: flex;
        border-bottom: 1px solid #666;
        padding-bottom: 15px;
        .meijian {
          width: 110px;
          font-size: 13px;
        }
      }
      .peopleMun_bottom {
        display: flex;
      }
    }
  }
  .bourn_map {
    display: flex;
    justify-content: space-between;
  }
  .bourn_map_left {
    width: 580px;
  }
  .bourn_map_right {
    #container {
      width: 420px;
      height: 260px;
    }
  }
}
</style>