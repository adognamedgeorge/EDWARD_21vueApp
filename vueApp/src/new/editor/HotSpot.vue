<template>
    <div class="wrapper">
        <h4>热点</h4>
        <p class="title">热点选择：</p>
        <div class="btnBox">
            <router-link
                v-for="(item, index) in routerList" :key="index"
                :to="{path: item.path, query: {cid: index, name: item.name}}"
                class="router">
                <button class="btn" @click="changeHeight">{{item.name}}</button>
            </router-link>
        </div>
        <div class="list">
            <h4>热点列表：</h4>
            <ul>
                <li v-for="(item, index) in routerList" :key="index" @mouseover="toShow(index)">
                    <div class="lf">
                        <i v-text="index"></i>
                        <img :src="require('@/assets/myImg/videoa.png')" alt="">
                        <span>{{item.name}}</span>
                    </div>
                    <div v-show="isShow === index" class="rt">
                        <img :src="require('@/assets/myImg/del.png')" alt="" style="width: 15px; height: 15px;">
                        <img :src="require('@/assets/myImg/cc-write.png')" alt="" style="width: 15px; height: 15px;">
                    </div>
                </li>
            </ul>
        </div>
        <div class="rt_content" :style="{height: coverHeight}">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HotSpot',
    data () {
        return {
            routerList: [
                {name: '全景切换', path: 'visualTurn'}, {name: '超链接', path: 'hyperLink'}, {name: '图片', path: 'hotspotPic'},
                {name: '文字', path: 'hotspotTxt'}, {name: '语音', path: 'hotspotAudio'}, {name: '视频', path: 'hotspotVideo'}
            ],
            queryName: '',
            isShow: false,
            coverHeight: ''
        }
    },
    // methods: {
    //     sendQueryToParent () {
    //         this.$emit('listenEvent', this.$route.query.name)
    //         console.log(this.$route.query.name)
    //     }
    // }
    methods: {
        toShow (i) {
            this.isShow = i
        },
        changeHeight () {
            this.coverHeight = ''
        }
    },
    watch: {
        $route(to,from){
            console.log(to.path);
            if (to.path === '/visual') {
                this.coverHeight = ''
            }
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .title {
        margin-bottom: 16px;
        width: 100%;
        text-align: left;
    }
    .btnBox {
        width: 100%;
        margin-bottom: 34px;
        border-bottom: 1px solid rgba(134,145,179,.35);
        padding-bottom: 36px;
        .btn {
            height: 32px;
            width: 90px;
            padding: 0;
            font-size: 14px;
            float: left;
            margin-bottom: 9px;
        }
        .btn:nth-child(2n) {
            float: right;
        }
        .router {
            float: left;
        }
        .router:nth-child(2n) {
            float: right;
        }
    }
    .list {
        @include list();
    }
}
</style>
