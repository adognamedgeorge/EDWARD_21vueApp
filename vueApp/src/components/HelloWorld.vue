<template>
  <div class="hello">
    <cube-input v-model="text" placeholder="用户名"></cube-input>
    <cube-button @click="showToast">show toast</cube-button>
    <div class="test">123</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toastTxt: 'cube toast content',
      text: ''
    }
  },
  methods: {
    showToast () {
      this.$createToast({
        txt: this.toastTxt
      }).show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  .test {
    background-color: red;
    width: 10px;
    height: 10px;
  }
}
</style>
