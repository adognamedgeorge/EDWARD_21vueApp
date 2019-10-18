<template>
    <div class="wrapper">
        <h4>嵌入文本</h4>
        <p class="p_title">文本内容：</p>
        <textarea name="" id="" cols="30" rows="10">请输入文本内容</textarea>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmbedTxt'
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .p_title {
        width: 100%;
        text-align: left;
        margin-bottom: 12px;
    }
    textarea {
        width: 100%;
        height: 146px;
    }
    .butn {
        @include btnColor();
    }
}
</style>
