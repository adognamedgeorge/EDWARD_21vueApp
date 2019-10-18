<template>
  <div id="wrapper">
    <span class="iconfont lt" @click="prePage">&#xe651;</span>
    <ul>
      <li v-for="(pager, index) in pageNum" :key="index" :class="{ blue: changeBlue === index }" @click="go(index)">{{pager}}</li>
    </ul>
    <span class="iconfont rt" @click="nextPage">&#xe64f;</span>
  </div>
</template>

<script>
import Connect from '@/assets/js/connect.js'
export default {
  name: 'paging',
  data () {
    return {
      // 存储从subnav获取的数据
      data: [],
      totalPage: [],
      // 一页内展示的数据len
      pageSize: 5,
      // 共几页
      pageNum: 1,
      // 传递给content页面的数据
      dataShow: [],
      currentPage: 0,
      changeBlue: 0
    }
  },
  mounted () {
    // 获取从subnav的数据
    Connect.$on('e', (val) => {
      this.data = val
      this.getPageNum()
    })
  },
  watch: {
    // 向content传递数据
    dataShow (value) {
      Connect.$emit('ev', value)
    },
    currentPage (val) {
      this.changeBlue = val
    }
  },
  methods: {
    getPageNum () {
      // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1
      this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1
      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
      }
      this.currentPage = 0
      this.dataShow = this.totalPage[this.currentPage]
      Connect.$emit('ev', this.dataShow)
    },
    nextPage () {
      if (this.currentPage === this.pageNum - 1) return
      this.dataShow = this.totalPage[++this.currentPage]
    },
    prePage () {
      if (this.currentPage === 0) return
      this.dataShow = this.totalPage[--this.currentPage]
    },
    go (i) {
      this.dataShow = this.totalPage[i]
      this.currentPage = i
    }
  }
}
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin: 46px auto 0;
  .lt, .rt {
    font-size: 40px;
    display: inline-block;
    cursor: pointer;
  }
  .lt:hover, .rt:hover {
    color: #2C6EFF;
  }
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 38px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      border: 1px solid rgba(134,145,179,1);
      border-radius: 50%;
      margin-left: 22px;
      cursor: pointer;
    }
  }
  .blue {
    color: #2C6EFF;
    border: 1px solid #2C6EFF;
  }
}
</style>
