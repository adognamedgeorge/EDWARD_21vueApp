<template>
    <div class="wrapper">
        <h4>文本</h4>
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
        <p class="p_title">文本内容：</p>
        <textarea>请输入文本内容</textarea>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
import CommonIcon from './CommonIcon';
export default {
    name: 'HotspotTxt',
    components: {
        CommonIcon
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    h4 {
        border-bottom: 1px solid rgba(134,145,179,.35);
        padding-bottom: 27px;
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
    .p_title {
        width: 100%;
        text-align: left;
    }
    textarea {
        width: 100%;
        height: 159px;
    }
    .butn {
        @include btnColor();
    }
}
</style>
