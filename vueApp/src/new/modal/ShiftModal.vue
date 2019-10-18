<template>
  <div id="shift_modal" title="移动到" class="modal modal-slide" aria-hidden="true">
    <div class="modal_overlay" tabindex="-1" data-modal-close="overlayEsc">
      <div class="modal_container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal_header">
          <h2 class="modal_title" id="modal_title">移动到</h2>
          <button class="modal_close" aria-label="Close modal" data-modal-close></button>
        </header>
        <main class="modal_content" id="modal-content">
          <button
            v-for="(group,index) in groups"
            :key="index"
            :data-id="group.id"
            class="btn-group btn line grey"
            style="width:320px;height:36px;margin:0px 50px 16px"
            @click="toggle"
          >{{group.name}}</button>
        </main>
        <footer class="modal_footer">
          <button
            :class="`modal_btn modal_btn-primary`"
            @click="submit"
            style="margin-right:32px;"
          >确定</button>
          <button :class="`modal_btn `" data-modal-close>取消</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import works from "@/api/works";
import connect from "@/assets/js/connect";
let isset = r => (typeof r == "undefined" ? 0 : 1);
export default {
  data() {
    return {
      groups: []
    };
  },
  methods: {
    toggle(e) {
      document.querySelectorAll(".btn-group").forEach(e => {
        e.classList.remove("blue");
        e.classList.add("grey");
        e.classList.add("line");
      });
      if (e.currentTarget.classList.contains("blue")) {
        e.currentTarget.classList.remove("blue");
        e.currentTarget.classList.add("grey");
        e.currentTarget.classList.add("line");
      } else {
        e.currentTarget.classList.remove("line");
        e.currentTarget.classList.remove("grey");
        e.currentTarget.classList.add("blue");
      }
    },
    submit() {
      var data = document
        .querySelector(".btn-group.blue")
        .getAttribute("data-id");
      connect.$emit("e-shiftGroup", data);
    },
    initialGroup() {
      works.groups(5).then(e => {
        this.groups = e.data;
      });
    }
  },
  mounted() {
    this.initialGroup();
    connect.$on("e-freshgroup", val => {
      this.initialGroup();
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
</style>