<template>
    <div class="wrapper">
        <h4>嵌入图片</h4>
        <div class="upload">
            <input type="file" accept="image/*" @change="getFile($event)">
            <img :src="imgSrc" alt="" class="imgSrc">
            <div class="cover" v-show="isChange">
                <img :src="require('@/assets/images/icon_add.png')" alt="">
                <p>点击添加图片</p>
            </div>
        </div>
        <!--<common-slider :value="value1" :title="title1"-->
                       <!--:lfMark="lfMark1" :rtMark="rtMark1"-->
                       <!--:max="max1" :min="min1">-->
        <!--</common-slider>-->
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
import CommonSlider from '../hotspot/CommonSlider';
export default {
    name: 'EmbedImg',
    data () {
        return {
            imgSrc: null,
            isChange: true,
            sliderList: [
                { value: 100, title: '图片大小', lfMark: '50%', rtMark: '150%', max: 150, min: 50 },
                { value: 100, title: 'X轴旋转', lfMark: '', rtMark: '', max: 150, min: 50 },
                { value: 100, title: 'Y轴旋转', lfMark: '', rtMark: '', max: 150, min: 50 },
                { value: 100, title: 'Z轴旋转', lfMark: '', rtMark: '', max: 150, min: 50 },
                { value: 1000, title: '图片深度', lfMark: '200', rtMark: '5000', max: 5000, min: 200 }
            ]
        }
    },
    components: {
        CommonSlider
    },
    methods: {
        getFile(e) {
            this.imgSrc = window.URL.createObjectURL(e.target.files[0]);
            this.isChange = false
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .upload {
        @include upload();
    }
    .butn {
        @include btnColor();
        margin-top: 15px;
    }
}
</style>
