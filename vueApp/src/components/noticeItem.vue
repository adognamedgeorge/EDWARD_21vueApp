<template>
  <div class="content">
    <ul>
      <li v-for="item in itemList" :key="item.index" @click="toSecond(item.id)">
        <div class="img">
          <img :src="item.image" alt="">
        </div>
        <div class="text">
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NoticeItem',
  data () {
    return {
      itemList: [
        {
          id: 1001,
          image: require('../assets/noticeItem/xz.png'),
          title: '行政部',
          text: '行政部关于高温天气作业注意事项'
        },
        {
          id: 1002,
          image: require('../assets/noticeItem/bag.png'),
          title: '商品部',
          text: '商品部关于高温天气作业注意事项'
        },
        {
          id: 1003,
          image: require('../assets/noticeItem/yy.png'),
          title: '运营部',
          text: '运营部关于高温天气作业注意事项'
        },
        {
          id: 1004,
          image: require('../assets/noticeItem/Computer.png'),
          title: '总部IT部',
          text: '总部IT部关于高温天气作业注意事项'
        },
        {
          id: 1005,
          image: require('../assets/noticeItem/yw.png'),
          title: '业务部',
          text: '业务部关于高温天气作业注意事项'
        },
        {
          id: 1006,
          image: require('../assets/noticeItem/cw.png'),
          title: '财务部',
          text: '财务部关于高温天气作业注意事项'
        }
      ],
      logTime: ''
    }
  },
  methods: {
    toSecond (param) {
      this.$router.push({ path: '/secondItem', query: { id: param } })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  background-color: #f7f4f4;
  width: 100%;
  height: 100%;
  position: absolute;
  padding-bottom: 5%;
  ul {
    li {
      background-color: #fff;
      margin: .3rem;
      display: flex;
      font-size: .5rem;
      padding: .3rem;
      justify-content: space-around;
      align-items: center;
      .img {
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 100%;
        border: 1px solid lightgrey;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 50%;
          height: 50%;
        }
      }
      .text {
        h3 {
          padding-bottom: .5rem;
        }
        p {
          color: grey;
          font-size: .4rem;
        }
      }
    }
    li:nth-child(odd) .img {
      background-color: #ff3c18;
    }
    li:nth-child(even) .img {
      background-color: #ffbf0c;
    }
  }
}
</style>
