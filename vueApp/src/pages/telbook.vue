<template>
  <div id="telbook">
    <Header :txt="txt"></Header>
    <div class="input">
      <cube-input :placeholder="placeholder" type="text" v-model="value"></cube-input>
    </div>
    <div>
      <telist></telist>
    </div>
    <tabbar :page2="page"></tabbar>
  </div>
</template>

<script>
import telist from '../components/telist'
export default {
  name: 'Book',
  components: {
    telist
  },
  data () {
    return {
      txt: '通讯录',
      page: 'book',
      placeholder: '搜索姓名',
      value: ''
    }
  }
}
</script>

<style scoped lang="scss">
#telbook {
  .input {
    margin: 0 .4rem .4rem;
    .cube-input {
      background-color: rgba(245,245,245,1);
      border-radius: .05rem;
      text-align: center;
    }
  }
}
</style>
