<template>
  <div id="app">
    <div class="view">
      <router-view
        :hiddle="hiddle"
        :myArr="myArr"
        :navigation="navigation"
        :fanData="fanData"
        :straData="straData"
        :yuhunData="yuhunData"
        :shishenData="shishenData"/>
    </div>
    <div class="bottom-position">
      <div class="bottom-warpper" @click="refsh">
        <router-link to="/page">
          <img src="./common/img/sy-bottom-kls.jpg" alt="">
          <div class="text">首页</div>
        </router-link>
      </div>
      <div class="bottom-warpper">
        <router-link to="/strategy">
          <img src="./common/img/sy-bottom-st.jpg" alt="">
          <div class="text">攻略</div>
        </router-link>
      </div>
      <div class="bottom-warpper" @click="refsh">
        <router-link to="/video">
          <img src="./common/img/sy-bottom-yc.jpg" alt="">
          <div class="text">视频</div>
        </router-link>
      </div>
      <div class="bottom-warpper" @click="refsh">
        <router-link to="/forum">
          <img src="./common/img/sy-bottom-ly.jpg" alt="">
          <div class="text">论坛</div>
        </router-link>
      </div>
      <div class="bottom-warpper" @click="refsh">
        <router-link to="/me">
          <img src="./common/img/sy-bottom-yqs.jpg" alt="">
          <div class="text">我</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        hiddle: [],
        myArr: [],
        navigation: [],
        fanData: [],
        straData: [],
        yuhunData: [],
        shishenData: []
      }
    },
    methods: {
      refsh() {
        this.$store.state.moveWidth = 0
      }
    },
    created() {
      let self = this
      // 获取首页所需要的数据
      this.$axios.get('/api/page')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            for (let i = 0; i < res.data.strategy[0].items.length; i++) {
              self.hiddle.push(res.data.strategy[0].items[i])
            }
            self.hiddle.unshift(self.hiddle[self.hiddle.length - 1])
            self.hiddle.push(self.hiddle[1])
            self.myArr = res.data.strategy[0].items
            self.navigation = res.data.strategy
            self.fanData = res.data.fans_list
            self.straData = res.data.stras_list
          }
        })
        .catch((error) => {
          alert(error)
        })
      // 获取御魂数据
      this.$axios.get('/api/main')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            this.yuhunData = res.data
          }
        })
        .catch((err) => {
          alert(err)
        })
      // 获取式神数据
      this.$axios.get('/api/sstj')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            this.shishenData = res.data
          }
        })
        .catch((err) => {
          alert(err)
        })
    }
  }

</script>
<style lang="less" rel=stylesheet/less>
  #app {
    .view {
      position: absolute;
      top: 0px;
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    .bottom-position {
      position: fixed;
      display: flex;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 48px;
      line-height: 48px;
      background: url("./common/img/background.jpg");
      background-size: 640px 360px;
      background-position: -150px 300px;
      .bottom-warpper {
        flex: 1;
        display: inline-block;
        text-align: center;
        & > a {
          height: 48px;
          display: block;
          font-size: 10px;
          color: rgb(77, 85, 93);
          img {
            display: block;
            width: 30px;
            height: 30px;
            margin-left: 30%;
          }
          .text {
            width: 100%;
            height: 10px;
            line-height: 10px;
            margin-top: 2px;
            text-align: center;
          }
          &.active {
            color: red;
            font-weight: 700;
            img {
              display: block;
              width: 40px;
              height: 40px;
              margin-top: -15px;
              margin-left: 25%;
            }
          }
        }
      }
    }
  }
</style>
