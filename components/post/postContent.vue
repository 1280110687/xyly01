<template>
  <div class="postContent">
    <div class="contetn_main">
      <!-- 攻略头部  开始 -->
      <div class="content_header">
        <div class="header_search">
          <input type="text" placeholder="请输入想去的地方，比如：“广州”" />
          <span class="el-icon-search"></span>
        </div>
        <div class="header_recommend">
          <i>推荐：</i>
          <span>广州</span>
          <span>上海</span>
          <span>北京</span>
        </div>
        <div class="header_waring">
          <div class="text">推荐攻略</div>
          <div class="waring">
            <span class="el-icon-edit"></span>
            <span>&nbsp;&nbsp;写游记</span>
          </div>
        </div>
      </div>
      <!-- 攻略头部  结束 -->
      <!-- 攻略文本  开始 -->
      <div class="content_post">
        <postItem :postList="item" v-for="item in currentFlights" :key="item.id" />
        <!-- 分页 -->
        <div class="block">
          <!-- 
          :current-page  当前的页码 
          :page-sizes= 页容量 数组 
          :page-size  当前 页容量 
          @size-change 页容量改变事件 
          @current-change 页码改变事件 
          -->
          <el-pagination
            :current-page="page.currentPage"
            :page-sizes="page.pageSizes"
            :page-size="page.pageSize"
            :total="page.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="total, sizes, prev, pager, next, jumper"
          ></el-pagination>
        </div>
      </div>
      <!-- 攻略文本  结束 -->
    </div>
  </div>
</template>
<script>
import postItem from "@/components/post/postItem"
export default {
  components: {
    postItem
  },
  data () {
    return {
      postList: [],
      // 分页对象
      page: {
        // 当前页码
        currentPage: 1,
        // 页容量数组
        pageSizes: [2, 5, 10, 50, 100],
        // 页容量
        pageSize: 2,
        // 总条数
        total: 1
      },
      // 被分页后的文章列表 
      currentFlights: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    // 获取文章列表数据 
    getList () {
      this.$axios.get('/posts').then(res => {
        this.postList = res.data.data
        // console.log(res)
        console.log(this.postList)
        // 定义 总条数
        this.page.total = this.postList.length
        this.currentFlights = this.postList.slice(
          (this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize
        )
      })
      // getList()
    },

    // 页容量改变事件 
    handleSizeChange (value) {
      this.page.pageSize = value
      this.currentFlights = this.postList.slice(
        (this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize
      )
    },
    // 页码改变事件 
    handleCurrentChange (value) {
      // 选择后的页码数
      this.page.currentPage = value
      this.currentFlights = this.postList.slice(
        (this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize
      )
    }
  }
}
</script>
<style lang="less" scoped>
.postContent {
  box-sizing: border-box;
  .contetn_main {
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    .content_header {
      .header_search {
        position: relative;
        input {
          width: 100%;
          height: 36px;
          padding-left: 20px;
          border: 2px solid orange;
          outline: none;
        }
        span {
          position: absolute;
          top: 6px;
          right: 14px;
          font-size: 24px;
          font-weight: 700;
          color: orange;
        }
      }

      .header_recommend {
        padding: 10px 0;
        font-size: 12px;
        color: #666;
        span {
          padding: 0 4px;
          cursor: pointer;
          &:hover {
            color: orange;
            text-decoration: underline;
          }
        }
      }

      .header_waring {
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text {
          padding: 20px 0;
          font-size: 22px;
          color: orange;
          // currentColor 继承当前字体颜色
          border-bottom: 2px solid currentColor;
        }

        .waring {
          display: flex;
          width: 106px;
          height: 40px;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          background-color: rgb(64, 158, 255);
          color: #fff;
          cursor: pointer;
          span {
          }
        }
      }
    }

    .content_post {
      width: 700px;
      .block {
        padding: 14px 0 24px 12px;
      }
    }
  }
}
</style>
