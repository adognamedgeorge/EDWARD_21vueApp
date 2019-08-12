<template>
  <div class="secondItem">
    <ul>
      <li>
        <div>
          <h4>园区公共区域禁烟倡议书</h4>
          <p>{{logTime}}</p>
        </div>
      </li>
      <li>
        <div>
          <h4>园区公共区域禁烟倡议书</h4>
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
      itemList: [
        {
          id: 1001
        }
      ]
    }
  },
  created () {
    this.logTime = formatTime(new Date())
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
