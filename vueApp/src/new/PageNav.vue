<template>
  <div>
    <div class="page-nav" style="border-bottom:1px solid #EBEBEB">
      <div class="wrap">
        <div class="left-side">
          <slot name="left-side"></slot>
        </div>
        <div class="right-side">
          <slot name="right-side"></slot>
        </div>
      </div>
    </div>
    <div class="page-nav" style="height:auto;overflow:hidden;">
      <div class="wrap">
        <slot name="sub-control"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.wrap {
  width: 1178px;
  margin: 0 auto;
  letter-spacing: 2px;
}
.page-nav {
  width: 100%;
  height: 80px;
  background: #ffffff;
}
.title {
  display: inline-block;
  font-size: 18px;
  margin-top: 28px;
  font-weight: 600;
}
.tag {
  display: inline-block;
  margin-top: 28px;
  margin-left: 48px;
  padding-bottom: 28px;
  font-size: 14px;
  letter-spacing: 0;
  color: #2a3862;
}
.tag strong {
  font-weight: normal;
  font-size: 16px;
}
.unit {
  position: relative;
  display: inline-block;
  margin-top: 28px;
  margin-left: 48px;
  padding-bottom: 28px;
}
.unit:nth-child(1) {
  margin-left: 0;
}
.unit.on > a:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 68px;
  height: 4px;
  background: #2c6eff;
}
.unit a {
  font-size: 16px;
  color: #2a3862;
  text-decoration: none;
}
.unit.on a {
  color: #2c6eff;
}
.left-side {
  float: left;
}
.right-side {
  float: right;
}
</style>
