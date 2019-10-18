<template>
  <div :class="`btn-wrap `+type">
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    type: { default: "blue" },
  }
};
</script>
<style scoped>
.btn-wrap {
  display: inline-block;
  width: 58px;
  height: 34px;
  margin-top: 5px;
}
.btn {
  border: 1px solid #8691b380;
  color: #8691b3;
  width: 48px;
  height: 24px;
  background: transparent;
  border-radius: 4px;
  font-family: "SourceHanSansCN";
  margin: 2px 0 0 5px;
}
.btn-wrap.blue {
  background: url("../../assets/images/btn-edit.png") no-repeat;
}
.btn-wrap.blue .btn {
  border: 1px solid transparent;
  color: #fff;
}

.btn-wrap.yellow {
  background: url("../../assets/images/btn-preview.png") no-repeat;
}
.btn-wrap.yellow .btn {
  border: 1px solid transparent;
  color: #fff;
}

.btn-wrap.transparent {
  background: transparent;
}
.btn-wrap.transparent .btn {
  border: 1px solid #8691b3;
  color: #2a3862;
}
</style>