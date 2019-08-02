<template>
  <div>
    <Header :txt="txt"></Header>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      txt: '通讯录'
    }
  }
}
</script>

<style scoped>

</style>
