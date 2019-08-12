<template>
  <div>
    <Header :txt="txt"></Header>
    <tabbar :page2="page"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      txt: '工作台',
      page: 'work'
    }
  }
}
</script>

<style scoped>

</style>
