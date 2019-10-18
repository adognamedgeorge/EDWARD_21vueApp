<template>
  <div class="footer">
    <div class="row" style="margin-left:190px;">
      <p class="title">
        <a href="#">首页</a>
      </p>
      <p class="sub">
        <a href="#">关于我们</a>
      </p>
      <p class="sub">
        <a href="#">我们的优势</a>
      </p>
      <p class="sub">
        <a href="#">推荐作品</a>
      </p>
    </div>
    <div class="row">
      <p class="title">
        <a href="#">全景展示</a>
      </p>
      <p class="sub">
        <a href="#">全景图片</a>
      </p>
      <p class="sub">
        <a href="#">全景视频</a>
      </p>
    </div>
    <div class="row">
      <p class="title">
        <a href="#">全景资讯</a>
      </p>
      <p class="sub">
        <a href="#">新闻中心</a>
      </p>
      <p class="sub">
        <a href="#">拓展</a>
      </p>
    </div>
    <div class="row">
      <p class="title">
        <a href="#">VR体验</a>
      </p>
      <p class="sub">
        <a href="#">VR体验</a>
      </p>
    </div>
    <div class="row">
      <p class="title">
        <a href="#">联系我们</a>
      </p>
      <p class="phone">400-123-456</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 328px;
  background: #202940;
  font-family: "SourceHanSansCN";
  letter-spacing: 2px;
}
.row {
  display: inline-block;
  text-align: left;
  margin-right: 100px;
  margin-top: 79px;
  vertical-align: top;
}
p {
  margin: 0;
}
.row a {
  color: #fff;
  text-decoration: none;
}
.row .title {
  margin-bottom: 28px;
}
.row .title a {
  font-size: 30px;
  font-size: 16px;
}
.row .sub a {
  font-size: 12px;
  line-height: 28px;
  font-weight: 400;
  color: #bfbfbf;
}
.row .phone {
  font-weight: 700;
  color: #2c6eff;
  font-size: 24px;
  letter-spacing: 3px;
}
</style>