<template>
  <div class="head">
    <!--<span>-->
      <!--<img src="../assets/backward.png" alt=""/>-->
    <!--</span>-->
    <h3 v-text="txt"></h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    txt: String
  }
}
</script>

<style scoped lang="scss">
.head {
  font-size: .6rem;
  position: relative;
  span {
    width: .6rem;
    height: .6rem;
    display: inline-block;
    position: absolute;
    left: .6rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  h3 {
    display: inline-block;
    width: 100%;
  }
}
</style>
