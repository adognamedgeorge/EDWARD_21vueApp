<template>
  <div :id="modal_id" :title="title" class="modal modal-slide" aria-hidden="true">
    <div class="modal_overlay" tabindex="-1" :data-modal-close="overlayEsc">
      <div class="modal_container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal_header">
          <h2 class="modal_title" id="modal_title">{{title}}</h2>
          <button class="modal_close" aria-label="Close modal" data-modal-close></button>
        </header>
        <main class="modal_content" id="modal-content">
          <slot></slot>
        </main>
        <footer class="modal_footer">
          <button class="modal_btn modal_btn-primary" data-modal-close style="margin-right:32px;">取消</button>
          <button class="modal_btn" @click="submit">确定</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
let isset = r => (typeof r == "undefined" ? 0 : 1);
export default {
  //@senBack 父组件监听事件，用来返回数据
  computed: {
    title: function() {
      return isset(this.modal_config.title) ? this.modal_config.title : "提示";
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
            return true;
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
  //modal_config.title:标题，可以省略
  //modal_config.submitBtnType:提交按钮样式，可以省略
  //modal_config.cancelBtnType:取消按钮样式，可以省略
  //modal_config.parser:数值解析器 模态传入,由模组解析成返回data的方法 funtion(){data.input1=...;data.input2=...;return data;}
  //modal_config.overlayEsc: 点击模态覆盖层是否取消，默认为不取消
  //modal_config.showThen 显示动作触发器
  //modal_config.closeThen 关闭动作触发器
  methods: {
    submit() {
      this.$emit("sendBack", this.parser());
    }
  },
  mounted() {
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
</style>