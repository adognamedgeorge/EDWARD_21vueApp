<template>
    <div class="wrapper">
        <h4>遮罩</h4>
        <p class="p_title">天空遮罩</p>
        <div class="upload">
            <input type="file" accept="image/*" @change="getFile($event)">
            <img :src="imgSrc" alt="" class="imgSrc">
            <div class="cover" v-show="isChange">
                <img :src="require('@/assets/images/icon_add.png')" alt="">
                <p>点击添加图片</p>
            </div>
        </div>
        <!--input滑块改变图片大小-->
        <Slider :value="value" :title="title" :lfMark="lfMark" :rtMark="rtMark" :max="max" :min="min"></Slider>
        <div class="title">
            <span>遮罩不随场景旋转</span>
            <p>
                <!--<span>显示标题</span>-->
                <input type="checkbox" checked>
            </p>
        </div>
        <p class="p_title">地面遮罩</p>
        <div class="upload">
            <input type="file" accept="image/*" @change="getFile($event)">
            <img :src="imgSrc" alt="" class="imgSrc">
            <div class="cover" v-show="isChange">
                <img :src="require('@/assets/images/icon_add.png')" alt="">
                <p>点击添加图片</p>
            </div>
        </div>
        <!--input滑块改变图片大小-->
        <Slider :value="value" :title="title" :lfMark="lfMark" :rtMark="rtMark" :max="max" :min="min"></Slider>
        <div class="title">
            <span>遮罩不随场景旋转</span>
            <p>
                <!--<span>显示标题</span>-->
                <input type="checkbox" checked>
            </p>
        </div>
        <button class="btn">遮罩应用至所有场景</button>
        <button class="btn">情况所有场景遮罩</button>
    </div>
</template>

<script>
export default {
    name: 'Shade',
    data () {
        return {
            title: '图片大小',
            value: 90,
            lfMark: '50%',
            rtMark: '150%',
            max: 150,
            min: 50,
            imgSrc: null,
            isChange: true
        }
    },
    methods: {
        getFile(e) {
            this.imgSrc = window.URL.createObjectURL(e.target.files[0])
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
    .p_title {
        width: 100%;
        text-align: left;
        margin-bottom: 18px;
    }
    .title {
        @include title();
        padding-bottom: 36px;
        border-bottom: 1px solid rgba(186,194,219,1);
        margin-bottom: 33px;
    }
    .btn {
        height: 32px;
        padding-right: 0;
        padding-left: 0;
        width: 100%;
        margin-bottom: 28px;
    }
}
</style>
