<template>
    <div class="wrapper">
        <h4>全景切换</h4>
        <common-icon></common-icon>
        <div class="list_box">
            <p class="p_title">场景选择</p>
            <div class="chose">
                <ul>
                    <li v-for="(item, index) in visuaList" :key="index">
                        <img :src="item.imgSrc" alt="">
                        <p v-text="item.title"></p>
                    </li>
                </ul>
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
    name: 'VisualTurn',
    components: {
        CommonIcon
    },
    data () {
        return {
            visuaList: [
                {
                    imgSrc: require('@/assets/images/test.jpg'),
                    title: '学校的食堂的学校的食堂的'
                },
                {
                    imgSrc: require('@/assets/images/test.jpg'),
                    title: '学校的食堂的学校的食堂的'
                },
                {
                    imgSrc: require('@/assets/images/test.jpg'),
                    title: '学校的食堂的学校的食堂的'
                },
                {
                    imgSrc: require('@/assets/images/test.jpg'),
                    title: '学校的食堂的学校的食堂的'
                },
                {
                    imgSrc: require('@/assets/images/test.jpg'),
                    title: '学校的食堂的学校的食堂的'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .butn {
        @include btnColor();
    }
    h4 {
        border-bottom: 1px solid rgba(134,145,179,.35);
        padding-bottom: 20px;
    }
    .list_box {
        width: 100%;
        padding-bottom: 100px;
        border-bottom: 1px solid rgba(134,145,179,.35);
        .p_title {
            width: 100%;
            text-align: left;
        }
        .chose {
            width: 100%;
            height: 200px;
            overflow: auto;
            ul {
                li {
                    width: 80%;
                    height: 64px;
                    border: 1px solid rgba(134,145,179,1);
                    border-radius: 4px;
                    margin: 11px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 9px;
                    img {
                        width: 61px;
                        height: 46px;
                        border-radius: 4px;
                        margin-right: 5px;
                    }
                    p {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 12px;
                        color: #2A3862;
                    }
                }
                li:hover {
                    border: 1px solid rgba(227,106,86,1);
                }
            }
        }
    }
}
</style>
