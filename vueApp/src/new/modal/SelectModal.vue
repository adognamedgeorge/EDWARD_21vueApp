<template>
  <div :id="modal_id" :title="title" class="modal modal-slide" aria-hidden="true">
    <div class="modal_overlay" tabindex="-1" :data-modal-close="overlayEsc">
      <div class="modal_container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal_header">
          <h2 class="modal_title" id="modal_title">{{title}}</h2>
          <div class="search">
            <input type="text" name="keywords" v-model="keywords" placeholder="请输入要搜索的内容" />
            <div class="search-btn"></div>
          </div>
          <div class="select">
            <select v-model="select_group" style="direction: rtl;border:none;text-indent:20px;">
              <option value="0">未分组</option>
              <option v-for="(group,index) in groups" :key="index" :value="group.id">{{group.name}}</option>
            </select>
          </div>
        </header>
        <main class="modal_content" id="modal-content">
          <div
            class="wrap"
            v-for="(m,index) in mList"
            :data-index="index"
            :key="index"
            @click="select"
          >
            <img :src="m.preview" alt />
            <span>{{m.name}}</span>
          </div>
        </main>
        <footer class="modal_footer">
          <button
            :class="`modal_btn `+submitBtnType"
            @click="submit"
            style="margin-right:32px;"
            data-modal-close
          >确定</button>
          <button :class="`modal_btn `+cancelBtnType" data-modal-close>取消</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import works from "@/api/works";
let isset = r => (typeof r == "undefined" ? 0 : 1);
export default {
  data() {
    return {
      groups: [],
      mList: [],
      select_group: 0,
      keywords: "",
      myRoot: process.env.VUE_APP_APIROOT
    };
  },
  watch: {
    keywords(n) {
      this.initial();
    },
    select_group(n) {
      this.initial();
    }
  },
  //@senBack 父组件监听事件，用来返回数据
  computed: {
    title: function() {
      return isset(this.modal_config.title) ? this.modal_config.title : "提示";
    },
    submitBtnType: function() {
      return isset(this.modal_config.submitBtnType)
        ? this.modal_config.submitBtnType
        : "modal_btn-primary";
    },
    cancelBtnType: function() {
      isset(this.modal_config.cancelBtnType)
        ? this.modal_config.cancelBtnType
        : "";
    },
    modal_id: function() {
      return isset(this.modal_config.modal_id)
        ? this.modal_config.modal_id
        : "modal";
    },
    parser: function() {
      return isset(this.modal_config.parser)
        ? this.modal_config.parser
        : () => {
            return "";
          };
    },
    overlayEsc: function() {
      return isset(this.modal_config.overlayEsc)
        ? this.modal_config.overlayEsc
        : false;
    },
    show_then: function() {
      if (typeof this.modal_config.showThen == "function") this.showThen();
      return false;
    },
    close_then: function() {
      if (typeof this.modal_config.closeThen == "function") this.closeThen();
      return false;
    }
  },
  props: ["modal_config"],
  methods: {
    select(e) {
      var status = e.currentTarget.classList.contains("selected");
      status
        ? e.currentTarget.classList.remove("selected")
        : e.currentTarget.classList.add("selected");
    },
    initial() {
      works
        .getMaterial({
          group_id: this.select_group,
          key: this.keywords,
          type: 4
        })
        .then(e => {
          this.mList = e.data.data;
          console.log(e);
        });
    },
    submit() {
      var lists = document.querySelectorAll(".wrap.selected");
      var result = [];
      lists.forEach(e => {
        var index = e.getAttribute("data-index");
        result.push(this.mList[index]);
      });
      this.$emit("sendBack", result);
    }
  },
  mounted() {
    this.initial();
    works.groups(4).then(e => {
      this.groups = e.data;
    });
    Modal.init({
      onShow: modal => this.show_then,
      onClose: modal => this.close_then,
      openTrigger: "data-modal-trigger",
      closeTrigger: "data-modal-close",
      disableScroll: true,
      disableFocus: false,
      awaitOpenAnimation: false,
      awaitCloseAnimation: false,
      debugMode: false
    });
  }
};
</script>

<style scoped>
@import url("../../assets/css/modal.css");
.modal_container {
  width: 945px;
}

.search {
  width: 240px;
  height: 32px;
  border-radius: 32px;
  border: 1px solid #8691b350;
  position: relative;
  text-align: left;
}
.search input {
  width: 190px;
  height: 32px;
  line-height: 32px;
  border: none;
  margin-left: 16px;
}
.search .search-btn {
  width: 32px;
  height: 32px;
  background: url("../../assets/images/icon-zoomin.png") no-repeat;
  position: absolute;
  right: -4px;
  top: 8px;
}
.modal_content {
  box-sizing: border-box;
  width: 100%;
  height: 490px;
  overflow-y: scroll;
  padding: 21px 62px;
}
.modal_content .wrap {
  float: left;
  margin-right: 46px;
  margin-bottom: 40px;
}
.modal_content .wrap:nth-child(5n) {
  margin-right: 0px;
}
.wrap.selected img {
  border: 2px solid #ff8141;
}
.wrap img {
  display: block;
  width: 120px;
  height: 90px;
  border: 2px solid transparent;
  border-radius: 4px;
  object-fit: cover;
}
.wrap span {
  margin-top: 10px;
  width: 120px;
  text-overflow: ellipsis;
  font-size: 12px;
  display: inline-block;
  overflow: hidden;
  color: #2a3862;
  white-space: nowrap;
}
.modal_footer {
  border-top: 1px solid #8691b350;
}

.select::after {
  bottom: 18px;
}
</style>