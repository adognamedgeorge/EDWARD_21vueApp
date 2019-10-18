<template>
    <div class="wrapper">
        <h4>图片</h4>
        <common-icon></common-icon>
        <div class="content">
            <div class="title_box">
                <div class="title">
                    <span>标题名称：</span>
                    <p>
                        <span>显示标题</span>
                        <input type="checkbox" checked>
                    </p>
                </div>
                <input type="text" placeholder="请输入标题" class="input_text">
            </div>
            <p class="h5">图片：</p>
            <div class="upload">
                <input type="file" accept="image/*" @change="getFile($event)">
                <img :src="imgSrc" alt="" class="imgSrc">
                <div class="cover" v-show="isChange">
                    <img :src="require('@/assets/images/icon_add.png')" alt="">
                    <p>点击上传图片</p>
                </div>
            </div>
        </div>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
import CommonIcon from './CommonIcon';
export default {
    name: 'HotspotPic',
    data () {
        return {
            imgSrc: null,
            isChange: true
        }
    },
    components: {
        CommonIcon
    },
    methods: {
        getFile (e) {
            this.imgSrc = window.URL.createObjectURL(e.target.files[0]);
            this.isChange = false
        }
    }
}
</script>

<style scoped lang="scss">
    .wrapper {
        @include wrapper();
        h4 {
            border-bottom: 1px solid rgba(134,145,179,.35);
            padding-bottom: 27px;
            margin-bottom: 18px;
        }
        .content {
            width: 100%;
            .title_box {
                width: 100%;
                .title {
                    @include title();
                }
                .input_text {
                    width: 100%;
                    height: 32px;
                    border-radius: 4px;
                    margin-bottom: 31px;
                }
            }
            .h5 {
                width: 100%;
                text-align: left;
                margin-bottom: 20px;
            }
            .upload {
                @include upload();
                margin: 0 auto;
            }
        }
        .butn {
            @include btnColor();
        }
    }
</style>
