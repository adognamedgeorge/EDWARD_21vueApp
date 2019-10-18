<template>
  <div class="card">
    <a :href="kp_root + eid" target="_blank">
      <div class="img-wrap">
        <img :src="src" />
      </div>
      <div class="info">
        <p class="chief">{{title}}</p>
      </div>
      <div class="action">
        <div class="left">{{category.value}}</div>
        <div class="right">
          <div class="viewed">{{click_num}}</div>
          <div class="liked">{{star_num}}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["src", "eid", "star_num", "click_num", "title", "category"],
  components: {},
  data() {
    return {
      kp_root: process.env.VUE_APP_KP_ROOT
    };
  }
};
</script>

<style scoped>
.card {
  width: 280px;
  height: 300px;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  font-family: "SourceHanSansCN";
  text-align: left;
}

.info {
  display: block;
  padding: 8px 15px 5px;
  border-bottom: 1px solid #e7e9f0;
}

p {
  margin: 0;
}

.chief {
  color: #2a3862;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 5px auto;
}
.img-wrap {
  width: 280px;
  height: 210px;
  overflow: hidden;
}
img {
  width: 280px;
  height: 210px;
  object-fit: cover;
  transition: 0.8s;
}
img:hover {
  transform: scale(1.2);
}
.sub-info {
  line-height: 30px;
}
.left {
  float: left;
  color: #8691b3;
  font-size: 12px;
  margin: 9px 10px 5px;
}
.right {
  float: right;
  margin-right: 14px;
  margin-top: 6px;
}
.viewed {
  display: inline-block;
  background: url("../../assets/images/icon-view.png") no-repeat;
  color: #8691b3;
  font-size: 12px;
  line-height: 14px;
  text-indent: 20px;
  margin-right: 22px;
}
.liked {
  display: inline-block;
  background: url("../../assets/images/icon-like.png") no-repeat;
  color: #8691b3;
  font-size: 12px;
  line-height: 14px;
  text-indent: 18px;
}
.date {
  float: right;
  font-size: 12px;
  color: #8691b3;
}
.action {
  margin-top: 4px;
  margin-left: 5px;
}
</style>