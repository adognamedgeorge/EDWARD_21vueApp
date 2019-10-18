<template>
    <div class="wrapper">
        <h4>嵌入视频</h4>
        <div class="upload">
            <input type="file" accept="video/*" @change="getFile($event)">
            <video :src="videoSrc" autoplay controls class="imgSrc" v-show="!isChange"></video>
            <div class="cover" v-show="isChange">
                <img :src="require('@/assets/images/icon_add.png')" alt="">
                <p>点击添加视频</p>
            </div>
        </div>
        <div class="upload">
            <input type="file" accept="image/*" @change="getFile($event)">
            <img :src="imgSrc" alt="" class="imgSrc">
            <div class="cover" v-show="isChange2">
                <img :src="require('@/assets/images/icon_add.png')" alt="">
                <p>点击添加封面</p>
            </div>
        </div>
        <!--input滑块-->
        <common-slider v-for="(item, index) in sliderList" :key="index"
                    :value="item.value" :title="item.title"
                    :lfMark="item.lfMark" :rtMark="item.rtMark"
                    :max="item.max" :min="item.min">
        </common-slider>
        <button class="btn">重置</button>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
import CommonSlider from '../hotspot/CommonSlider'
export default {
    name: 'EmbedVideo',
    components: {
        CommonSlider
    },
    data () {
        return {
            imgSrc: null,
            videoSrc: null,
            isChange: true,
            isChange2: true,
            sliderList: [
                { value: 100, title: '视频大小', lfMark: '50%', rtMark: '150%', max: 150, min: 50 },
                { value: 100, title: 'X轴旋转', lfMark: '', rtMark: '', max: 150, min: 50 },
                { value: 100, title: 'Y轴旋转', lfMark: '', rtMark: '', max: 150, min: 50 },
                { value: 100, title: 'Z轴旋转', lfMark: '', rtMark: '', max: 150, min: 50 },
                { value: 1000, title: '视频深度', lfMark: '200', rtMark: '5000', max: 5000, min: 200 }
            ]
        }
    },
    methods: {
        // getFile () {
        //     this.imgSrc = window.URL.createObjectURL(e.target.files[0]);
        //     this.isChange = false
        // },
        getFile (e) {
            this.videoSrc = window.URL.createObjectURL(e.target.files[0]);
            this.isChange = false
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    // height: 100%;
    .upload {
        @include upload();
    }
    .butn {
        @include btnColor();
    }
    // .box {
    //     padding: 0 25px 43px;
    //     align-items: center;
    //     display: flex;
    //     flex-direction: column;
    //     height: 100%;
    //     overflow: auto;
    // }
}
</style>
