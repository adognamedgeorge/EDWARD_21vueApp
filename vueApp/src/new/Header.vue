<template>
  <div class="header">
    <div class="top-bar">
      <div class="wrap">
        <div class="logo">
          <router-link to="/">
            <img :src="require(`@/assets/images/logo.png`)" alt />
          </router-link>
        </div>
        <div class="categories">
          <span>
            <router-link to="/main">首页</router-link>
          </span>
          <span>
            <router-link to="/show">全景展示</router-link>
          </span>
          <span>
            <router-link to="/new">全景咨讯</router-link>
          </span>
          <span>
            <router-link to="/try">VR体验</router-link>
          </span>
          <span>
            <router-link to="/contact">联系我们</router-link>
          </span>
        </div>
        <button class="upload" @click="upload">上传</button>
        <customer style="float:right;margin-top:-6px;"></customer>
      </div>
    </div>
  </div>
</template>

<script>
import Customer from "@/components/base/Customer.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    customer: Customer
  },
  mounted() {},
  methods: {
    upload() {
      this.$router.push("/upload");
    }
  }
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 79px;
  background: #2c6eff;
  font-size: 16px;
}
.top-bar .wrap {
  width: 1178px;
  margin: 0 auto;
  padding: 22px 0;
  text-align: left;
}
.logo {
  display: inline-block;
  margin-right: 100px;
  height: 18px;
  vertical-align: middle;
}
.categories {
  display: inline-block;
  vertical-align: middle;
}
.categories a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  margin-right: 36px;
}
.upload {
  width: 70px;
  height: 32px;
  background: #ff7733;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 14px;
  margin-left: 20px;
  font-weight: 600;
}
.upload:active,
.upload:hover {
  background: #e76523;
}
</style>