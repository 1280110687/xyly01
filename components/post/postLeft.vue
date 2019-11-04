<template>
  <div class="post_left">
    <div class="left_main">
      <div class="hot_city">
        <div class="hot_title" v-for="(item, index) in cityList" :key="index">
          <span>{{item.type}}</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="hot_content">
          <div class="content_text" v-for="(item2, index) in cityList" :key="index">
            <span>{{index + 1}}</span>&nbsp;&nbsp;
            <span>{{item2.children[index].city}}</span>&nbsp;&nbsp;
            <span>{{item2.children[index].desc}}</span>
          </div>
        </div>
      </div>
      <div class="recommend_city">
        <div class="recommend_title">推荐城市</div>
        <div class="recommend_img">
          <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    this.$axios.get('/posts/cities').then(res => {
      // console.log(res)
      this.cityList = res.data.data
      // console.log(this.cityList[2])
    })
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.post_left {
  box-sizing: border-box;
  .left_main {
    // display: flex;
    width: 260px;
    .hot_city {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;
      position: relative;
      cursor: pointer;
      &:hover {
        .hot_content {
          display: block;
        }
      }
      .hot_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        height: 40px;
        border: 1px solid #ccc;
        border-top: none;

        &:nth-child(1) {
          border-top: 1px solid #ccc;
        }
      }

      .hot_content {
        position: absolute;
        width: 346px;
        border: 1px solid #ccc;
        top: 20px;
        right: -345px;
        padding: 10px 20px;
        box-sizing: border-box;
        z-index: 99;
        background-color: #fff;
        display: none;
        .content_text {
          box-sizing: border-box;
          padding: 2px 0px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          span:nth-child(1) {
            font-size: 24px;
            font-style: oblique;
            color: orange;
          }
          span:nth-child(2) {
            font-size: 14px;
            color: orange;
          }
          span:nth-child(3) {
            font-size: 14px;
            color: #999;
          }
        }
      }
    }

    .recommend_city {
      margin-bottom: 20px;
      .recommend_title {
        padding: 0 0 12px 0;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
      }

      .recommend_img {
        width: 260px;
        height: 170px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
