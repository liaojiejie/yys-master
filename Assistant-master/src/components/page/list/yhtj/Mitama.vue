<template>
  <div class="mitama-wrapper">
    <div v-if="show" class="loading">
      <Loading></Loading>
    </div>
    <div class="top">
      <div class="backgroundAlpha"></div>
      <router-link to="/page" class="search">&lt;</router-link>
      <span class="name">御魂图鉴</span>
      <span class="news"><i class="icon-share2"></i></span>
    </div>
      <div class="scroll" ref="tabScroll">
        <div class="aaa" ref="aaa">
          <div class="main" ref="main">
            <ul class="yhtj-head-list">
              <li><i class="one-icon"></i><span>【一号位】固定攻击</span></li>
              <li><i
                class="two-icon sp"></i><span>【二号位】速度&nbsp;&nbsp;攻击加成&nbsp;&nbsp;&nbsp;防御加成&nbsp;&nbsp;&nbsp;生命加成</span>
              </li>
              <li><i class="three-icon"></i><span>【三号位】固定防御</span></li>
              <li><i
                class="four-icon"></i><span>【四号位】效果命中&nbsp;&nbsp;效果抵抗&nbsp;&nbsp;攻击加成&nbsp;&nbsp;防御加成&nbsp;&nbsp;生命加成</span>
              </li>
              <li><i class="five-icon sp"></i><span>【五号位】固定生命</span></li>
              <li><i
                class="six-icon"></i><span>【六号位】暴击&nbsp;&nbsp;暴击伤害&nbsp;&nbsp;攻击加成&nbsp;&nbsp;防御加成&nbsp;&nbsp;生命加成</span>
              </li>
            </ul>
          </div>
          <div class="tab" ref="tab">
            <div class="bg">
              <ul class="tab-header">
                <li v-for="(item, index) in dataArr" :class="{active:index===num}" @click="getData(index)">
                  {{item[0].御魂类型}}
                </li>
              </ul>
            </div>
            <div class="showlist">
              <yhxq :listdata=data></yhxq>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  import IScroll from 'iscroll'
  import yhxq from './Yhxq'
  import Loading from '../../../loading/Loading'
  export default {
    props: {
      yuhunData: {
        type: Array
      }
    },
    data() {
      return {
        dataArr: [[], [], [], [], []],
        num: 0,
        show: true
      }
    },
    computed: {
      data() {
        return this.dataArr[this.num]
      }
    },
    methods: {
      getData(index) {
        this.num = index
      },
      initScroll() {
        this.tabsScroll = new IScroll(this.$refs.tabScroll, {
          click: true
        })
      },
      setHeight() {
        let h1 = this.$refs.tab.clientHeight
        let h2 = this.$refs.main.clientHeight
        this.$refs.aaa.style.height = h1 + h2 + 50 + 'px'
      }
    },
    created() {
      this.yuhunData.forEach((f) => {
        let name = f.御魂类型
        switch (name) {
          case '攻击类':
            this.dataArr[0].push(f)
            break
          case '暴击类':
            this.dataArr[1].push(f)
            break
          case '生命类':
            this.dataArr[2].push(f)
            break
          case '防御类':
            this.dataArr[3].push(f)
            break
          case '效果类':
            this.dataArr[4].push(f)
            break
        }
      })
      setTimeout(() => {
        this.show = !this.show
      }, 3000)
      this.$nextTick(() => {
        setTimeout(() => {
          this.setHeight()
          this.initScroll()
        }, 50)
      })
    },
    watch: {
      num(val) {
        if (val) {
          this.$nextTick(() => {
            this.setHeight()
            this.tabsScroll.refresh()
          })
        }
      }
    },
    components: {
      yhxq,
      Loading
    }
  }
</script>

<style lang="less" rel=stylesheet/less scoped>
  .mitama-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    z-index: 1000;
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
      overflow: hidden;
    }
    .main {
      position: relative;
      top: 50px;
      width: 100%;
      background-color: #fff;
      li {
        display: flex;
        padding: 10px;
        border-bottom: 1px dashed #C4D2DA;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        &:last-child {
          border: none;
        }
        span {
          flex: 1;
          font-size: 12px;
          height: 35px;
          line-height: 35px;
        }
        i {
          display: inline-block;
          flex: 0 0 20px;
          width: 20px;
          height: 35px;
          line-height: 35px;
          background: url('../../../../common/img/icon.png') no-repeat;
          background-size: 126px 18px;
        }
        .one-icon {
          background-position: 0px;
        }
        .two-icon {
          background-position: -21px;
        }
        .three-icon {
          background-position: -42px;
        }
        .four-icon {
          background-position: -63px;
        }
        .five-icon {
          background-position: -84px;
        }
        .six-icon {
          background-position: -105px;
        }
      }
    }
    .tab {
      position: relative;
      top: 56px;
      width: 100%;
      .bg {
        width: 100%;
        height: 40px;
        padding-top: 10px;
        border-top: 1px solid #C4D2DA;
        background: #F4F9FD;
        .tab-header {
          display: flex;
          width: 100%;
          height: 40px;
          background: #8eb7cd;
          text-align: center;
          li {
            margin: 0 2.5%;
            width: 15%;
            color: #fff;
            font-size: 16px;
            height: 38px;
            line-height: 38px;
          }
          .active {
            border-bottom: 1px solid #fff;
          }
        }
      }
      .showlist {
        position: relative;
        width: 100%;
        top: 1px;
      }
    }

  }
</style>
