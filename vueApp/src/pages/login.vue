<template>
  <div class="hello">
    <div class="img">
      <img src="../assets/bug.jpg" alt="">
    </div>
    <h3>欢迎登录云蚂蚁管理平台</h3>
    <div class="input">
      <span>用户名</span>
      <cube-input v-model="text" placeholder="输入你的用户名"></cube-input>
    </div>
    <div class="input">
      <span>密码</span>
      <cube-input v-model="text2" placeholder="输入你的账号密码" type="password"></cube-input>
    </div>
    <cube-validator v-model="valid" :model="text" :rules="rules" :messages="messages"></cube-validator>
    <cube-validator :rules="rules2" :model="text2"></cube-validator>
    <div class="button">
      <cube-button @click="toLogin" :disabled="isDisabled" :class="{ active: !isDisabled }">确认登录</cube-button>
    </div>
    <div class="button">
      <cube-button :light="true" @click="toPhone">手机号登录</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      text: '',
      text2: '',
      valid: undefined,
      rules: {
        required: true,
        type: 'email',
        pattern: /didi.com$/
      },
      rules2: {
        required: true
      },
      messages: {
        pattern: 'The E-mail suffix need to be didi.com.'
      },
      isDisabled: true
    }
  },
  methods: {
    toLogin () {
      this.axios.post('https://easy-mock.com/mock/5d3ea2704e2ade1e90758673/vue/login', {
        username: this.text,
        password: this.text2
      })
      .then(res => {
        if (res.data.status === 'success') {
          this.showToast('onLoading...', 500, './notice')
        } else {
          const toast = this.$createToast({
            txt: res.data.info,
            time: 500
          })
          toast.show()
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
    },
    toPhone () {
      this.showToast('手机号登录', 500, './phone')
    }
  },
  // 页面更新改变按钮颜色
  updated () {
    if (this.text !== '' && this.text2 !== '') {
      this.isDisabled = false
    } else if (this.text === '' || this.text2 === '') {
      this.isDisabled = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin-top: 20px;
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
      font-size: .5rem;
      margin: auto auto;
      flex: 1;
    }
  }
  .button {
    width: 90%;
    margin: .6rem auto;
  }
  .img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    border: 1px solid red;
    overflow: hidden;
    margin: .6rem auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .active {
    background: red;
  }
}
</style>
