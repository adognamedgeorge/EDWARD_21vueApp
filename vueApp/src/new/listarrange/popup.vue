<template>
  <div class="pop">
    <ul>
      <li class="addGroup" data-modal-trigger="modal-add-group">添加分组+</li>
      <li>
        <span @click="currentGroup(0)">未分组</span>
      </li>
      <li v-for="(item, index) of list" :key="item.id" @mouseover="toShow(index)">
        <span @click="currentGroup(item)">{{item.name}}</span>
        <div class="rt" v-show="isShow === index">
          <i @click="showBtn(index)">···</i>
          <div v-show="isTrue === index">
            <p @click="modifyGroup(item)">重命名</p>
            <p @click="deleteGroup(item,index)">删除</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import connect from "@/assets/js/connect";
import works from "@/api/works";
export default {
  name: "popup",
  data() {
    return {
      list: [],
      isShow: 0,
      isTrue: null
    };
  },
  methods: {
    toShow(i) {
      this.isShow = i;
    },
    showBtn(a) {
      this.isTrue = a;
    },
    currentGroup(item) {
      var id = typeof item == "object" ? item.id : item;
      connect.$emit("e-currentgroup", id);
    },
    modifyGroup(item) {
      connect.$emit("e-modifygroup", item.id);
      Modal.show("modal-modify-group");
    },
    deleteGroup(item, index) {
      works.deleteGroup({ id: item.id, type: item.type }).then(e => {
        if (e.code == 1) {
          this.list.splice(index, index + 1);
          connect.$emit("e-freshgroup", item.id);
          Modal.tip("删除成功");
        } else {
          Modal.tip("删除失败");
        }
      });
    },
    initialGroup() {
      works.groups(5).then(e => (this.list = e.code == 1 ? e.data : []));
    }
  },
  mounted() {
    this.initialGroup();
    connect.$on("e-freshgroup", val => {
      this.initialGroup();
    });
  }
};
</script>

<style scoped lang="scss">
.pop {
  width: 264px;
  max-height: 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.27);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  right: 0;
  top: 65px;
  transition: max-height 0.4s linear;
  overflow: hidden;
  ul {
    padding: 24px 18px;
    li:first-child,
    li:hover {
      color: #2c6eff;
    }
    li {
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      text-align: left;
      .rt {
        position: relative;
        float: right;
        i {
          cursor: pointer;
        }
        div {
          width: 50px;
          height: 40px;
          line-height: 20px;
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.27);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 4px;
          padding: 20px 15px;
          position: absolute;
          top: 20px;
          left: -20px;
          z-index: 999;
          p {
            color: #2a3862;
          }
          p:hover {
            color: #2c6eff;
          }
        }
      }
    }
  }
}
</style>
