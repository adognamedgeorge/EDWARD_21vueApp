<template>
  <div>
    <Header :txt="txt" :text="text" :isShow="true" :turn="turn" :isTrue="true"></Header>
    <div>
      <span @click="dateSelectHandle">申请时间</span>
      <cube-select v-model="value1" :options="options1"></cube-select>
      <span>到</span>
      <cube-select v-model="value2"></cube-select>
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
      options1: [1, 2, 3]
    }
  },
  methods: {
    dateSelectHandle () {
      // this.options1 = new Date().toDateString()
      // // this.model.dateValue = new Date(selectedVal[0], selectedVal[1] - 1, selectedVal[2]).toDateString()
      console.log(new Date().toDateString())
    }
  }
}
</script>

<style scoped>

</style>
