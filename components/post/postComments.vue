<template>
  <div class="postComments">
    <div class="comment_main">
      <div class="comment_header">
        <div class="header_title">评论</div>
        <div class="header_input">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="form.commentText"
          ></el-input>
        </div>
        <div class="header_up">
          <div class="header_upimg">
            <el-upload action="http://127.0.0.1:1337/upload" list-type="picture-card">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
          <div class="header_btn">提交</div>
        </div>
      </div>
      <!-- 评论主体  使用组件 -->
      <div class="comment_middle">
        <div class="box" v-for="(item, index) in commentsList" :key="index">
          <commentsMain :comments="item" />
        </div>
      </div>
      <!-- 分页 引入element中的组件 -->
      <div class="comment_fooler">
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
  </div>
</template>
<script>
import commentsMain from "@/components/post/commentsMain"
export default {
  // const token = this.$store.state.user.userinfo.token;
  data () {
    return {
      form: {
        commentText: '',// 存储当前用户输入的内容
        cover: [], // 存储当前用户所上传成功的封面图片的id
      },
      // 评论数据由此父组件获取吧，一会还要做分页
      commentsList: [],
      page: {
        // 当前页码
        currentPage: 1,
        // 页容量数组
        pageSizes: [2, 5, 10, 50, 100],
        // 页容量
        pageSize: 6,
        // 总条数
        total: 1
      },
      // 被分页后的列表 
      currentFlights: []
    }
  },
  components: {
    commentsMain
  },
  methods: {

  },
  mounted () {
    this.getComments()
  },
  methods: {
    getComments () {
      this.$axios.get('/posts/comments').then(res => {
        // console.log(res)
        this.commentsList = res.data.data
        console.log(this.commentsList)
        // 定义总条数
        this.total = this.commentsList.length
        // console.log(this.total)
        this.currentFlights = this.commentsList.slice(
          (this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize
        )
      })
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
.postComments {
  .comment_main {
    .comment_header {
      .header_title {
        padding: 10px 0;
      }

      .header_input {
        padding: 10px 0;
      }

      .header_up {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        .header_upimg {
        }

        .header_btn {
          width: 60px;
          height: 30px;
          background-color: rgb(64, 158, 255);
          line-height: 30px;
          text-align: center;
          color: #fff;
          border-radius: 5px;
        }
      }
    }

    .comment_middle {
      max-width: 700px;
      border: 1px solid #ccc;
      .box {
        margin-bottom: 12px;
        border-bottom: 1px dashed #ccc;
      }
    }

    .comment_fooler {
      // background-color: pink;
      padding: 20px;
    }
  }
}
</style>
