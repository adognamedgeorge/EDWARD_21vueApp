<template>
  <div>
    <Header :txt="txt"></Header>
    <tabbar :page2="page"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      txt: '通讯录',
      page: 'book'
    }
  }
}
</script>

<style scoped>

</style>
