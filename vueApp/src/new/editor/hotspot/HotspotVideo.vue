<template>
    <div class="wrapper">
        <h4>视频</h4>
        <common-icon></common-icon>
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
        <p style="width: 100%; text-align: left;">视频</p>
        <div class="video_box" v-if="isShow">
            <video :src="videoSrc" autoplay controls></video>
            <img :src="require('@/assets/myImg/btnDel.png')" alt="" class="audio_del" @click="delVideo">
        </div>
        <div class="upload">
            <input type="file" accept="video/*" @change="getFile($event)">
            <div class="cover">
                <img :src="require('@/assets/images/icon_add.png')" alt="">
                <p>点击添加视频</p>
            </div>
        </div>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
import CommonIcon from './CommonIcon'
export default {
    name: 'HotspotVideo',
    components: {
        CommonIcon
    },
    data () {
        return {
            videoSrc: null,
            isShow: false
        }
    },
    methods: {
        getFile(e) {
            this.videoSrc = window.URL.createObjectURL(e.target.files[0]);
            this.isShow = true
        },
        delVideo () {
            this.isShow = false
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
    .video_box {
        width: 148px;
        height: 138px;
        border-radius: 4px;
        position: absolute;
        right: 300px;
        bottom: 300px;
        border: 1px solid lightgrey;
        video {
            width: 148px;
            height: 138px;
        }
        .audio_del {
            width: 15px;
            height: 15px;
            position: absolute;
            right: 5px;
            bottom: 3px;
            display: none;
            cursor: pointer;
        }
    }
    .video_box:hover {
        .audio_del {
            display: block;
        }
    }
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
    .butn {
        @include btnColor();
    }
}
</style>
