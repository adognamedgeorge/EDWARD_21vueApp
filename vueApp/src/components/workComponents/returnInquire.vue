<template>
  <div>
    <Header :txt="txt" :text="text" :isShow="true" :turn="turn" :isTrue="true"></Header>
    <div>
      <span >申请时间</span>
      <cube-select v-model="value1" :options="options1"></cube-select>
      <span>到</span>
      <cube-select v-model="value2"></cube-select>
      <cube-form>
        <cube-button @click="showDatePicker">选择时间{{model.dateValue}}</cube-button>
        <p @select="dateSelectHandler">11</p>
      </cube-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReturnInquire',
  data () {
    return {
      txt: '退货查询',
      text: '返回',
      turn: '/work',
      value1: '123',
      value2: '12',
      options1: [1],
      model: {
        dateValue: ''
      }
    }
  },
  methods: {
    showDatePicker () {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          columnOrder: [ 'year', 'month', 'date' ],
          onSelect: this.dateSelectHandler,
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
    dateSelectHandler (selectedVal) {
      this.model.dateValue = new Date(selectedVal).toString()
      console.log(`${selectedVal}`)
    }
  }
}
</script>

<style scoped>

</style>
