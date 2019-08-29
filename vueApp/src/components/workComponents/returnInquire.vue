<template>
  <div id="returnInquire">
    <Header :txt="txt" :text="text" :isShow="true" :turn="turn" :isTrue="true"></Header>
    <div class="box">
      <div>
        <cube-form>
          <span>申请时间</span>
          <p @click="showDatePicker1">{{dateValue1 || value}}</p>
        </cube-form>
      </div>
      <div>
        <cube-form>
          <span>到</span>
          <p @click="showDatePicker2">{{dateValue2 || value}}</p>
        </cube-form>
      </div>
    </div>
    <Scan></Scan>
    <div class="order_detail" v-for="(item, index) in list" :key="index">
      <div class="title flex_box">
        <h3 v-text="item.title"></h3>
        <button class="btn1 btn2" v-if="item.status === 1">待审核</button>
        <button class="btn1 btn3" v-if="item.status === 2">客服打回</button>
        <button class="btn1" v-if="item.status === 3">退货成功</button>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">可申请数：</span>
          <span>{{item.enableApply}}</span>
        </div>
        <div>
          <span class="span1">实际申请：</span>
          <span>{{item.realApply}}</span>
        </div>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">小店编号：</span>
          <span>{{item.shopNo}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/js/time.js'
import Scan from './scan'
export default {
  name: 'ReturnInquire',
  components: {
    Scan
  },
  data () {
    return {
      txt: '退货查询',
      text: '返回',
      turn: '/work',
      value: '',
      dateValue1: '',
      dateValue2: '',
      list: [
        {
          title: '1995三九橡木桶750ml*6瓶',
          status: 1,
          enableApply: 11,
          realApply: 5,
          shopNo: 51187645678
        },
        {
          title: '美汁源果粒橙橙味 420ml*12瓶',
          status: 2,
          enableApply: 22,
          realApply: 6,
          shopNo: 622118232338
        },
        {
          title: '268ml*15瓶雀巢咖啡丝滑拿铁【连锁】',
          status: 3,
          enableApply: 33,
          realApply: 7,
          shopNo: 755511823232
        }
      ]
    }
  },
  methods: {
    showDatePicker1 () {
      if (!this.datePicker1) {
        this.datePicker1 = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          columnOrder: [ 'year', 'month', 'date' ],
          onSelect: this.dateSelectHandler1,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker1.show()
    },
    showDatePicker2 () {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          columnOrder: [ 'year', 'month', 'date' ],
          onSelect: this.dateSelectHandler2,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker.show()
    },
    // selectHandle (date, selectedVal, selectedText) {
    //   this.$createDialog({
    //     type: 'warn',
    //     content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
    //     icon: 'cubeic-alert'
    //   }).show()
    // },
    cancelHandle () {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    },
    dateSelectHandler1 (selectedVal) {
      // this.model.dateValue = new Date(selectedVal).toString()
      // const str = this.model.dateValue.split()
      // console.log(str)
      // console.log(`${selectedVal}`)
      // console.log(this.model.dateValue)
      this.dateValue1 = formatTime(selectedVal)
    },
    dateSelectHandler2 (selectedVal) {
      this.dateValue2 = formatTime(selectedVal)
    }
  },
  mounted () {
    this.value = formatTime(new Date())
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/manager.scss';
#returnInquire {
  .box {
    display: flex;
    align-items: center;
    height: 1.4rem;
    justify-content: space-around;
    color: #AFAFB3;
    font-size: .4rem;
    border-bottom: 1px solid #F2F2F2;
    div {
      .cube-form {
        display: flex;
        span {
          color: #323233;
          margin-right: .2rem;
        }
      }
    }
  }
  .btn2 {
    background-color: #FFB319;
  }
  .btn3 {
    background-color: #F38076;
  }
}
</style>
