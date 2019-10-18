<template>
  <div class="customer" style="height: 80px;">
    <div class="avatar">
      <img :src="head" alt />
      <p class="text">{{info.name}}</p>
    </div>
    <div class="flex usermenu" style="transition: width,height .4s linear;">
      <p>
        <router-link to="/center">个人中心</router-link>
      </p>
      <p>
        <router-link to="/home">作品管理</router-link>
      </p>
      <p>
        <router-link to="/setting">账户设置</router-link>
      </p>
      <p>
        <span @click="logout" style="cursor:pointer">退出登录</span>
      </p>
    </div>
  </div>
</template>

<script>
import user from "@/api/user";
export default {
  data() {
    return {
      info: { name: " ", head: false }
    };
  },
  computed: {
    head: function() {
      if (typeof this.info.head == "string") {
        return process.env.VUE_APP_OSS_ROOT + this.info.head;
      } else {
        return require("@/assets/test/avatar.jpg");
      }
    }
  },
  mounted() {
    user.getInfo().then(res => {
      // console.log(res);
      this.info = res;
    });
  },
  methods: {
    logout() {
      user.logout().then(() => this.$router.push({ path: "/login" }));
    }
  }
};
</script>

<style scoped>
.customer {
  position: relative;
}
.usermenu {
  visibility: hidden;
  position: absolute;
  right: 0;
  top: 55px;
  padding: 16px;
  font-size: 14px;
  line-height: 28px;
  background: #fff;
  color: #2a3862;
  z-index: 9999;
  flex-direction: column;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.27);
  border-radius: 4px;
  transition: height, overflow 0.4s linear;
  overflow: hidden;
}
.usermenu a {
  color: #2a3862;
}
.avatar {
  margin-top: 5px;
}
.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  vertical-align: middle;
  margin-right: 10px;
}

.customer:hover .usermenu {
  visibility: visible;
}

.avatar p {
  position: relative;
  display: inline-block;
  color: #fff;
  vertical-align: middle;
  padding-right: 24px;
  font-size: 14px;
  letter-spacing: 1px;
}
.avatar p:hover:after {
  transform: rotate(360);
}
.avatar p:after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  right: 0;
  bottom: 9px;
  line-height: 24px;
  border-top: 6px solid #fff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}
</style>