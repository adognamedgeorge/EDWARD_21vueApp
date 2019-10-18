<template>
    <div class="wrapper min_height">
        <h4>超链接</h4>
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
        <div class="title">
            <span>地址：</span>
            <p>
                <span>新窗口打开</span>
                <input type="checkbox" checked>
            </p>
        </div>
        <textarea name="" id="" cols="30" rows="10">请输入链接网址</textarea>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
import CommonIcon from './CommonIcon';
export default {
    name: 'HyperLink',
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
    .title {
        @include title();
    }
    textarea {
        width: 100%;
        height: 92px;
    }
    .butn {
        @include btnColor();
    }
}
</style>
