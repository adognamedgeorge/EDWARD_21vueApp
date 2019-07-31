<template>
  <div class="itemWrap" @click="changePage">
    <span v-show="!bol">
      <slot name="normalImg"></slot>
    </span>
    <span v-show="bol">
      <slot name="activeImg"></slot>
    </span>
    <span v-text="txt"></span>
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
}
</style>
