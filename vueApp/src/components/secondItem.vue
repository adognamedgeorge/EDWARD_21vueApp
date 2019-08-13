<template>
  <div class="secondItem">
    <Header :txt="txt" :text="text" :turn="turn" :isShow="isShow"></Header>
    <ul>
      <li v-for="item in list" :key="item.index">
        <div>
          <h4>{{item}}</h4>
          <p>{{logTime}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '../js/time.js'
export default {
  name: 'secondItem',
  data () {
    return {
      logTime: '',
      txt: '',
      text: '公告',
      turn: '/notice',
      list: [],
      isShow: true,
      itemList: [
        {
          id: 1001,
          item: [
            '行政部园区公共区域禁烟倡议书',
            '行政部园区公共区域禁烟倡议书'
          ],
          txt: '行政部'
        },
        {
          id: 1002,
          item: [
            '商品部园区公共区域禁烟倡议书',
            '商品部园区公共区域禁烟倡议书'
          ],
          txt: '商品部'
        },
        {
          id: 1003,
          item: [
            '运营部园区公共区域禁烟倡议书',
            '运营部园区公共区域禁烟倡议书'
          ],
          txt: '运营部'
        },
        {
          id: 1004,
          item: [
            '总部IT部园区公共区域禁烟倡议书',
            '总部IT部园区公共区域禁烟倡议书'
          ],
          txt: '总部IT部'
        },
        {
          id: 1005,
          item: [
            '业务部园区公共区域禁烟倡议书',
            '业务部园区公共区域禁烟倡议书'
          ],
          txt: '业务部'
        },
        {
          id: 1006,
          item: [
            '财务部园区公共区域禁烟倡议书',
            '财务部园区公共区域禁烟倡议书'
          ],
          txt: '财务部'
        }
      ]
    }
  },
  methods: {
    getId () {
      let currentIndex = (currentVal) => {
        // eslint-disable-next-line
        return currentVal.id == this.$route.query.id
      }
      let index = this.itemList.findIndex(currentIndex)
      this.list = this.itemList[index].item
      this.txt = this.itemList[index].txt
    }
  },
  created () {
    this.logTime = formatTime(new Date())
  },
  mounted () {
    this.getId()
  }
}
</script>

<style scoped lang="scss">
.secondItem {
  ul {
    li {
      height: 1.8rem;
      line-height: .9rem;
      margin: .4rem .4rem 0 .4rem;
      border-bottom: 1px solid #F2F2F2;
      div {
        float: left;
        h4 {
          font-size: .4rem;
          color: #323233;
        }
        p {
          font-size: .4rem;
          color: #AFAFB3;
          float: left;
        }
      }
    }
  }
}
</style>
