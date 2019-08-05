<template>
  <div id="notice">
    <Header :txt="txt"></Header>
    <notice-item></notice-item>
  </div>
</template>

<script>
import NoticeItem from '../components/noticeItem'
export default {
  name: 'Notice',
  components: {
    NoticeItem
  },
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
