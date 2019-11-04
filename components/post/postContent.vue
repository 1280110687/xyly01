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
        <postItem />
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
    }
  }
}
</style>
