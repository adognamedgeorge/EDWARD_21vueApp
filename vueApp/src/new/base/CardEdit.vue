<template>
  <div class="card">
    <a :href="kp_root + dataList.eid">
      <div class="img-wrap">
        <img
          :src="dataList.full_thumb_path?ossRoot+dataList.full_thumb_path:require('@/assets/test/0.jpg')"
        />
      </div>
      <div class="info">
        <p class="chief">{{dataList.title}}</p>
        <p class="minor">{{dataList.category.value}}</p>
        <div class="sub-info">
          <div class="viewed">{{dataList.click_num}}</div>
          <div class="liked">{{dataList.star_num}}</div>
          <span class="date">{{dataList.created_at}}</span>
        </div>
      </div>
    </a>
    <div class="action">
      <router-link
        class="small blue"
        :data-id="dataList.id"
        :eid="dataList.eid"
        style="margin:8px 18px 8px 8px;"
        :to="{path:'/editor',query:{eid:dataList.eid}}"
        tag="button"
      >编辑</router-link>
      <button
        class="small yellow"
        :eid="dataList.eid"
        :data-id="dataList.id"
        style="margin:8px 18px 8px 0"
        @click="shift"
      >移动</button>
      <button
        class="small blue"
        :eid="dataList.eid"
        :data-id="dataList.id"
        style="margin:8px 18px 8px 0"
        @click="share"
      >分享</button>
      <button
        class="small line"
        :eid="dataList.eid"
        :data-id="dataList.id"
        style="margin:8px 0px"
        @click="remove"
      >删除</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ossRoot: process.env.VUE_APP_OSSROOT,
      kp_root: process.env.VUE_APP_KP_ROOT
    };
  },
  props: ["edit", "shift", "share", "remove", "data-list"],
  components: {}
};
</script>

<style scoped>
.card {
  width: 280px;
  height: 360px;
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
  margin-top: 5px;
}
.minor {
  color: #8691b3;
  font-size: 12px;
  margin: 0 0 5px;
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