<template>
  <div class="loading">
    <span class="load">精彩即将呈现...</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="less" rel=stylesheet/less scoped>
  .loading {
    width: 100%;
    height: 667px;
    background: url("../../common/img/loading.gif") no-repeat 80px center;
    background-size: 100px 100px;
    background-color: #F2F5FB;
    .load {
      display: inline-block;
      position: relative;
      top: 328px;
      left: 180px;
      font-size: 16px;
    }
  }
</style>
