<template>
    <div class="wrapper">
        <h4>开场提示</h4>
        <div class="upload">
            <input type="file" accept="image/*" @change="getFile($event)">
            <img :src="imgSrc" alt="" class="imgSrc">
            <div class="cover" v-show="isChange">
                <img :src="require('@/assets/images/icon_add.png')" alt="">
                <p>点击添加图片</p>
            </div>
        </div>
        <div class="btns">
            <p>
                <button>修改照片</button>
            </p>
            <p>
                <button>删除照片</button>
            </p>
        </div>
        <div class="block">
            <span class="demonstration">提示时间</span>
            <!--饿了么巡游UI组件-->
            <el-slider v-model="value" :marks="marks" class="slider"></el-slider>
        </div>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
let isset = r => (typeof r == "undefined" ? 0 : 1);
export default {
    name: 'DetailTip',
    data () {
        return {
            imgSrc:'',
            oss_root : process.env.VUE_APP_OSS_ROOT,
            marks: {
                0: '1秒',
                100: '10秒'
            },
            value: 50,
            isChange: true
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        getFile(e) {
            this.imgSrc = window.URL.createObjectURL(e.target.files[0])
            this.isChange = false
        },
        init(){
            //图
            if(isset(this.base.global.open_alert_path)
                && this.base.global.open_alert_path){
                this.imgSrc = this.oss_root + this.base.global.open_alert_path;
            }
            //时间
            if(isset(this.base.global.open_alert_time)){
                this.value = this.base.global.open_alert_time;
            }
        }
    },
    props:["base"]
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .upload {
        @include upload();
    }
    .btns {
        width: 100%;
        p {
            button {
                width: 75%;
                margin-bottom: 13px;
                height: 36px;
                color: #FFFFFF;
            }
        }
        p:first-child button {
            background-color: #2C6EFF;
        }
        p:last-child button {
            color: #8691B3;
            margin-bottom: 46px;
        }
    }
    .block {
        width: 100%;
        span {
            float: left;
        }
        .slider {
            margin-top: 29px;
        }
    }
    .butn {
        @include btnColor();
    }
}
</style>
