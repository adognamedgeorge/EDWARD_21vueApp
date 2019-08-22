<template>
  <div class="order">
    <Header :txt="txt" :text="text" :turn="turn" :isShow="isShow"></Header>
    <div class="order_detail">
      <div class="title flex_box">
        <h3>订单号: {{ item.number }}</h3>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">订单金额：</span>
          <span>¥{{item.price}}</span>
        </div>
        <div>
          <span class="span1">支付方式：</span>
          <span>{{item.pay_way}}</span>
        </div>
      </div>
      <div class="flex_box">
        <div>
          <span class="span1">下单时间：</span>
          <span>{{item.time}}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(i, index) in item.goods" :key="index">
          <div class="title flex_box">
            <h3 v-text="i.name"></h3>
            <span>￥{{i.sell_price}} * {{i.amount}}</span>
          </div>
          <div class="flex_box">
            <div>
              <span class="span1">商品规格：</span>
              <span v-text="i.specs"></span>
            </div>
          </div>
          <div class="flex_box">
            <div>
              <span class="span1">商品单位：</span>
              <span v-text="i.unit"></span>
            </div>
            <button class="btn2" @click="toReturndetail(i)">申请退货</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  data () {
    return {
      item: this.$route.query.orderNo,
      txt: '订单详情',
      text: '返回',
      turn: '/returns',
      isShow: true
    }
  },
  methods: {
    toReturndetail (x) {
      this.$router.push({path: '/returnDetail', query: {im: x}})
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/manager.scss';
</style>
