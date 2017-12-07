<template>
  <div class="stras-wrapper">
    <div class="stars">
      <ul>
        <li class="stars-list" v-for="(item, index) in straData" :click="getTime">
          <div :class="{'noticeOdd':index%2===0, 'noticeEven':index%2!==0}">
            <div class="stars-box">
              <div class="stars-text">
                <div class="text"><i>{{item.tagSort}}</i>{{item.title}}</div>
                <div class="time">{{item.differTime}}</div>
              </div>
              <div class="image"><img :src="item.img" alt=""></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="scroll">
      <div class="left"></div>
      <div class="bottom">我是个有底线的人</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    props: {
      straData: {
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
      straData(val) {
        if (val) {
          this.getTime(this.straData)
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this.getTime(this.straData)
      })
    }
  }
</script>

<style lang="less" rel=stylesheet/less scoped>
  .stras-wrapper {
    .stars {
      padding: 0 25px;
      width: 100%;
      box-sizing: border-box;
      margin: 20px 0;
      .stars-list {
        width: 100%;
        .noticeOdd {
          width: 100%;
          margin-left: -5px;
          border: 1px solid #36ffee;
          border-right: none;
          border-radius: 24px 0 0 24px;
        }
        .noticeEven {
          width: 100%;
          padding-right: 10px;
          margin-top: -3px;
          padding-top: 1px;
          border: 1px solid #36ffee;
          border-left: none;
          border-top: none;
          border-bottom: none;
          padding-bottom: 1px;
          border-radius: 0 24px 24px 0;
        }
        &:last-child {
          border-bottom: 1px solid #36ffee;
        }
        .stars-box {
          display: flex;
          margin: 20px 0;
          line-height: 24px;
          font-size: 16px;
          .stars-text {
            height: 48px;
            .text {
              i {
                padding: 1px 5px;
                line-height: 20px;
                margin-top: 2px;
                margin-right: 5px;
                color: #cf99ff;
                border: 1px solid #cf99ff;
                border-radius: 10px;
              }
              flex: 1;
              margin: 0 10px;
              height: 48px;
              font-weight: 700;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .time {
              margin: 5px 10px;
              font-size: 10px;
              color: #ccc;
            }
          }
          .image {
            flex: 0 0 140px;
            width: 140px;
            height: 70px;
            margin-right: 10px;
            background: #fff;
            img {
              width: 130px;
              height: 60px;
              margin: 5px;
            }
          }
        }
      }
    }
    .scroll {
      display: flex;
      width: 100%;
      height: 350px;
      font-size: 0;
      margin: auto;
      .left, .right {
        flex: 1;
        position: relative;
        height: 1px;
        background: #36ffee;
        top: 60px;
      }
      .left {
        left: 20px;
      }
      .right {
        right: 20px;
      }
      .bottom {
        flex: 1;
        margin: 0 25px;
        padding-top: 50px;
        height: 20px;
        line-height: 20px;
        font-size: 10px;
        color: #36ffee;
        text-align: center;
      }
    }
  }
</style>
