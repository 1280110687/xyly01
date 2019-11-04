<template>
  <!-- 根据图片数组长度判断使用哪个结构  > 2 显示三图结构 否则都是一图结构 -->
  <div class="postItem">
    <!-- 第一种情况 -- 显示三图 -->
    <router-link :to='"/post/"+ postList.id' v-if="postList.images.length > 2">
      <div class="artical">
        <div class="artical_title">
          <h2>{{postList.title}}</h2>
        </div>
        <div class="artical_text">
          <p>{{postList.summary}}</p>
        </div>
        <!-- 图片用 v-for 来显示 -->
        <div class="artical_img">
          <img
            v-for="(item, index) in postList.images"
            :key="index"
            :src="postList.images[index]"
            alt
          />
        </div>
        <div class="artical_fool">
          <div class="fool_left">
            <i class="el-icon-location-outline"></i>
            <span>{{postList.cityName}}</span>
            <div class="fool_author">
              <s>by</s>
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              <span>{{postList.account.nickname}}</span>
            </div>
            <i class="el-icon-view"></i>
            <span>{{postList.watch}}</span>
          </div>
          <div class="fool_right">57赞</div>
        </div>
      </div>
    </router-link>
    <!-- 第二种情况   左边一张图，右边文字 -->
    <div class="artical2" @click="$router.push('/post/'+postList.id)" v-if="postList.images.length <= 2">
      <div class="artical2_img">
        <img :src="postList.images[0]" alt />
      </div>
      <div class="artical2_content">
        <div class="artical_title">
          <h2>{{postList.title}}</h2>
        </div>
        <div class="artical_text">
          <p>{{postList.summary}}</p>
        </div>
        <div class="artical_fool">
          <div class="fool_left">
            <i class="el-icon-location-outline"></i>
            <span>{{postList.cityName}}</span>
            <div class="fool_author">
              <s>by</s>
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              <span>{{postList.account.nickname}}</span>
            </div>
            <i class="el-icon-view"></i>
            <span>{{postList.watch}}</span>
          </div>
          <div class="fool_right">57赞</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['postList'],
  // mounted () {
  //   console.log(this.postList)
  //   console.log(this.postList.images.length)
  //   console.log(this.postList.images[1])
  // }
}
</script>
<style lang="less" scoped>
.artical {
  border-bottom: 1px solid #eee;
  // margin-bottom: 30px;
  .artical_title {
    padding: 20px 0;
    h2 {
      font-weight: 400;
      color: #000;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .artical_text {
    height: 62px;
    margin-bottom: 16px;
    overflow: hidden;
    color: #666;
  }

  .artical_img {
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    img {
      display: block;
      width: 220px;
      height: 150px;
      &:nth-child(2) {
        margin: 0 10px;
      }
    }
  }

  .artical_fool {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .fool_left {
      display: flex;
      align-items: center;
      color: #999;
      i {
        margin-right: 6px;
      }
      span {
      }

      .fool_author {
        display: flex;
        margin: 0 10px;
        img {
          display: block;
          width: 20px;
          height: 20px;
          margin: 0 6px;
        }
        span {
          color: orange;
        }
      }
    }

    .fool_right {
      color: orange;
    }
  }
}

.artical2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 18px 0;
  cursor: pointer;
  .artical2_img {
    margin-right: 14px;
    img {
      display: block;
      width: 220px;
      height: 150px;
    }
  }
  .artical2_content {
    width: 470px;
    box-sizing: border-box;
    .artical_title {
      padding: 12px 0;
      h2 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
      }
    }

    .artical_text {
      height: 62px;
      overflow: hidden;
      color: #666;
      p {
      }
    }

    .artical_fool {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      .fool_left {
        display: flex;
        align-items: center;
        color: #999;
        i {
          margin-right: 6px;
        }
        span {
        }

        .fool_author {
          display: flex;
          margin: 0 10px;
          img {
            display: block;
            width: 20px;
            height: 20px;
            margin: 0 6px;
          }
          span {
            color: orange;
          }
        }
      }

      .fool_right {
        color: orange;
      }
    }
  }
}
</style>
