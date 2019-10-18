<template>
  <div class="card-list">
    <div class="list" v-if="listType!='edit'">
      <nothing v-if="listData==false">这里空空如也</nothing>
      <card
        class="card"
        v-for="list in listData"
        :key="list.index"
        :src="list.full_thumb_path?ossRoot+list.full_thumb_path:require('@/assets/test/0.jpg')"
        :eid="list.eid"
        :star_num="list.star_num"
        :click_num="list.click_num"
        :title="list.title"
        :category="list.category"
      ></card>
    </div>
    <!--</template>-->

    <paginator :config="pageConfig" style="margin-bottom:88px;"></paginator>
    <inverse-modal :modal_config="modal_remove_config" @sendBack="submitRemove">删除作品后不可恢复，你确定删除操作吗？</inverse-modal>
    <shift-modal id="shift_modal"></shift-modal>
    <default-modal :modal_config="modal_share_config">
      <div style="text-align:left;">
        <label style="display:block;">作品地址：</label>
        <input type="text" style="width:400px;" :value="myRoot + currentEid" />
      </div>
      <div style="text-align:left;margin-top:30px;">
        <label style="display:block;">嵌入到网站:</label>
        <input
          type="text"
          style="width:400px;"
          :value="'<iframe src=\''+myRoot + currentEid+'\'/>'"
        />
      </div>
    </default-modal>
  </div>
</template>

<script>
import works from "@/api/works";
import connect from "@/assets/js/connect";
import Card from "@/components/base/Card.vue";
import Nothing from "@/components/base/Nothing.vue";
import CardEdit from "@/components/base/CardEdit.vue";
import Paginator from "@/components/base/Paginator.vue";
import InverseModal from "@/components/modal/InverseModal.vue";
import DefaultModal from "@/components/modal/DefaultModal.vue";
import ShiftModal from "@/components/modal/ShiftModal.vue";
export default {
  data: () => {
    return {
      currentEid: "",
      currentId: "",
      ossRoot: process.env.VUE_APP_OSSROOT,
      modal_remove_config: {
        title: "删除",
        modal_id: "modal_remove"
      },
      modal_share_config: {
        title: "分享",
        modal_id: "modal_share"
      }
    };
  },
  mounted() {
    connect.$on("e-shiftGroup", group_id => {
      works
        .shiftMaterial({ id: this.currentId, new_group_id: group_id, type: 5 })
        .then(e => {
          e.code == 1 ? Modal.tip("移动成功！") : Modal.tip("移动失败");
          Modal.close("shift_modal");
        });
    });
  },
  computed: {
    listData() {
      if (
        typeof this.listInfo.data == "object" &&
        this.listInfo.data.length > 0
      ) {
        return this.listInfo.data;
      }
      return false;
    },
    pageConfig() {
      if (typeof this.listInfo.data == "object") {
        return {
          current: this.listInfo.current_page,
          total: this.listInfo.last_page
        };
      }
    }
  },
  methods: {
    submitRemove() {
      works.removePano(this.currentEid).then(e => {
        e.code == 1 ? Modal.tip("删除成功！") : Modal.tip("删除失败");
        Modal.close("modal_remove");
      });
    },
    remove(e) {
      this.currentEid = e.currentTarget.getAttribute("eid");
      this.currentId = e.currentTarget.getAttribute("data-id");
      Modal.show("modal_remove");
    },
    shift(e) {
      this.currentId = e.currentTarget.getAttribute("data-id");
      this.currentEid = e.currentTarget.getAttribute("eid");
      Modal.show("shift_modal");
    },
    share(e) {
      this.currentId = e.currentTarget.getAttribute("data-id");
      this.currentEid = e.currentTarget.getAttribute("eid");
      Modal.show("modal_share");
    }
  },
  components: {
    card: Card,
    paginator: Paginator,
    nothing: Nothing,
    "card-edit": CardEdit,
    "inverse-modal": InverseModal,
    "default-modal": DefaultModal,
    "shift-modal": ShiftModal
  },
  props: ["listType", "listInfo", "dataCurrentGroup", "myRoot"]
};
</script>

<style scoped>
@import url("../assets/css/form.css");
.card-list {
  width: 1178px;
  margin: 0 auto;
}
.list {
  overflow: hidden;
}
.card {
  float: left;
  margin-top: 28px;
  margin-bottom: 28px;
  margin-right: 19px;
}
.card:nth-child(4n) {
  margin-right: 0;
}
</style>