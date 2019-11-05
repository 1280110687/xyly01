<template>
  <!-- 以下是需要递归的结构 -->
  <div class="big_box">
    <div class="commentsList">
      <mycomment v-if="comments.parent" :comments="comments.parent" />
      <div class="comments_person">
        <div class="person">
          <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
          <span>{{comments.account.nickname}}</span>
        </div>
        <div class="comments_time">{{transitionTime(comments.account.created_at)}}</div>
      </div>
      <div class="comments_content">
        <div class="content_text">{{comments.content}}</div>
        <!-- 图片使用 v-if 判断该不该存在 -->
        <div class="content_img" v-if="comments.pics.length>0">
          <!-- 图片动态 拿到数据后加 “:” -->
          <img :src="comments.pice" alt />
        </div>
        <!-- 定位过去吗？ -->
        <div class="reply">回复</div>
      </div>
      <!-- 通过名称可以调用组件,调用的方式与使用标签无异 -->
      <!-- v-if="comment.parent":这就是递归退出的条件 -->
      <!-- @wirtecomment='sendcomment':说明以后这个组件会发起这样的事件，相当于一个事件注册 -->
      
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'mycomment',
  props: ['comments'],
  mounted () {
    console.log(this.comments)
  },
  methods: {
    transitionTime (t) {
      // console.log(t)
      let data = new Date(t)
      let TTime = new Date(data)
      return TTime.getFullYear() + '-' + (TTime.getMonth() + 1) + '-' + TTime.getDate() + ' ' + TTime.getHours() + ':' + TTime.getMinutes() + ':' + TTime.getSeconds();
    }
  }
}
</script>
<style lang="less" scoped>
.big_box {
  padding: 4px;
  // border: 1px solid #ccc;
  // border-bottom: 1px dashed #ccc;
  .commentsList {
    // padding: 10px;
    border: 1px solid #ccc;
    // position: relative;
    &:hover {
      .reply {
        // display: block;
        color: blue !important;
      }
    }
    .comments_person {
      display: flex;
      .person {
        display: flex;
        box-sizing: border-box;
        img {
          display: block;
          width: 20px;
          height: 20px;
          margin: 0px 4px;
        }
        span {
          color: #666;
        }
      }
      .comments_time {
        color: #999;
        font-size: 12px;
        margin-left: 12px;
        padding-top: 4px;
      }
    }

    .comments_content {
      padding: 10px 0 10px 36px;
      display: flex;
      justify-content: space-between;
      .content_text {
      }

      .content_img {
        img {
          max-width: 100px;
        }
      }

      .reply {
        // position: absolute;
        // bottom: 10px;
        // right: 20px;
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        margin-right: 14px;
        // display: none;
      }
    }
  }
}
</style>
