<template>
  <div>
    <Header :txt="txt" :text="text" :turn="turn" :isShow="true"></Header>
    <div class="order_detail">
      <div class="title flex_box">
        <h3>{{i.name}}</h3>
        <span>¥{{i.sell_price}}</span>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">商品规格：</span>
          <span v-text="i.specs"></span>
        </div>
        <div>
          <span class="span1">商品单位：</span>
          <span>箱</span>
        </div>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">商品数量：</span>
          <span>{{i.amount}}</span>
        </div>
        <div>
          <span class="span1">异常数量：</span>
          <span>0</span>
        </div>
      </div>
    </div>
    <Select :itemList="selectItem"></Select>
  </div>
</template>

<script>
import Select from './select'
export default {
  name: 'ReturnDetail',
  components: {
    Select
  },
  data () {
    return {
      txt: '退货详情',
      text: '返回',
      turn: '/returns',
      i: this.$route.query.im,
      selectItem: [
        {
          name: '退货数量',
          value: '',
          options: [1, 2, 3, 4, 5, 6],
          title: '请选择退货数量',
          rules: {
            required: true
          }
        },
        {
          name: '退款方式',
          value: '现金退款',
          options: ['现金退款', '线上退款'],
          title: '请选择退款方式',
          rules: {
            required: true
          }
        },
        {
          name: '异常类型',
          value: '退货',
          options: ['退货', '仅退款', '退货退款'],
          title: '请选择异常类型',
          rules: {
            required: true
          }
        },
        {
          name: '退货原因',
          value: '日期不好',
          options: ['日期不好', '人品不好', '颜色太绿'],
          title: '请选择退货原因',
          rules: {
            required: true
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/style/manager.scss';
</style>
