<template>
  <div id="work">
    <Header :txt="txt"></Header>
    <div class="content">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click="toItem(item.path, item.title)">
          <div class="left">
            <img :src="item.image" alt="" class="img1">
            <p>{{item.title}}</p>
          </div>
          <img src="../assets/arrow_right.png" alt="" class="img2">
        </li>
      </ul>
    </div>
    <tabbar :page2="page"></tabbar>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      txt: '工作台',
      page: 'work',
      list: [
        {
          title: '申请退货',
          image: require('../assets/workItem/reback.png'),
          path: '/returns'
        },
        {
          title: '退货查询',
          image: require('../assets/workItem/backing.png')
        },
        {
          title: '订单查询',
          image: require('../assets/workItem/order_search.png')
        },
        {
          title: '小店管理',
          image: require('../assets/workItem/shop.png')
        },
        {
          title: '排单管理',
          image: require('../assets/workItem/manage.png')
        },
        {
          title: '配送查询',
          image: require('../assets/workItem/delivery.png')
        }
      ]
    }
  },
  methods: {
    toItem (p, t) {
      this.$router.push({ path: p, query: { title: t } })
    }
  }
}
</script>

<style scoped lang="scss">
#work {
  .content {
    li {
      height: 1.4rem;
      display: flex;
      font-size: .4rem;
      border-top: 1px solid #F2F2F2;
      justify-content: space-between;
      align-items: center;
      line-height: 1.4rem;
      padding: 0 .4rem;
      .img1 {
        height: .6rem;
        width: .6rem;
      }
      .img2 {
        width: .6rem;
        height: .6rem;
      }
      .left {
        display: flex;
        align-items: center;
        p {
          margin-left: .3rem;
        }
      }
    }
    li:nth-child(2n) {
      border-bottom: .4rem #F5F5F5 solid;
    }
  }
}
</style>
