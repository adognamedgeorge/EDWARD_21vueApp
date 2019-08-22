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
  </div>
</template>

<script>
export default {
  name: 'ReturnDetail',
  data () {
    return {
      txt: '退货详情',
      text: '返回',
      turn: '/returns',
      i: this.$route.query.im
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/style/manager.scss';
</style>
