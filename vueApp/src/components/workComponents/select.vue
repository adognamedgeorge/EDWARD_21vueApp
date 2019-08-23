<template>
  <div id="select">
    <ul>
      <cube-form>
        <cube-form-group>
          <cube-form-item>
            <li v-for="(item, index) in itemList" :key="index">
              <div class="content">
                <span v-text="item.name"></span>
                <cube-select v-model="item.value" :options="item.options" :title="item.title" :rules="item.rules"></cube-select>
              </div>
            </li>
          </cube-form-item>
          <cube-form-item>
            <li>
              <div class="content">
                <span>备注</span>
                <cube-textarea v-model="value2"></cube-textarea>
              </div>
            </li>
          </cube-form-item>
        </cube-form-group>
        <cube-form-group>
          <cube-button type="submit" @click="submitHandler">申请退货</cube-button>
        </cube-form-group>
      </cube-form>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    itemList: Array
  },
  data () {
    return {
      value2: ''
    }
  },
  methods: {
    submitHandler (e) {
      e.preventDefault()
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
#select {
  ul {
    li {
      border-bottom: 1px solid #F2F2F2;
      margin-left: .4rem;
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .24rem .4rem;
        font-size: .4rem;
        color: #323233;
      }
    }
    .cube-btn {
      margin: .5rem auto;
      width: 90%;
      border-radius: .125rem;
      background: #E62D2D;
    }
  }
}
</style>
