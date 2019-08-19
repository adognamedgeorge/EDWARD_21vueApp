<template>
  <div id="telist">
    <cube-index-list
      :data="telData"
      :pullUpLoad="true">
      <cube-index-list-group v-for="(group, index) in telData" :key="index" :group="group">
        <cube-index-list-item v-for="(item, index) in group.items" :key="index" :item="item" @select="selectItem">
          <div class="custom-item" @click="showBtn(item.name, item.tel)">
            <h3>{{ item.name }}</h3>
            <div class="telbox">
              <span>{{ item.tel }}</span>
              <div>
                <img src="../assets/phone_call.png" alt="">
              </div>
            </div>
          </div>
        </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
  </div>
</template>

<script>
export default {
  name: 'telist',
  data () {
    return {
      telData: [
        {
          'name': 'C',
          'items': [
            {
              'name': '楚留香',
              'tel': 13084759203,
              'value': 1
            },
            {
              'name': '陈家洛',
              'tel': 17023545483,
              'value': 2
            }
          ]
        },
        {
          'name': 'D',
          'items': [
            {
              'name': '东方不败',
              'tel': 14589560274,
              'value': 3
            }
          ]
        },
        {
          'name': 'H',
          'items': [
            {
              'name': '花满楼',
              'tel': 12945687945,
              'value': 4
            },
            {
              'name': '花无缺',
              'tel': 12495768432,
              'value': 5
            }
          ]
        },
        {
          'name': 'L',
          'items': [
            {
              'name': '李寻欢',
              'tel': 15865959687,
              'value': 6
            }
          ]
        },
        {
          'name': 'X',
          'items': [
            {
              'name': '西门吹雪',
              'tel': 18075967137,
              'value': 7
            }
          ]
        },
        {
          'name': 'Y',
          'items': [
            {
              'name': '叶孤城',
              'tel': 14596794573,
              'value': 8
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectItem (item) {
      console.log(item.name)
    },
    showBtn (name, tel) {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '确定拨打电话？',
        content: '确定拨打' + name + '的电话号码' + tel,
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '点击确认按钮'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '点击取消按钮'
          }).show()
        }
      }).show()
    }
  }
}
</script>

<style scoped lang="scss">
#telist {
  height: 13rem;
  .custom-item {
    font-size: .4rem;
    display: flex;
    height: 1.4rem;
    line-height: 1.4rem;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgba(242,242,242,1);
    margin: 0 .4rem;
    .telbox {
      display: flex;
      align-items: center;
      div {
        width: .7rem;
        height: .7rem;
        line-height: .7rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.cube-dialog-icon {
  display: hidden;
}
</style>
