<template>
    <div class="wrapper">
        <h4>足迹</h4>
        <div class="addstep">
            <p>请先添加足迹</p>
        </div>
        <div class="butn">
            <button>添加足迹</button>
            <button>删除足迹</button>
        </div>
        <button class="btn">足迹应用至所有场景</button>
        <button class="btn">清空所有场景足迹</button>
    </div>
</template>

<script>
export default {
    name: 'FootMark'
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .butn {
        @include btnColor();
        margin-bottom: 53px;
    }
    .addstep {
        width: 100%;
        height: 135px;
        margin: auto auto;
        background: #ffffff;
    }
    .btn {
        width: 100%;
        height: 32px;
        margin-bottom: 32px;
        padding: 12px 28px;
    }
}
</style>
