<template>
  <div class="box">
    <div class="subnav">
      <div class="l">
        <router-link to="#">
          <button style="width:100px;height:40px;" class="circular tab-btn blue">全景图片</button>
        </router-link>
        <router-link to="#">
          <button style="border-color:transparent" class="circular tab-btn">我的足迹</button>
        </router-link>
      </div>
      <div class="m">
        <ul>
          <li
            v-for="(item, index) in left"
            :key="index"
            :class="{blue: changeBlue === index}"
            @click="toSelect(index)"
            v-text="item"
          ></li>
        </ul>
      </div>
      <div class="r">
        <li class="showPop">
          <span>
            {{title}}
            <i class="iconfont black">&#xe609;</i>
          </span>
          <div class="content">
            <p
              v-for="(item, index) in popList"
              :key="index"
              @click="selected(index)"
              v-text="item.name"
            ></p>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import resList from "@/assets/js/manager.json";
import PopUp from "./popup";
import Connect from "@/assets/js/connect.js";
export default {
  name: "subnav",
  data() {
    return {
      left: ["最新发布", "最高人气"],
      changeBlue: 0,
      popList: [
        {
          id: "1",
          name: "全部"
        },
        {
          id: "2",
          name: "私密作品"
        },
        {
          id: "3",
          name: "精品作品"
        }
      ],
      title: "筛选",
      dataId: null,
      data: [],
      isTrue: true
    };
  },
  components: {
    PopUp
  },
  methods: {
    toSelect(i) {
      this.changeBlue = i;
      if (i == 1) {
        this.queryData.order_column = "click_num";
      }
      if (i == 0) {
        this.queryData.order_column = "id";
      }
      this.$parent.initialData();
    },
    selected(i) {
      this.title = this.popList[i].name;
      this.dataId = this.popList[i].id;
      // eslint-disable-next-line
      if (this.dataId == 2) {
        this.data = resList["secretList"];

        this.queryData.filter_column = "pwd";
        // eslint-disable-next-line
      } else if (this.dataId == 3) {
        this.queryData.filter_column = "recommend";

        this.data = resList["fineList"];
      } else if (this.dataId == 1) {
        this.queryData.filter_column = "";
      }
      this.$parent.initialData();
    },
    changeShape() {
      this.isTrue = !this.isTrue;
      this.$emit("func", this.isTrue);
    }
  },
  mounted() {
    // 页面展示默认值
    this.data = resList["fineList"];
  },

  props: ["queryData", "listInfo"],

  watch: {
    // 向paging传值
    data(val) {
      Connect.$emit("e", val);
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  background-color: #ffffff;
}
.subnav {
  position: relative;
  width: 1180px;
  line-height: 80px;
  margin: 0px auto;
  .l {
    position: absolute;
    width: 220px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
  }
  .r {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .m {
    margin: 40px auto 0;
    ul {
      li {
        margin-left: 75px;
        width: 80px;
        text-align: center;
      }
    }
  }
}

.showPop {
  position: relative;
  .black {
    color: #8691b3;
  }
  .content {
    max-height: 0;
    width: 0;
    position: absolute;
    top: 70px;
    left: -15px;
    overflow: hidden;
    z-index: 999;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.27);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    transition: max-height 0.4s linear;
    p {
      margin-left: 20px;
      line-height: 38px;
      font-size: 14px;
      text-align: left;
    }
    p:hover {
      color: #2c6eff;
    }
  }
}
.showPop:hover {
  .content {
    width: 100px;
    max-height: 200px;
  }
  .black {
    color: #2a3862;
  }
}
.subnav,
.m,
.m > ul,
.right {
  display: flex;
}
.blue {
  color: #2c6eff;
  border-bottom: 4px solid #2c6eff;
}
</style>
