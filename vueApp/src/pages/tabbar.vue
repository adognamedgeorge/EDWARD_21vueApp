<template>
  <div id="tabbarWrap">
    <div class="wrap">
      <Item v-for="item in tabbars" :key="item.index" :txt="item.txt" :page="item.page" :sel="selected" @change="getVal">
        <img :src="item.normalImg" slot="normalImg">
        <img :src="item.activeImg" slot="activeImg">
      </Item>
    </div>
  </div>
</template>

<script>
import Item from '../components/item'
export default {
  name: 'Tabbar',
  components: {
    Item
  },
  data () {
    return {
      selected: 'book',
      tabbars: [
        {
          txt: '公告',
          page: 'notice',
          normalImg: require('../assets/bug.jpg'),
          activeImg: require('../assets/logo.png')
        },
        {
          txt: '通讯录',
          page: 'book',
          normalImg: require('../assets/bug.jpg'),
          activeImg: require('../assets/logo.png')
        },
        {
          txt: '工作台',
          page: 'working',
          normalImg: require('../assets/bug.jpg'),
          activeImg: require('../assets/logo.png')
        },
        {
          txt: '我的',
          page: 'mine',
          normalImg: require('../assets/bug.jpg'),
          activeImg: require('../assets/logo.png')
        }
      ]
    }
  },
  methods: {
    getVal (res) {
      this.selected = res
    }
  }
}
</script>

<style scoped lang="scss">
#tabbarWrap {
  position: fixed;
  width: 100%;
  background-color: #fff;
  bottom: 0;
  left: 0;
  padding-bottom: .2rem;
  .wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .5rem;
    border-top: 1px solid #eee;
    img {
      width: .9rem;
      height: .9rem;
    }
  }
}
</style>
