<template>
    <div class="wrapper">
        <h4>导览</h4>
        <div class="switch">
            <span>场景巡游是否开启</span>
            <el-switch></el-switch>
        </div>
        <p class="title_p">
            <span>播放导览时关闭音频</span>
            <input type="checkbox" checked>
        </p>
        <p class="title_p">
            <span>循环播放导览</span>
            <input type="checkbox" checked>
        </p>
        <p class="title_p">
            <span>播放时隐藏热点</span>
            <input type="checkbox" checked>
        </p>
        <div class="list">
            <h4>节点列表：</h4>
            <ul>
                <li v-for="(item, index) in nodeList" :key="index" @mouseover="toShow(index)">
                    <div class="lf">
                        <i v-text="index"></i>
                        <img :src="item.img" alt="">
                        <span>{{item.text}}</span>
                    </div>
                    <div v-show="isShow === index" class="rt">
                        <img :src="require('@/assets/myImg/del.png')" alt="" style="width: 15px; height: 15px;">
                        <img :src="require('@/assets/myImg/cc-write.png')" alt="" style="width: 15px; height: 15px;">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GuidedTour',
    data () {
        return {
            nodeList: [
                { text: '全景前后全景切换', img: require('@/assets/myImg/music.png')},
                { text: '全景前后全景切换', img: require('@/assets/myImg/music.png')},
                { text: '全景前后全景切换', img: require('@/assets/myImg/music.png')},
                { text: '全景前后全景切换', img: require('@/assets/myImg/music.png')}
            ],
            isShow: false
        }
    },
    methods: {
        toShow (i) {
            this.isShow = i
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .switch {
        @include switch();
    }
    .list {
        @include list();
    }
    .title_p {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 10px 0;
    }
    .list {
        @include list();
    }
}
</style>
