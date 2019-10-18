<template>
    <div class="wrapper">
        <h4>内嵌</h4>
        <p>内嵌选择</p>
        <router-link v-for="(item, index) in embedList" :key="index" :to="{path: item.path, query: {cid: index, name: item.name}}">
            <button class="btn" @click="changeHeight">{{item.name}}</button>
        </router-link>
        <div class="border"></div>
        <div class="list">
            <h4>内嵌列表：</h4>
            <ul>
                <li v-for="(item, index) in embedList" :key="index" @mouseover="toShow(index)">
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
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
        <inverse-modal :modal_config="modal_embedRemove_config">请确认是否删除内嵌内容！</inverse-modal>
        <div class="rt_content" :style="{height: coverHeight}">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import InverseModal from "@/components/modal/InverseModal";
export default {
    name: 'EmbedRight',
    components: {
        InverseModal
    },
    data () {
        return {
            modal_embedRemove_config: {
                title: '内嵌删除',
                modal_id: 'modal_embed_remove'
            },
            embedList: [
                {name: '嵌入文本', path: 'embedTxt'}, {name: '嵌入图片', path: 'embedImg'}, {name: '嵌入视频', path: 'embedVideo'}
            ],
            isShow: false,
            coverHeight: ''
        }
    },
    methods: {
        remove () {
            Modal.show('modal_embed_remove')
        },
        toShow (i) {
            this.isShow = i
        },
        changeHeight () {
            this.coverHeight = '100%'
        }
    },
    watch: {
        $route(to, from) {
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
    p {
        width: 100%;
        text-align: left;
    }
    .btn {
        margin-top: 15px;
        height: 32px;
        padding: 0 45px;
    }
    .border {
        border-bottom: 1px solid rgba(134,145,179,.35);
        width: 117%;
        background-color: #8691B3;
        margin: 32px -15% 34px 0;
    }
    .list {
        @include list();
    }
    .butn {
        @include btnColor();
    }
    .rt_content {
        overflow: scroll;
    }
}
</style>
