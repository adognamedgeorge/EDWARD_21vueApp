<template>
  <div class="wrapper">
    <div class="content_list">
      <ul>
        <li v-for="item in dataList" :key="item.index">
          <div class="box">
            <div class="img">
              <img :src="item.thumb_path?ossRoot+item.thumb_path:img" alt />
            </div>
            <div class="text">
              <h3 v-text="item.title"></h3>
              <div class="bottom">
                <p>{{ item.subtitle }}</p>
                <p>
                  <i class="iconfont">&#xe69e;</i>
                  {{ item.click_num }}
                </p>
                <p>
                  <i class="iconfont">&#xe607;</i>
                  {{ item.star_num }}
                </p>
                <p>{{ item.created_at }}</p>
              </div>
            </div>
          </div>
          <div class="btns">
            <button>编辑</button>
            <button>移动</button>
            <button>分享</button>
            <button>删除</button>
          </div>
        </li>
      </ul>
    </div>
    <Paging></Paging>
  </div>
</template>

<script>
import Paging from "./listarrange/paging";
import Connect from "@/assets/js/connect.js";
// import resList from '@/assets/js/manager.json'
export default {
  name: "ListArrange",
  data() {
    return {
      img: require("@/assets/images/test.jpg"),
      ossRoot: process.env.VUE_APP_OSSROOT
    };
  },
  props: ["dataList", "myRoot", "dataCurrentGroup"],
  components: {
    Paging
  },
  mounted() {
    // this.axios.post('https://www.easy-mock.com/mock/5d3ea2704e2ade1e90758673/vue/managerList', {
    //   goodsId: 1001
    // })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // 展示默认数据
    // this.dataList = resList['fineList']
    // Connect.$on("ev", value => {
    //   this.dataList = value;
    // });
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #f5f5f5;
  padding: 59px 0;
  .content_list {
    background-color: rgba(255, 255, 255, 1);
    width: 61%;
    margin: 0 auto;
    height: 707px;
    overflow: hidden;
    ul {
      li {
        /*height: 90px;*/
        padding: 23px 44px 27px 32px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(134, 145, 179, 1);
        .img {
          height: 90px;
          width: 120px;
          border-radius: 4px;
          border: 1px solid lightgrey;
          margin-right: 18px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          flex: 0.8;
          h3 {
            margin-bottom: 49px;
            width: 286px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 15px;
            color: #8691b3;
          }
        }
        .btns {
          float: right;
          display: flex;
          justify-content: space-around;
          button {
            width: 60px;
            height: 32px;
            border: 1px solid #8691b3;
            color: #ffffff;
            border-radius: 4px;
            margin-left: 34px;
          }
          button:nth-child(2n + 1) {
            background-color: #2c6eff;
          }
          button:nth-child(2) {
            background-color: #ff9b30;
          }
          button:last-child {
            background-color: #ffffff;
            color: #2a3862;
          }
          button:nth-child(2):hover {
            background-color: #0f4fdd;
          }
          button:last-child:hover {
            background-color: #e76523;
          }
        }
        .box {
          display: flex;
          flex: 1;
        }
      }
      li:nth-child(5) {
        border: none;
      }
    }
  }
}
</style>
