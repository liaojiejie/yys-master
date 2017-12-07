<template>
  <div class="position">
    <div class="top">
      <div class="backgroundAlpha" :style="{opacity:opacity}"></div>
      <span class="search"><i class="icon-search"></i></span>
      <span class="name">论坛</span>
      <span class="news"><i class="icon-bell"></i></span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
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
  }

</style>
