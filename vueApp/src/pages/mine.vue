<template>
  <div>
    <Header :txt="txt"></Header>
    <tabbar :page2="page"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      txt: '我的',
      page: 'mine'
    }
  }
}
</script>

<style scoped>

</style>
