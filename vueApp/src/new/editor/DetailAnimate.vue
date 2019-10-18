<template>
    <div class="wrapper">
        <h4>开场动画</h4>
        <div class="switch">
            <span>开场动画是否开启</span>
            <el-switch v-model="base.show_setting.littleplanetintro"></el-switch>
        </div>
        <div class="select">
            <select name="" id="">
                <option value="">小行星开场</option>
                <!--<option value="">水平巡游开场</option>-->
            </select>
        </div>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailAnimate',
    data () {
        return {
            // value: true
        }
    },
    props:["base"]
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .switch {
        @include switch();
        margin-bottom: 30px;
    }
    .select {
        width: 100%;
    }
    .butn {
        @include btnColor();
    }
}
</style>
