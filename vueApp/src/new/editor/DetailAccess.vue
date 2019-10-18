<template>
    <div class="wrapper">
        <h4>访问权限</h4>
        <div class="switch">
            <span>访问权限是否开启</span>
            <el-switch v-model="base.global.permission"></el-switch>
        </div>
        <div class="input">
            <label>密码</label>
            <input type="text" placeholder="请输入密码" v-model="permission_pwd">
        </div>
        <div class="input">
            <label>确认</label>
            <input type="text" placeholder="请确认密码" v-model="permission_pwd_again">
        </div>
        <div class="butn">
            <button>确定</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailAccess',
    data () {
        return {
            value: true,
            permission_pwd: null,
            permission_pwd_again: null,
        }
    },
    props:["base"]
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .switch, .input {
        @include switch();
    }
    .switch {
        margin-bottom: 22px;
    }
    .input {
        align-items: center;
        margin-bottom: 18px;
        label {
            margin: 0;
            font-size: 14px;
        }
        input {
            height: 32px;
            width: 80%;
            margin-left: 6px;
        }
    }
    .butn {
        @include btnColor();
    }
}
</style>
