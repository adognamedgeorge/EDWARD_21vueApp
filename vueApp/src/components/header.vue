<template>
  <div class="head">
    <div class="box" @click="toPage(turn)">
      <span>
        <img src="../assets/back.png" alt=""/>
      </span>
      <i>{{text}}</i>
    </div>
    <h3 v-text="txt"></h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    txt: String,
    text: String,
    turn: String
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
  font-size: .6rem;
  position: relative;
  height: 1.1rem;
  display: flex;
  align-items: center;
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
