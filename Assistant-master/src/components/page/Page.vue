<template>
  <div class="position">
    <div class="top">
      <div class="backgroundAlpha" :style="{opacity:opacity}"></div>
      <span class="search"><i class="icon-search"></i></span>
      <span class="name">阴阳师助手</span>
      <span class="news"><i class="icon-bell"></i></span>
    </div>
    <transition name="list">
      <router-view :yuhunData="yuhunData" :shishenData="shishenData"></router-view>
    </transition>

    <div class="hiddle-box" ref="scrolls">
      <div class="scroll" ref="heightHook">
        <div class="hiddle" ref="height1">
          <ul class="first" ref="firstHook">
            <li v-for="item in hiddle"><a href="javascript;"><img :src="item.img"></a></li>
          </ul>
          <ul class="second" ref="secondHook">
            <li v-for="item in myArr"></li>
          </ul>
        </div>
        <div ref="height2">
          <navigation :navigation="navigation" :fanData="fanData"></navigation>
        </div>
        <div ref="height3">
          <strategys :straData="straData"></strategys>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import IScroll from 'iscroll/build/iscroll-probe'
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import navigation from './Navigation'
  import strategys from './Strategys'
  export default {
    props: {
      hiddle: {
        type: Array
      },
      myArr: {
        type: Array
      },
      navigation: {
        type: Array
      },
      fanData: {
        type: Array
      },
      straData: {
        type: Array
      },
      yuhunData: {
        type: Array
      },
      shishenData: {
        type: Array
      }
    },
    data() {
      return {
        opacity: 0,
        color: 'red'
      }
    },
    computed: {
      ...mapGetters(['num'])
    },
    methods: {
      ...mapActions(['timeFn', 'timeEnd', 'touchFn']),
      ...mapMutations(['getLength', 'backgroundAlpha']),
      callback() {
        this.timeEnd(this.$refs.firstHook)
      },
      actionTimer() {
        let list = this.$refs.firstHook.getElementsByTagName('li')
        this.getLength(list.length)
        let obj = this.$refs.firstHook
        let ele = this.$refs.secondHook
        this.timeFn({obj, ele, callback: this.callback})
        this.touchFn({obj, ele, callback: this.callback})
      },
      initScroll() {
        this.scroll = new IScroll(this.$refs.scrolls, {
          click: true,
          probeType: 3
        })
        let self = this
        this.scroll.on('scroll', function () {
          let height = self.$refs.firstHook.offsetHeight
          let scrollY = Math.abs(Math.round(this.y))
          if (scrollY >= height) {
            self.opacity = 1
          } else {
            self.opacity = scrollY / height
          }
        })
      }
    },
    watch: {
      hiddle(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.secondHook.getElementsByTagName('li')[0].className = 'now'
            this.actionTimer()
            this.initScroll()
          })
        }
      }
    },
    created() {
      this.$nextTick(() => {
        let obj = this.$refs.firstHook
        let ele = this.$refs.secondHook
        let num = this.num
        ele.getElementsByTagName('li')[num - 1].className = 'now'
        let offsetX = -num * obj.offsetWidth / 10
        obj.style.transform = 'translateX(' + offsetX + 'px)'
        obj.style.webkitTransform = 'translateX(' + offsetX + 'px)'
        this.actionTimer()
        this.initScroll()
      })
    },
    components: {
      navigation,
      strategys
    }
  }
</script>

<style lang="less" rel=stylesheet/less  scoped>
  @import "../../common/less/base.css";

  .position {
    position: relative;
    height: 100%;
    width: 100%;
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
        position: absolute;
        width: 100%;
        height: 100%;
        background: #A7C1CC;
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
      .name {
        flex: 1;
        font-size: 24px;
        font-weight: 700;
      }
    }

    .list-enter-active, .list-leave-active {
      transition: all 0.5s;
    }
    .list-enter, .list-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    .hiddle-box {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 48px;
      overflow: hidden;
      .scroll {
        position: relative;
        width: 100%;
        padding-bottom: 48px;
        background: #E5F6FC;
        .hiddle {
          position: relative;
          width: 100%;
          overflow: hidden;
          .first {
            width: 1000%;
            transform: translateX(-10%);
            overflow: hidden;
            li {
              width: 10%;
              display: inline-block;
              a img {
                width: 100%;
              }
            }
          }
          .second {
            position: absolute;
            bottom: 16px;
            left: 50%;
            width: 78px;
            margin-left: -39px;
            height: 6px;
            font-size: 0;
            li {
              display: inline-block;
              width: 8px;
              height: 8px;
              margin-left: 5px;
              box-sizing: border-box;
              border-radius: 50%;
              border: 2px solid rgba(255, 255, 255, 0.7);
              &.now {
                background: #fff;
              }
            }
          }
        }
      }
    }
  }

</style>
