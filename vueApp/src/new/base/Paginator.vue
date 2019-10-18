<template>
  <div class="paginator">
    <div v-if="current>1" @click="go(current-1)" class="page prev"></div>
    <div v-if="current>1" @click="go(1)" class="page">1</div>
    <div v-if="current>4" class="page omit">...</div>
    <div
      :class="{page,current:current==page}"
      v-for="page in pages"
      :key="page"
      @click="go(page)"
    >{{page}}</div>
    <div v-if="current<total-4" class="page omit">...</div>
    <div v-if="current<total" @click="go(total)" class="page">{{total}}</div>
    <div v-if="current<total" @click="go(current+1)" class="page next"></div>
  </div>
</template>

<script>
import connect from "@/assets/js/connect";
export default {
  data() {
    return {
      current: 1,
      total: 1,
      callback: function(e) {
        connect.$emit("e-currentpage", e);
      }
    };
  },
  computed: {
    firstpage: function() {
      return false;
      return this.current > 1;
    },
    lastpage: function() {
      return false;
      return this.current < this.total;
    },
    pages: function() {
      var pages = [];
      if (this.current >= 4) pages.push(this.current - 2);
      if (this.current >= 3) pages.push(this.current - 1);
      pages.push(this.current);
      if (this.current <= this.total - 2) pages.push(this.current + 1);
      if (this.current <= this.total - 3) pages.push(this.current + 2);
      return pages;
    }
  },
  watch: {
    config(n) {
      this.current = n.current;
      this.total = n.total;
      if (typeof n.callback == "function") this.callback == n.callback;
    }
  },
  methods: {
    go(e) {
      this.current = e;
      this.callback(e);
    }
  },
  mounted() {},
  props: ["config"]
};
</script>

<style scoped>
.page {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #8691b3;
  border-radius: 40px;
  color: #8691b3;
  margin-top:20px;
  margin-right: 12px;
  vertical-align: middle;
}
.page.current {
  color: #2c6eff;
  border: 1px solid #2c6eff;
}
.omit {
  border: none;
  font-size: 30px;
}
.prev {
  background: url("../../assets/images/icon-arrow-left.png") no-repeat;
  background-position: 12px 10px;
}
.next {
  background: url("../../assets/images/icon-arrow-right.png") no-repeat;
  background-position: 16px 10px;
  margin-right: 0;
}
</style>