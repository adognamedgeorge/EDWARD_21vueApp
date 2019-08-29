<template>
 <div id="set">
   <Header :txt="txt" :text="text" :turn="turn" :isShow="isShow" :isTrue2="isTrue2"></Header>
   <div class="content">
     <ul>
       <li class="picture">
         <span>头像</span>
         <div>
           <div class="img1_wrapper">
             <img :src="img1" alt="" class="img1">
           </div>
           <img :src="img" alt="">
         </div>
       </li>
       <li v-for="(item, index) of list" :key="index">
         <span v-text="item.left"></span>
         <div>
           <span v-text="item.right"></span>
           <img :src="img" alt="" v-if="item.arrow">
         </div>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Set',
  data () {
    return {
      txt: '个人信息',
      text: '我的',
      turn: '/mine',
      isShow: true,
      isTrue2: true,
      img: require('../assets/arrow_right.png'),
      isTrue: false,
      img1: require('../assets/bug.jpg'),
      list: [
        {
          left: '姓名',
          right: '西门吹雪',
          arrow: true
        },
        {
          left: '性别',
          right: '男',
          arrow: true
        },
        {
          left: '所属企业',
          right: '杭州云蚂蚁',
          arrow: false
        },
        {
          left: '手机',
          right: '12345678321',
          arrow: false
        },
        {
          left: '座机',
          right: '无',
          arrow: false
        },
        {
          left: '邮箱',
          right: '876654657@qq.com',
          arrow: false
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#set {
  .content {
    ul {
      li {
        height: 1.4rem;
        padding: 0 .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #323233;
        font-size: .4rem;
        div {
          display: flex;
          align-items: center;
          img {
            width: .4rem;
            height: .6rem;
          }
        }
      }
      .picture {
        height: 2.3rem;
        div {
          .img1_wrapper {
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid lightgrey;
            overflow: hidden;
            border-radius: 50%;
            margin-right: .5rem;
            .img1 {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
