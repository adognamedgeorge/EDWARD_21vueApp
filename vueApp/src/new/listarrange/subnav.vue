<template>
  <div class="box">
      <div class="subnav">
          <div class="lt">
              <ul>
                  <li class="showPop">
                      <span>{{title}}<i class="iconfont black">&#xe609;</i></span>
                      <div class="content">
                          <p v-for="(item, index) in popList" :key="index" @click="selected(index)" v-text="item.name"></p>
                      </div>
                  </li>
                  <li v-for="(item, index) in left" :key="index" :class="{blue: changeBlue === index}" @click="toSelect(index)" v-text="item"></li>
              </ul>
          </div>
          <div class="right" style="display:-webkit-box">
              <p style="position: relative;white-space:nowrap" class="first_p">
                  作品分组<i class="iconfont dark">&#xe609;</i>
                  <PopUp class="popup"></PopUp>
              </p>
              <p @click="changeShape" style="cursor: pointer;">
                  显示
                  <i class="iconfont grey" v-show="isTrue">&#xe62e;</i>
                  <i class="iconfont grey" v-show="!isTrue">&#xe650;</i>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
import resList from '@/assets/js/manager.json'
import PopUp from './popup'
import Connect from '@/assets/js/connect.js'
export default {
  name: 'subnav',
  data () {
    return {
      left: ['最高人气', '最新发布'],
      changeBlue: 0,
      popList: [

      {
          id: '1',
          name: '全部'
      },
        {
          id: '2',
          name: '私密作品'
        },
        {
          id: '3',
          name: '精品作品'
        },

      ],
      title: '全部',
      dataId: null,
      data: [],
      isTrue: true
    }
  },
  components: {
    PopUp
  },
  methods: {
    toSelect (i) {
      this.changeBlue = i
      if(i==0){
          this.queryData.order_column='click_num';
        }
      if(i==1){
          this.queryData.order_column='id';
      }
        this.$parent.initialData();
    },
    selected (i) {
      this.title = this.popList[i].name
      this.dataId = this.popList[i].id
      // eslint-disable-next-line
      if (this.dataId == 2) {
        this.data = resList['secretList']

          this.queryData.filter_column='pwd';
        // eslint-disable-next-line
      } else if (this.dataId == 3) {

          this.queryData.filter_column='recommend';

        this.data = resList['fineList']
      }else if(this.dataId == 1){
          this.queryData.filter_column='';
        }
        this.$parent.initialData();
    },
    changeShape () {
        this.isTrue = !this.isTrue
        this.$emit('func', this.isTrue)
    }
  },
  mounted () {
    // 页面展示默认值
    this.data = resList['fineList']
  },

  props: ["queryData", "listInfo"],

  watch: {
    // 向paging传值
    data (val) {
      Connect.$emit('e', val)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
    background-color: #ffffff;
}
.subnav {
  width: 61%;
  height: 80px;
  line-height: 80px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  .lt {
    margin-left: 150px;
    ul {
      li {
        margin-left: 75px;
        width: 80px;
        text-align: center;
      }
    }
  }
  .right {
    p {
      margin-left: 58px;
      i {
        color: #8691B3;
      }
    }
    .first_p:hover {
      .dark { color: #2A3862; }
      .popup {
        max-height: 500px;
      }
    }
    p:nth-child(2):hover { .grey { color: #2A3862; } }
  }
}

.showPop {
  position: relative;
  .black {
    color: #8691B3;
  }
  .content {
    max-height: 0;
    width: 0;
    position: absolute;
    top: 70px;
    left: -15px;
    overflow: hidden;
    z-index: 999;
    box-shadow:0 0 6px 0 rgba(0, 0, 0, 0.27);
    border-radius: 4px;
    background-color: rgba(255,255,255,1);
    transition: max-height .4s linear;
    p {
      margin-left: 20px;
      line-height: 38px;
      font-size: 14px;
      text-align: left;
    }
    p:hover {
      color: #2C6EFF;
    }
  }
}
.showPop:hover {
  .content {
    width: 100px;
    max-height:200px;
  }
  .black {
    color: #2A3862;
  }
}
.subnav, .lt, .lt>ul, .right {
  display: flex;
}
.blue {
  color: #2C6EFF;
  border-bottom: 4px solid #2C6EFF;
}
</style>
