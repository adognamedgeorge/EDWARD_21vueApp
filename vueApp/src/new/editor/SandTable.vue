<template>
    <div class="wrapper">
        <h4>沙盘</h4>
        <div class="upload">
            <input type="file" accept="image/*" @change="getFile($event)">
            <img :src="imgSrc" alt="" class="imgSrc">
            <div class="cover" v-show="isChange">
                <!--<img :src="require('@/assets/images/icon_add.png')" alt="">-->
                <p>图片大小1：1</p>
            </div>
        </div>
        <div class="butn">
            <button>添加图片</button>
            <button>删除图片</button>
        </div>
        <button class="btn">添加标记点</button>
        <div class="list">
            <h4>标记点列表：</h4>
            <ul>
                <li v-for="(item, index) in markList" :key="index" @mouseover="toShow(index)">
                    <div class="lf">
                        <i v-text="index"></i>
                        <img :src="item.img" alt="">
                        <span>{{item.name}}</span>
                    </div>
                    <div v-show="isShow === index" class="rt">
                        <img :src="require('@/assets/myImg/del.png')" alt="" style="width: 15px; height: 15px;">
                        <!--<img :src="require('@/assets/myImg/cc-write.png')" alt="" style="width: 15px; height: 15px;">-->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SandTable',
    data () {
        return {
            imgSrc: null,
            isChange: true,
            markList: [
                { name: '全景切换全景切换', img: require('@/assets/myImg/videoa.png') },
                { name: '全景切换全景切换', img: require('@/assets/myImg/music.png') },
                { name: '全景切换全景切换', img: require('@/assets/myImg/audio.png') },
                { name: '全景切换全景切换', img: require('@/assets/myImg/logoBg.png') }
            ],
            isShow: false
        }
    },
    methods: {
        getFile(e) {
            this.imgSrc = window.URL.createObjectURL(e.target.files[0])
            this.isChange = false
        },
        toShow (i) {
            this.isShow = i
        },
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper;
    .upload {
        @include upload();
        .cover {
            margin: 0 auto;
            display: flex;
            align-items: center;
            p {
                color: #8691B3;
            }
        }
    }
    .butn {
        @include btnColor();
        margin-top: 0;
        margin-bottom: 35px;
    }
    .btn {
        height: 32px;
        width: 100%;
        margin-bottom: 33px;
    }
    .list {
        @include list();
        border-top: 1px solid rgba(134,145,179,1);
        padding-top: 34px;
    }
}
</style>
