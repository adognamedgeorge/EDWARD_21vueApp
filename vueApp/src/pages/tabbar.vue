<template>
  <div id="tabbarWrap">
    <div class="wrap">
      <Item v-for="item in tabbars" :key="item.index" :txt="item.txt" :page="item.page" :sel="selected" v-on:change="getVal">
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
      selected: 'notice',
      tabbars: [
        {
          txt: '公告',
          page: 'notice',
          normalImg: require('../assets/order.png'),
          activeImg: require('../assets/order_active.png')
        },
        {
          txt: '通讯录',
          page: 'book',
          normalImg: require('../assets/telbook.png'),
          activeImg: require('../assets/telbook_active.png')
        },
        {
          txt: '工作台',
          page: 'work',
          normalImg: require('../assets/work.png'),
          activeImg: require('../assets/work_active.png')
        },
        {
          txt: '我的',
          page: 'mine',
          normalImg: require('../assets/mine.png'),
          activeImg: require('../assets/mine_active.png')
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
