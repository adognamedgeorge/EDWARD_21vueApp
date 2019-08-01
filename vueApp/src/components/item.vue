<template>
  <div class="itemWrap" @click="changePage">
    <span v-show="!bol">
      <slot name="normalImg"></slot>
    </span>
    <span v-show="bol">
      <slot name="activeImg"></slot>
    </span>
    <span v-text="txt" :class="{ active: bol }"></span>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    txt: String,
    page: String,
    sel: String
  },
  methods: {
    changePage () {
      this.$emit('change', this.page)
      this.showToast('To' + ' ' + this.page + '...', 600, '/' + this.page)
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
  computed: {
    bol () {
      if (this.sel === this.page) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.itemWrap {
  display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
  /*flex-grow: 1;*/
  flex-direction: column;
  .active {
    color: #1296db;
  }
}
</style>
