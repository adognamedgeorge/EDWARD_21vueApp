<template>
  <div id="phone">
    <h3>手机号登录</h3>
    <div class="input">
      <span>手机号</span>
      <cube-input v-model="phone" placeholder="输入你的手机号"></cube-input>
    </div>
    <cube-validator :model="phone" :rules="rules" :messages="messages"></cube-validator>
    <div class="button">
      <cube-button :disabled="isDisabled" :class="{active: !isDisabled}" @click="toCode">下一步</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phone',
  data () {
    return {
      phone: '',
      rules: {
        required: true,
        type: 'phone',
        pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
      },
      messages: {
        pattern: '请输入正确手机号'
      },
      isDisabled: true
    }
  },
  methods: {
    toCode () {
      this.showToast('onLoading...', 600, './code')
    },
    showToast (txt, time, url) {
      const toast = this.$createToast({
        txt: txt,
        time: time,
        onTimeout: () => {
          this.$router.push(url)
        }
      })
      toast.show()
    }
  },
  updated () {
    if (this.rules.pattern.test(this.phone)) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
  }
}
</script>

<style scoped lang="scss">
#phone {
  h3 {
    font-size: .6rem;
  }
  .input {
    border-bottom: 1px solid lightgrey;
    margin: 0 .3rem;
    display: flex;
    .cube-input {
      width: 7rem;
      margin: .2rem;
      float: right;
    }
    .cube-input::after {
      border: none;
    }
    span {
      font-size: 50%;
      margin: auto auto;
      flex: 1;
    }
  }
  .button {
    margin: .6rem auto;
    width: 90%;
  }
  .active {
    background-color: red;
  }
}
</style>
