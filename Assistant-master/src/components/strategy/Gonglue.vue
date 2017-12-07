<template>
  <div class="box">
    <ul>
      <li class="notice" v-for="(item, index) in glData">
        <div class="notice-box">
          <div class="text">{{item.title}}</div>
          <div class="image"><img :src="item.img" alt=""></div>
          <div class="time">
            <span>{{item.differTime}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Loading from '../loading/Loading'
  import {mapMutations} from 'vuex'
  export default {
    props: {
      glData: {
        type: Array
      }
    },
    data() {
      return {}
    },
    methods: {
      ...mapMutations(['getTime'])
    },
    watch: {
      glData (val) {
        if (val) {
          this.getTime(val)
        }
      }
    },
    components: {
      Loading
    }
  }
</script>

<style lang="less" rel=stylesheet/less scoped>
  .box {
    width: 100%;
    .notice {
      width: 96%;
      .notice-box {
        position: relative;
        display: flex;
        width: 100%;
        border-bottom: 1px solid #CBE3EF;
        padding: 20px 0;
        margin: 0 8px;
        .text {
          flex: 2;
          height: 48px;
          margin-right: 10px;
          line-height: 24px;
          font-size: 16px;
          font-weight: 700;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .image {
          flex: 1;
          height: 70px;
          img {
            width: 100%;
            height: 70px;
          }
        }
        .time {
          position: absolute;
          left: 0;
          bottom: 10px;
          font-size: 10px;
          color: #ccc;
        }
      }
    }
  }
</style>
