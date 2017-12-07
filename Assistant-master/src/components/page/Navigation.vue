<template>
  <div class="content-wrapper">
    <div class="navitation">
      <ul>
        <li class="navitation-list" v-for="(item, index) in pageNatation">
          <router-link :to="'/page/'+index">
            <img :src="item.img" alt="">
            <span class="name">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="notice-wrapper">
      <ul>
        <li class="notice" v-for="(notice, index) in noticeArr">
          <div :class="{'noticeOdd':index%2===0, 'noticeEven':index%2!==0}">
            <div class="notice-box">
              <div class="text">{{notice.name}}</div>
              <div class="image"><img :src="notice.img" alt="" width="130px" height="60px"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="fans-wrapper">
      <div class="left">
        <span class="big">同人</span>
        <span class="small">新作</span>
      </div>
      <div class="right">
        <span>全部</span>
      </div>
    </div>
    <div class="width-scroll" ref="widthScroll">
      <ul>
        <li class="fans" v-for="item in fanData">
          <img :src="item.img" alt="">
          <div class="name">作者:{{item.author}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    props: {
      navigation: {
        type: Array
      },
      fanData: {
        type: Array
      }
    },
    data() {
      return {
        pageNatation: [],
        noticeArr: []
      }
    },
    methods: {
      getPagNav() {
        let navArr = []
        let navigation = this.navigation[2].items
        let num = navigation.length - 1
        for (let i = 0; i < 11; i++) {
          navArr.push(navigation[i])
        }
        navArr.push(navigation[num])
        this.pageNatation = navArr
      },
      getNotice() {
        let noticeArr = []
        let navNotice = this.navigation[1].items
        for (let i = 0; i < navNotice.length; i++) {
          noticeArr.push(navNotice[i])
        }
        this.noticeArr = noticeArr
      },
      widthScroll() {
        if (this.$refs.widthScroll) {
          this.scrollX = new IScroll(this.$refs.widthScroll, {
            click: true,
            scrollY: true,
            scrollX: true
          })
        }
      }
    },
    watch: {
      navigation(val) {
        if (val) {
          this.$nextTick(() => {
            this.getPagNav()
            this.getNotice()
            this.widthScroll()
          })
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this.getPagNav()
        this.getNotice()
        this.widthScroll()
      })
    }
  }
</script>

<style lang="less" rel=stylesheet/less  scoped>
  .content-wrapper {
    .navitation {
      width: 100%;
      height: 240px;
      margin: 20px 0;
      box-sizing: border-box;
      ul {
        .navitation-list {
          width: 25%;
          height: 80px;
          float: left;
          img {
            margin-left: 25%;
            margin-bottom: 10px;
            width: 40px;
            height: 40px;
          }
          .name {
            display: block;
            font-size: 14px;
            text-align: center;
          }
        }
      }
    }
    .notice-wrapper {
      padding: 0 25px;
      width: 100%;
      box-sizing: border-box;
      margin: 20px 0;
      background: #f3f4f5;
      .notice {
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
          padding-top: 1px;
          border: 1px solid #36ffee;
          border-left: none;
          border-top: none;
          border-radius: 0 24px 24px 0;
        }
        .notice-box {
          display: flex;
          margin: 20px 0;
          .text {
            flex: 1;
            line-height: 24px;
            font-size: 16px;
            font-weight: 700;
            margin: 0 10px;
          }
          .image {
            flex: 0 0 140px;
            height: 70px;
            margin-right: 10px;
            background: #fff;
            border-radius: 6px;
            img {
              width: 130px;
              height: 60px;
              margin: 5px;
            }
          }
        }
      }
    }
    .fans-wrapper {
      position: relative;
      margin: 0 20px 10px;
      font-size: 0;
      .left {
        float: left;
        width: 80px;
        height: 20px;
        font-weight: 700;
        border-radius: 12px;
        background: #BBDBE9;
        .big {
          position: absolute;
          font-size: 20px;
          top: -18px;
        }
        .small {
          position: absolute;
          top: -6px;
          font-size: 16px;
          left: 40px;
        }
      }
      .right {
        float: right;
        font-size: 16px;
        text-align: center;
      }
    }
    .width-scroll {
      width: 100%;
      height: 250px;
      margin-top: 50px;
      overflow: hidden;
      ul {
        width: 600%;
        height: 100%;
        .fans {
          width: 10%;
          height: 100%;
          background: #fff;
          display: inline-block;
          margin: 5px;
          box-sizing: border-box;
          img {
            width: 90%;
            height: 80%;
            margin: 12px 5% 5px;
          }
          .name {
            font-size: 16px;
            font-weight: 700;
            margin-left: 12px;
            margin-top: -8px;
          }
        }
      }
    }
  }

</style>
