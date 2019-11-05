<template>
  <div class="postDetails">
    <div class="details_main">
      <!-- 文章详情-标题  开始 -->
      <div class="details_title">
        <div class="details_bum">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
            <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="title_text">
          <h1>{{postDetails.title}}</h1>
        </div>
      </div>
      <!-- 文章详情-标题  结束 -->
      <!-- 文章详情-文本内容  开始 -->
      <div class="details_text">
        <div class="text_time">
          <span>攻略：</span>
          <span>{{citys.created_at}}</span>
          <s>阅读：</s>
          <span>{{postDetails.watch}}</span>
        </div>
        <div class="text" v-html="postDetails.content"></div>
        <div class="text_fooler">
          <div class="ico_text">
            <i class="iconfont iconpinglun"></i>
            <span>评论(103)</span>
          </div>
          <div class="ico_text">
            <i class="iconfont iconstar1"></i>
            <span>收藏</span>
          </div>
          <div class="ico_text">
            <i class="iconfont iconfenxiang"></i>
            <span>分享</span>
          </div>
          <div class="ico_text">
            <i class="iconfont iconding"></i>
            <span>点赞(55)</span>
          </div>
        </div>
      </div>
      <!-- 文章详情-文本内容  结束 -->
      <!-- 评论使用组件套组件 -->
      <div class="post_comments">
        <postComments />
      </div>
    </div>
    <!-- 侧边栏 -->
    <div class="details_right">
      <detailsRight />
    </div>
  </div>
</template>
<script>
import detailsRight from "@/components/post/detailsRight"
import postComments from "@/components/post/postComments"
export default {
  components: {
    detailsRight, postComments
  },
  data () {
    return {
      postDetails: {},
      citys: {}
    }
  },
  mounted () {
    // 拿文章id  is Ok
    // console.log(this.$route.params.id)
    this.$axios.get('/posts/' + this.$route.params.id).then(res => {
      console.log(res)
      this.postDetails = res.data
      this.citys = res.data.city
    })

  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
.postDetails {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  .details_right {
    flex: 3;
    margin-left: 20px;
  }
  .details_main {
    width: 700px;
    flex: 7;
    .details_title {
      border-bottom: 1px solid #ccc;
      .details_bum {
        padding-top: 18px;
      }
      .title_text {
        padding: 24px 0px;
        h2 {
        }
      }
    }

    .details_text {
      .text_time {
        display: flex;
        justify-content: flex-end;
        color: #999;
        padding: 20px 20px 20px 0px;
        span {
        }
        s {
          margin-left: 24px;
        }
      }
      .text {
        width: 100%;
        /deep/ img {
          max-width: 100%;
        }
      }
      .text_fooler {
        display: flex;
        justify-content: center;
        .ico_text {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 20px;
          cursor: pointer;
          i {
            font-size: 26px;
            color: orange;
          }
          span {
            color: #999;
            line-height: 34px;
          }
        }
      }
    }
  }
}
</style>
