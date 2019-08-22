<template>
  <div style="position: fixed; top: 0; left: 0; height: 1.1rem; background-color: white; z-index: 99; margin-bottom: .5rem; width: 100%;">
    <div class="head">
      <div class="box" @click="toPage(turn)" v-show="isShow">
      <span>
        <img src="../assets/back.png" alt=""/>
      </span>
        <i>{{text}}</i>
      </div>
      <h3 v-text="txt"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    txt: String,
    text: String,
    turn: String,
    isShow: Boolean
  },
  methods: {
    toPage (param) {
      this.$router.push(param)
    }
  }
}
</script>

<style scoped lang="scss">
.head {
  font-size: .5rem;
  position: relative;
  height: 1.1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(242,242,242,1);
  span {
    width: .6rem;
    height: .6rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  h3 {
    display: inline-block;
    flex: 1;
  }
  .box {
    display: flex;
    position: absolute;
    left: .6rem;
    align-items: center;
    i {
      font-size: .4rem;
      font-style: normal;
    }
  }
}
</style>
