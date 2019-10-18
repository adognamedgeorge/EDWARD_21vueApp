<template>
    <div class="iconfont">
        <p class="h5">系统图标：</p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CommonIcon'
}
</script>

<style scoped lang="scss">
.iconfont {
        width: 100%;
        border-bottom: 1px solid rgba(134,145,179,1);
        margin-bottom: 49px;
        .h5 {
            padding: 0;
            width: 100%;
            text-align: left;
            margin-bottom: 24px;
            color: #2A3862;
            font-size: 14px;
        }
        ul {
            height: 150px;
            overflow: auto;
            margin-bottom: 34px;
            li {
                width: 28px;
                height: 28px;
                background-color: #8691B3;
                border-radius: 4px;
                float: left;
                margin: 0 8px 13px 0;
            }
        }
    }
</style>
