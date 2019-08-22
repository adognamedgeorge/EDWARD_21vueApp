<template>
  <div>
    <div class="scan">
      <div class="scan_box">
        <img src="../../assets/scan.png" alt="">
        <p>扫一扫</p>
      </div>
      <cube-input v-model="value2" :placeholder="placeholder2"></cube-input>
      <button>搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scan',
  data () {
    return {
      value2: '',
      placeholder2: '搜索商品关键词/条形码'
    }
  }
}
</script>

<style scoped lang="scss">
  .scan {
    display: flex;
    align-items: center;
    line-height: 1.6rem;
    height: 1.6rem;
    padding: 0 .4rem;
    justify-content: space-between;
    border-bottom: .4rem solid #F5F5F5;
    .scan_box {
      height: .9rem;
      line-height: .45rem;
      img {
        width: .6rem;
        height: .6rem;
      }
      p {
        font-size: .3rem;
        color: #AFAFB3;
      }
    }
    .cube-input {
      background-color: rgba(245,245,245,1);
      flex: 1;
      margin-left: .4rem;
    }
    button {
      font-size: .4rem;
      background-color: #E62D2D;
      height: 1.1rem;
      width: 1.8rem;
      border: none;
      border-radius: .05rem;
      color: white;
    }
  }
</style>
