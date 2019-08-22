<template>
  <div class="return">
    <Header :txt="txt" :text="text" :turn="turn" :isShow="isShow"></Header>
    <div class="input">
      <span>小店</span>
      <cube-input v-model="value" :placeholder="placeholder"></cube-input>
      <img src="../../assets/workItem/arrow_right.png" alt="">
    </div>
    <Scan></Scan>
    <div class="content">
      <ul>
        <li v-for="(item, index) in contentList" :key="index" @click="toDetail(item)">
          <div class="title flex_box">
            <h3>订单号：{{item.number}}</h3>
            <button class="btn1">已完成</button>
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
            <button class="btn2">申请退货</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Scan from './scan'
export default {
  name: 'Returns',
  components: {
    Scan
  },
  data () {
    return {
      txt: '申请退货',
      text: '返回',
      turn: '/work',
      isShow: true,
      value: '',
      placeholder: '输入或选择小店编号或小店名称',
      contentList: [
        {
          number: '17986170922095111',
          price: '6819.00',
          pay_way: '货到付款',
          time: '2019-03-21 19:34',
          goods: [
            {
              name: '爵乐西拉子干红750ml*2',
              sell_price: '798.00',
              amount: 2,
              specs: '750ml*2瓶',
              unit: '箱'
            },
            {
              name: '500ml*12罐雪花超爽~【连锁】',
              sell_price: '98.00',
              amount: 3,
              specs: '500ml*12罐',
              unit: '箱'
            }
          ]
        },
        {
          number: '114542859005605695',
          price: '19.00',
          pay_way: '线上支付',
          time: '2019-08-20 13:17',
          goods: [
            {
              name: '【不参与折扣】脉动橘子味600ml*15瓶',
              sell_price: '98.00',
              amount: 3,
              specs: '600ml*15瓶',
              unit: '箱'
            }
          ]
        },
        {
          number: '13437849850948504',
          price: '111119.00',
          pay_way: '货到付款',
          time: '2019-07-21 11:00',
          goods: [
            {
              name: '【不参与折扣】600ml脉动水蜜桃味15瓶',
              sell_price: '8.00',
              amount: 8,
              specs: '600ml*15瓶',
              unit: '箱'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toDetail (i) {
      this.$router.push({ path: '/orderDetail', query: { orderNo: i } })
    }
  }
  // mounted () {
  //   this.txt = this.$route.query.title
  // }
}
</script>

<style scoped lang="scss">
  @import '~@/style/manager.scss';
.return {
  .input {
    display: flex;
    font-size: .4rem;
    height: 1.4rem;
    line-height: 1.4rem;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(242,242,242,1);
    padding: 0 .4rem;
    img {
      width: .6rem;
      height: .6rem;
    }
    .cube-input {
      flex: 1;
      margin-left: .4rem;
    }
    .cube-input::after {
      border: none;
    }
  }
}
</style>
