<template>
    <div class="wrap">
        <h4>场景巡游</h4>
        <div class="switch">
            <span>场景巡游是否开启</span>
            <el-switch v-model="base.global.autorotate_enable"></el-switch>
        </div>
        <div class="block">
            <span class="demonstration">单场巡游时间</span>
            <!--饿了么巡游UI组件-->
            <el-slider v-model="base.global.autorotate_time" :marks="marks" class="slider"></el-slider>
        </div>
        <div class="check">
            <span>巡游完成自动进入下一场景</span>
            <input type="checkbox" v-model="base.global.autorotate_next">
        </div>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailCruise',
    data () {
        return {
            value: 30,
            marks: {
                0: '5秒',
                100: '60秒'
            },
            value2: false
        }
    },
    props:["base"]
}
</script>

<style scoped lang="scss">
.wrap {
    @include wrapper();
    .switch {
        @include switch();
        margin-bottom: 44px;
    }
    .block {
        .demonstration {
            float: left;
        }
        .slider {
            margin: 30px 0 58px;
        }
    }
    .check {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .block, .check {
        width: 100%;
    }
    .butn {
        @include btnColor();
    }
}
</style>
