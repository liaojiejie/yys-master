<template>
  <div class="list-wrapper">
    <div class="yhtj-list">
      <div>
        <div class="yhtj-list-item" v-for="item in listdata">
          <div class="left">
            <img :src="'https://www.16163.com/zt/yys/app/gonglue/images/yhtj/icon/'+item.御魂图标" alt="">
            <span>{{item.御魂名称}}</span>
          </div>
          <div class="right">
            <div class="rl">
              <i> 二件套 </i>
              <span>{{item.二件套效果}}</span>
            </div>w
            <div class="rl">
              <i> 四件套 </i>
              <span>{{item.四件套效果}}</span>
            </div>
            <div class="rl">
              <i>获得方式</i>
              <span>{{item.获得方式}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
//    添加scroll事件
    props: {
      listdata: {
        type: Array
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" rel=stylesheet/less scoped>
  .yhtj-list {
    width: 100%;
    background-color: #fff;
    .yhtj-list-item {
      position: relative;
      width: 100%;
      padding-bottom: 0.42667rem;
      overflow: hidden;
      .left {
        float: left;
        width: 1.77333rem;
        height: 2.61333rem;
        img {
          display: block;
          width: 1.46667rem;
          height: 1.46667rem;
          margin-left: 0.30667rem;
          margin-top: 0.42667rem;
          margin-bottom: 0.08000rem;
          -moz-border-radius: 0.73333rem;
          -webkit-border-radius: 0.73333rem;
          border-radius: 0.73333rem;
          -moz-background-clip: padding;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          background-color: #5d452d;
          -moz-box-shadow: inset 0 0 0.08000rem #1a140c;
          -webkit-box-shadow: inset 0 0 0.08000rem #1a140c;
          box-shadow: inset 0 0 0.08000rem #1a140c;
          border: 1PX solid #d3ab52;
          background-color: #d3ab52;
        }
        span {
          display: block;
          font-size: 0.37333rem;
          text-align: center;
          text-indent: 0.26667rem;
        }
        &:after {
          position: absolute;
          left: 0.13333rem;
          bottom: 0rem;
          display: block;
          content: ' ';
          width: 9.85333rem;
          height: 0.14667rem;
          background: url(../../../../common/img/item-bottom-border.png) no-repeat 0 0;
          background-size: 100% 100%;
          z-index: 1;
        }
      }
      .right {
        float: left;
        width: 7.82667rem;
        padding-top: 0.42667rem;
        padding-left: 0.40000rem;
        padding-bottom: 0.42667rem;
        .rl {
          margin-bottom: 0.26667rem;
          font-size: 0.32000rem;
          &:last-child {
            margin-bottom: 0;
          }
          i {
            display: inline-block;
            width: 1.45333rem;
            height: 0.48000rem;
            line-height: 0.48000rem;
            margin-right: 0.26667rem;
            text-align: center;
            color: #fff;
            background-color: #efbf00;
            vertical-align: top;
          }
          span {
            display: inline-block;
            width: 5.84000rem;
          }
        }
      }
    }
  }
</style>
