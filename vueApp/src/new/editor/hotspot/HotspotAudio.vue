<template>
    <div class="wrapper">
        <h4>语音</h4>
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
        <p style="width: 100%; text-align: left;">音频</p>
        <div class="audio" v-if="isShow">
            <audio :src="audioSrc" controls autoplay id="audio">
                <source :src="audioSrc" type="audio/*">
            </audio>
            <div>
                <img :src="require('@/assets/myImg/music.png')" alt="" class="audio_icon">
                <span>{{fileName}}</span>
                <img :src="require('@/assets/myImg/del.png')" alt="" class="audio_del" @click="delAudio">
            </div>
        </div>
        <div class="upload">
            <input type="file" accept="audio/*" @change="getFile($event)">
            <!--<img :src="imgSrc" alt="" class="imgSrc">-->
            <div class="cover">
                <p>点击上传音频</p>
                <img :src="require('@/assets/images/icon_add.png')" alt="">
            </div>
        </div>
        <!--input滑块-->
        <common-slider :value="value" :title="title"
                       :lfMark="lfMark" :rtMark="rtMark" :max="max" :min="min"
                       @parentEvent='parentEvent'>
        </common-slider>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
import CommonIcon from './CommonIcon';
import CommonSlider from './CommonSlider';
export default {
    name: 'HotspotAudio',
    components: {
        CommonIcon,
        CommonSlider
    },
    data () {
        return {
            audioSrc: null,
            fileName: '',
            isShow: false,
            title: '音量大小',
            value: 50,
            lfMark: '1%',
            rtMark: '100%',
            max: 100,
            min: 1
        }
    },
    methods: {
        getFile (e) {
            this.audioSrc = window.URL.createObjectURL(e.target.files[0]);
            this.fileName = e.target.files[0].name;
            this.isShow = true
        },
        delAudio () {
            this.isShow = false
        },
        // 改变音量大小
        parentEvent (val) {
            if (this.isShow)
            document.getElementById('audio').volume = val / 100;
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    h4 {
        border-bottom: 1px solid rgba(134,145,179,.35);
        padding-bottom: 20px;
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
    .upload {
        @include upload();
        width: 100%;
        height: 56px;
        .cover {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                width: 36px;
                height: 36px;
                margin-right: 14px;
            }
        }
    }
    .butn {
        @include btnColor();
    }
    .audio {
        position: absolute;
        right: 300px;
        bottom: 300px;
        width: 196px;
        height: 56px;
        border-radius: 4px;
        overflow: hidden;
        audio {
            height: 56px;
            width: 196px;
        }
        div {
            width: 162px;
            height: 56px;
            padding: 0 17px;
            background-color: #ffffff;
            top: 0;
            left: 0;
            position: absolute;
            line-height: 56px;
            align-items: center;
            display: flex;
            justify-content: space-around;
            .audio_icon {
                width: 30px;
                height: 30px;
                margin-right: 12px;
            }
            span {
                width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .audio_del {
                width: 15px;
                height: 15px;
                position: absolute;
                right: 5px;
                bottom: 0;
                display: none;
                cursor: pointer;
            }
        }
    }
    .audio:hover {
        .audio_del {
            display: block;
        }
    }
}
</style>
