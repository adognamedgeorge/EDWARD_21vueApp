<template>
  <div id="code">
    <Header :text="text" :turn="turn"></Header>
    <div class="box">
      <h3>输入验证码</h3>
      <div class="input">
        <span>验证码</span>
        <cube-input v-model="code" placeholder="输入6位验证码"></cube-input>
        <button @click="getCode" :disabled="isTrue" :class="{ red: !isTrue }">{{btnText}}</button>
      </div>
      <cube-validator :model="code" :rules="rules" :messages="messages"></cube-validator>
      <div class="button">
        <cube-button :disabled="isDisabled" :class="{active: !isDisabled}" @click="toLogin">登录</cube-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Code',
  data () {
    return {
      code: '',
      text: '返回',
      turn: '/phone',
      rules: {
        required: true,
        type: 'number',
        len: 6
      },
      messages: {
        len: '请输入6位验证码'
      },
      isDisabled: true,
      isTrue: false,
      btnText: '获取验证码',
      leftTime: 30
    }
  },
  methods: {
    getCode () {
      this.isTrue = true
      this.leftTime -= 1
      if (this.leftTime > 0) {
        this.btnText = '已发送' + this.leftTime + 's'
        setTimeout(this.getCode, 1000)
      } else {
        this.btnText = '重新发送'
        this.isTrue = false
        this.leftTime = 30
      }
    },
    toLogin () {
      this.axios.post('https://easy-mock.com/mock/5d3ea2704e2ade1e90758673/vue/phonecodeLogin', {
        userPhone: this.phone,
        code: this.code
      })
        .then(res => {
          if (res.data.code === 'success') {
            this.showToast('Login...', 600, './notice')
          } else {
            this.showToast('验证码错误', 500)
          }
        })
        .catch(err => {
          console.log(err)
        })
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
    if (this.code.length === 6) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
  },
  // 生命周期里接收从phone页面路由传参过来的参数
  created () {
    this.phone = this.$route.query.phone
  }
}
</script>

<style scoped lang="scss">
#code {
  h3 {
    font-size: .6rem;
  }
  .input {
    border-bottom: 1px solid lightgrey;
    margin: 0 .3rem;
    display: flex;
    .cube-input {
      width: 5rem;
      margin: .2rem;
      float: right;
    }
    .cube-input::after {
      border: none;
    }
    span {
      font-size: .5rem;
      margin: auto auto;
    }
    button {
      height: 1rem;
      margin: auto;
      font-size: .2rem;
    }
  }
  .button {
    margin: .6rem auto;
    width: 90%;
  }
  .active {
    background-color: red;
  }
  .red {
    border: 1px solid red;
    color: red;
  }
}
</style>
