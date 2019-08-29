<template>
  <div>
    <Header :txt="txt"></Header>
    <div style="height:4.1rem; border-bottom: .4rem solid #F5F5F5; background-color: #FFFFFF;">
      <div class="box">
        <div class="content1">
          <div class="box2">
            <h2>西门吹雪</h2>
            <img :src="img1" alt="">
          </div>
          <p>杭州云蚂蚁IT部</p>
        </div>
        <div class="content2">
          <img :src="img2" alt="">
        </div>
      </div>
    </div>
    <div class="set" @click="toSet">
      <div>
        <img :src="img3" alt="">
        <span>设置</span>
      </div>
      <img :src="img4" alt="">
    </div>
    <tabbar :page2="page"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      txt: '我的',
      page: 'mine',
      img1: require('../assets/workItem/pencil.png'),
      img2: require('../assets/bug.jpg'),
      img3: require('../assets/workItem/set.png'),
      img4: require('../assets/workItem/arrow_right.png')
    }
  },
  methods: {
    toSet () {
      this.$router.push('/set')
    }
  }
}
</script>

<style scoped lang="scss">
  .box {
    height: 3rem;
    width: 90%;
    background-color: rgba(255,255,255,1);
    box-shadow: .75rem .5rem 1rem 1.38rem rgba(204,204,204,0.1);
    margin: .4rem auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .content1 {
      .box2 {
        display: flex;
        margin-bottom: .5rem;
        h2 {
          color: #323233;
          font-size: .55rem;
          margin-right: .3rem;
        }
        img {
          width: .5rem;
          height: .5rem;
        }
      }
      p {
        color: #AFAFB3;
        font-size: .35rem;
        float: left;
      }
    }
    .content2 {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      border: 1px solid lightgrey;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .set {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.4rem;
    line-height: 1.4rem;
    padding: 0 .4rem;
    border-bottom: 1px solid #F5F5F5;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: .6rem;
        height: .6rem;
      }
      span {
        color: #323233;
        font-size: .4rem;
        margin-left: .3rem;
      }
    }
    img {
      width: .4rem;
      height: .6rem;
    }
  }
</style>
