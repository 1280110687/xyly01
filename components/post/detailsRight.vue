<template>
  <div class="detalisRight">
    <div class="right_main">
      <div class="right_title">
        <h3>相关攻略</h3>
      </div>
      <div class="right_nve">
        <!-- 循环它 -->
        <div
          class="right_content"
          v-for="(item, index) in recommendPost"
          :key="index"
          @click="$router.push('/post/'+item.id)"
        >
          <div class="content_img"></div>
          <div class="content_title">
            <p>{{item.title}}</p>
            <div class="content_down">
              <span>{{transitionTime(item.created_at)}}</span>
              <span>阅读</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      recommendPost: {}
    }
  },
  methods: {
    getRecommendPosts () {
      this.$axios.get('/posts/recommend').then(res => {
        // console.log(res)
        this.recommendPost = res.data.data
        console.log(this.recommendPost)
      })
    },
    transitionTime (t) {
      // console.log(t)
      let data = new Date(t)
      let TTime = new Date(data)
      return TTime.getFullYear() + '-' + (TTime.getMonth() + 1) + '-' + TTime.getDate() + ' ' + TTime.getHours() + ':' + TTime.getMinutes() + ':' + TTime.getSeconds();
    }
  },
  mounted () {
    this.getRecommendPosts();

  }
}
</script>
<style lang="less" scoped>
.detalisRight {
  .right_main {
    .right_title {
      padding: 22px 0;
      border-bottom: 1px solid #ccc;
      h3 {
        font-size: 26px;
        font-weight: 400;
      }
    }

    .right_nve {
      .right_content {
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
        .content_img {
          width: 100px;
          height: 80px;
          margin-right: 12px;
          background: url('http://p1-q.mafengwo.net/s10/M00/69/D4/wKgBZ1omlsuAMMFyAAu9sVXuyfI24.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90')
            no-repeat;
          // background: url("item.images[0]") no-repeat;
          background-size: cover;
        }

        .content_title {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 155px;
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .content_down {
            span {
              font-size: 13px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>
