<template>
  <div id="telbook">
    <Header :txt="txt"></Header>
    <div class="input">
      <cube-input :placeholder="placeholder" type="text" v-model="value"></cube-input>
    </div>
    <div class="list">
      <cube-index-list :data="telData"></cube-index-list>
    </div>
    <tabbar :page2="page"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      txt: '通讯录',
      page: 'book',
      placeholder: '搜索姓名',
      value: '',
      telData: [
        {
          'name': 'C',
          'items': [
            {
              'name': '陈文章',
              'value': 1
            },
            {
              'name': 'ffff',
              'value': 2
            }
          ]
        }
      ]
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
  .list {
    height: 10rem;
  }
}
</style>
