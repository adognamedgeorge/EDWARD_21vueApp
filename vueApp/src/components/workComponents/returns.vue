<template>
  <div class="return">
    <Header :txt="txt" :text="text" :turn="turn" :isShow="isShow"></Header>
    <div class="input">
      <span>小店</span>
      <cube-input v-model="value" :placeholder="placeholder"></cube-input>
      <img src="../../assets/workItem/arrow_right.png" alt="">
    </div>
    <div class="scan">
      <div class="scan_box">
        <img src="../../assets/scan.png" alt="">
        <p>扫一扫</p>
      </div>
      <cube-input v-model="value2" :placeholder="placeholder2"></cube-input>
      <button>搜索</button>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in contentList" :key="index">
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
export default {
  name: 'Returns',
  data () {
    return {
      txt: '',
      text: '返回',
      turn: '/work',
      isShow: true,
      value: '',
      placeholder: '输入或选择小店编号或小店名称',
      value2: '',
      placeholder2: '搜索商品关键词/条形码',
      contentList: [
        {
          number: '17986170922095111',
          price: 6819.00,
          pay_way: '货到付款',
          time: '2019-03-21 19:34'
        },
        {
          number: '114542859005605695',
          price: 19.00,
          pay_way: '线上支付',
          time: '2019-08-20 13:17'
        },
        {
          number: '13437849850948504',
          price: 111119.00,
          pay_way: '货到付款',
          time: '2019-07-21 11:00'
        }
      ]
    }
  },
  mounted () {
    this.txt = this.$route.query.title
  }
}
</script>

<style scoped lang="scss">
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
  .scan {
    display: flex;
    align-items: center;
    line-height: 1.6rem;
    height: 1.6rem;
    padding: 0 .4rem;
    justify-content: space-between;
    border-bottom: .4rem solid #F5F5F5;
    .scan_box {
      height: .9rem;
      line-height: .45rem;
      img {
        width: .6rem;
        height: .6rem;
      }
      p {
        font-size: .3rem;
        color: #AFAFB3;
      }
    }
    .cube-input {
      background-color: rgba(245,245,245,1);
      flex: 1;
      margin-left: .4rem;
    }
    button {
      font-size: .4rem;
      background-color: #E62D2D;
      height: 1.1rem;
      width: 1.8rem;
      border: none;
      border-radius: .05rem;
      color: white;
    }
  }
  .content {
    li {
      height: 3.5rem;
      border-bottom: 1px solid rgba(242,242,242,1);
      padding: .7rem .4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .flex_box {
      display: flex;
      margin-bottom: .4rem;
      justify-content: space-between;
      align-items: center;
      .btn1 {
        width: 1.5rem;
        height: .6rem;
        background-color: #24B36B;
        color: white;
        font-size: .3rem;
        border-radius: .3rem;
        border: none;
      }
      .btn2 {
        width: 1.8rem;
        height: .7rem;
        background-color: white;
        border: 1px solid #E62D2D;
        color: #E62D2D;
        font-size: .3rem;
      }
    }
    .title {
      h3 {
        color: #323233;
        font-size: .4rem;
        font-weight: bold;
      }
    }
    span {
      font-size: .4rem;
      color: #646466;
    }
    .span1 {
      color: #AFAFB3;
    }
  }
}
</style>
