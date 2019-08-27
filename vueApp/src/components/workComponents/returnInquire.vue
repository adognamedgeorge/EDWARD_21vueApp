<template>
  <div id="returnInquire">
    <Header :txt="txt" :text="text" :isShow="true" :turn="turn" :isTrue="true"></Header>
    <div class="box">
      <div>
        <cube-form>
          <span @click="showDatePicker1">申请时间</span>
          <p @click="dateSelectHandler1">{{dateValue1 || value}}</p>
        </cube-form>
      </div>
      <div>
        <cube-form>
          <span @click="showDatePicker2">到</span>
          <p @select="dateSelectHandler2">{{dateValue2 || value}}</p>
        </cube-form>
      </div>
    </div>
    <Scan></Scan>
    <div class="order_detail">
      <div class="title flex_box">
        <h3>订单号: </h3>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">订单金额：</span>
          <span>¥{{}}</span>
        </div>
        <div>
          <span class="span1">支付方式：</span>
          <span>{{}}</span>
        </div>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">下单时间：</span>
          <span>{{}}</span>
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
      dateValue2: ''
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
}
</style>
