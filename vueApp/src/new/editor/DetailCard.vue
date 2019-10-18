<template>
  <div class="wrapper">
      <h4>企业名片</h4>
      <div class="switch">
          <span>企业名片是否开启</span>
          <el-switch v-model="base.global.card.enabled"></el-switch>
      </div>
      <div class="form">
          <div>
              <label for="">企业名称：</label>
              <input type="text" v-model="base.global.card.name">
          </div>
          <div>
              <label for="">企业电话：</label>
              <input type="text" v-model="base.global.card.tel">
          </div>
          <div>
              <label for="">企业地址：</label>
              <input type="text" v-model="base.global.card.address">
          </div>
          <div>
              <label for="">企业简介：</label>
              <input type="text" v-model="base.global.card.info">
          </div>
      </div>
      <div class="butn">
          <button>确定</button>
          <button>取消</button>
      </div>
  </div>
</template>

<script>
import Connect from '@/assets/js/connect';
export default {
    name: 'DetailCard',
    data () {
        return {
            value: true
        }
    },
    props:["base"]
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .switch, .form {
        width: 100%;
        display: flex;
    }
    .switch {
        justify-content: space-between;
        margin-bottom: 31px;
    }
    .form {
        flex-direction: column;
        align-items: center;
        div {
            margin-bottom: 24px;
            label, input {
                width: 100%;
            }
            label {
                display: inline-block;
                text-align: left;
                margin:0 0 10px 0;
                font-size: 14px;
                line-height: 14px;
            }
            input {
                height: 32px;
            }
        }
    }
    .butn {
        @include btnColor();
    }
}
</style>
