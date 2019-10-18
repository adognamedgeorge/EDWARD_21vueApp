<template>
    <div class="wrapper">
        <div class="div1">
            <h4>作品地址：</h4>
            <textarea id="text1" @click="copy('text1')" v-model="value1"></textarea>
            <button class="btn" @click="copy('text1')">复制</button>
        </div>
        <div class="div2">
            <h4>嵌入到网站：</h4>
            <textarea name="" id="text2" cols="30" rows="10" @click="copy('text2')" v-model="value2"></textarea>
            <button class="btn" @click="copy('text2')">复制</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHome',
    data () {
      return {
          value1: process.env.VUE_APP_KP_ROOT + this.$route.query.eid
      }
    },
    computed:{
        value2:{
            get(){
                return `<iframe src='${this.value1}'/>`;
            },
            set(val){
            }
        }
    },
    methods: {
        copy (id) {
            let text = document.getElementById(id);
            text.select();
            document.execCommand('Copy');
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    margin: 0 20px;
    .div1, .div2 {
        h4 {
            margin-bottom: 17px;
            text-align: left;
        }
        textarea {
            width: 201px;
            margin-bottom: 19px;
        }
        #text1 {
            height: 82px;
        }
        #text2 {
            height: 113px;
        }
        .btn {
            margin: 0 auto 78px;
        }
    }
}
</style>
