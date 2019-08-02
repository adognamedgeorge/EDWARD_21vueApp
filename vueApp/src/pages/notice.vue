<template>
  <div id="notice">
    <Header :txt="txt"></Header>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data () {
    return {
      txt: '公告'
    }
  }
}
</script>

<style scoped lang="scss">
#notice {
  h3 {
    font-size: .6rem;
  }
}
</style>
