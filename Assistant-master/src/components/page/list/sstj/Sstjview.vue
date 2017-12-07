<template>
  <div class="box">
    <div v-if="sstjData[0].length === 0" class="loading">
      <Loading></Loading>
    </div>
    <div class="top">
      <div class="backgroundAlpha"></div>
      <router-link to="/page" class="search">&lt;</router-link>
      <span class="name">式神图鉴</span>
      <span class="news"><i class="icon-share2"></i></span>
    </div>
    <div v-show="sstjData[0].length > 0">
      <div class="scroll" ref="sstjScroll">
        <div class="scroll-wrapper">
          <div class="main sslb">
            <ul class="filter-bar r">
              <li :class="{actived: num === 0}" data-type="all" @click="getData(0)">全部</li>
              <li :class="{actived: num === 1}" data-type="ssr" @click="getData(1)">SSR</li>
              <li :class="{actived: num === 2}" data-type="sr" @click="getData(2)">SR</li>
              <li :class="{actived: num === 3}" data-type="r" @click="getData(3)">R</li>
              <li :class="{actived: num === 4}" data-type="n" @click="getData(4)">N</li>
            </ul>
            <div class="ss-list">
              <div class="ss-list-item r" v-for="item in sstjData[num]">
                <div class="left">
                  <img :src="'https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/'+item.觉醒前头像"
                       alt="">
                </div>
                <div class="right">
                  <div class="rl">
                    <span class="name">{{item.式神名称}}</span>
                    <span class="cv">{{item.CV}}</span>
                    <i :class="item.品质.toLocaleLowerCase()+'-icon'"></i>
                  </div>
                  <p>
                    {{item.定位}}
                  </p>
                </div>
                <i class="more-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Loading from '../../../loading/Loading'
  export default {
    props: {
      shishenData: {
        type: Array
      }
    },
    data() {
      return {
        sstjData: [[], [], [], []],
        num: 0
      }
    },
    conputed: {
      data() {
        return this.sstjData[this.num]
      }
    },
    methods: {
      getData(index) {
        this.num = index
      }
    },
    created() {
      setTimeout(() => {
        this.sstjData.unshift(this.shishenData)
        for (let i = 0; i < this.shishenData.length; i++) {
          switch (this.shishenData[i].品质) {
            case 'SSR':
              this.sstjData[1].push(this.shishenData[i])
              break
            case 'SR':
              this.sstjData[2].push(this.shishenData[i])
              break
            case 'R':
              this.sstjData[3].push(this.shishenData[i])
              break
            case 'N':
              this.sstjData[4].push(this.shishenData[i])
              break
          }
        }
      }, 1000)
    },
    components: {
      Loading
    }
  }
</script>

<style lang="less" rel=stylesheet/less scoped>
  @import "../../../../common/less/base.css";

  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #fff;
    z-index: 1000;
    font-size: 16px;
    font-family: "PingFang", "Microsoft YaHei";
    .top {
      position: fixed;
      display: flex;
      top: 0;
      left: 0;
      height: 50px;
      width: 100%;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      color: #000;
      z-index: 100;
      .backgroundAlpha {
        position: fixed;
        width: 100%;
        background: #A7C1CC;
        height: 50px;
        z-index: -1;
      }
      .search, .news {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin: 10px 20px;
        color: #000;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
      }
      .search {
        font-size: 24px;
        line-height: 30px;
      }
      .name {
        flex: 1;
        font-size: 24px;
        font-weight: 700;
      }
    }
    .scroll {
      width: 100%;
      height: 100%;
      overflow: auto;
      .scroll-wrapper {
        .main {
          margin-top: 50px;
          .filter-bar {
            padding-top: 0.24000rem;
            padding-bottom: 0.18667rem;
            line-height: 0.42667rem;
            background: #fff;
            li {
              width: 2.00000rem;
              height: 0.42667rem;
              float: left;
              line-height: 0.42667rem;
              font-size: 0.37333rem;
              color: #7ba1c0;
              text-align: center;
              &.actived {
                margin-top: -0.09333rem;
                height: 0.54667rem;
                line-height: 0.54667rem;
                color: #fff;
                background: url(../../../../common/img/ystj-top-bgimg.png) no-repeat center top;
                background-size: 1.40000rem 0.54667rem;
              }
            }
          }
          .ss-list {
            margin-top: 0.42667rem;
          }
          .ss-list-item {
            display: block;
            position: relative;
            height: 2.38667rem;
            /* border-bottom: 1PX solid #cfdfe9; */
            background: #f2f5fb url(../../../../common/img/item-bottom-border.png) no-repeat 0 bottom;
            background-size: 9.85333rem 0.14667rem;
            color: #000;
            &:last-child {
              border-bottom: none;
            }
            .more-icon {
              position: absolute;
              display: block;
              right: 0.37333rem;
              top: 1.00000rem;
              width: 0.24000rem;
              height: 0.40000rem;
              margin: 0;
              background: url(../../../../common/img/gt-icon.png) no-repeat 0 0;
              background-size: 0.24000rem 0.40000rem;
            }
            .left {
              height: 2.38667rem;
              line-height: 2.38667rem;
              img {
                width: 1.33333rem;
                height: 1.33333rem;
                margin-top: 0.42667rem;
                margin-left: 0.24000rem;
                -moz-border-radius: 0.66667rem;
                -webkit-border-radius: 0.66667rem;
                border-radius: 0.66667rem;
                -moz-background-clip: padding;
                -webkit-background-clip: padding-box;
                background-clip: padding-box;
                background-color: #5d452d;
                -moz-box-shadow: inset 0 0 0.08000rem #1a140c;
                -webkit-box-shadow: inset 0 0 0.08000rem #1a140c;
                box-shadow: inset 0 0 0.08000rem #1a140c;
                border: 1PX solid #d3ab52;
              }
            }
            .right {
              /*float: left;*/
              width: 8.06667rem;
              height: 1.64000rem;
              padding-top: 0.54667rem;
              padding-left: 0.29333rem;
              font-size: 0.37333rem;
              .name {
                &:after {
                  content: '|';
                  margin-left: 0.24000rem;
                  margin-right: 0.24000rem;
                }
              }
              .cv {
                color: #666;
              }
              p {
                margin-top: 0.13333rem;
                font-size: 0.32000rem;
                color: #656565;
                opacity: .79;
              }
              .n-icon,
              .r-icon,
              .sr-icon,
              .ssr-icon {
                background-image: url(../../../../common/img/sstj-icon.png);
                background-repeat: no-repeat;
                background-size: 1.48000rem 0.81333rem;
              }
              .n-icon {
                width: 0.40000rem;
                height: 0.45333rem;
                background-position: -0.70667rem 0rem;
              }
              .r-icon {
                width: 0.37333rem;
                height: 0.45333rem;
                background-position: -1.10667rem 0rem;
              }
              .sr-icon {
                width: 0.58667rem;
                height: 0.42667rem;
                background-position: 0rem -0.38667rem;
              }
              .ssr-icon {
                width: 0.70667rem;
                height: 0.38667rem;
                background-position: 0rem 0rem;
              }

              i {
                margin-left: 0.66667rem;
                margin-top: 0.08000rem;
              }
            }

          }
        }
      }
    }
  }
</style>
