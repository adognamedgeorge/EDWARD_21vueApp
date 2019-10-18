<template>
  <div class="wrapper">
    <h4>LOGO</h4>
    <div class="image">
        <div>
            <img :src="base.logo_path ? ossRoot + base.logo_path : require('@/assets/images/test.jpg')">
        </div>
        <p>
            <input class="upload chose" type="file" @change="getFile($event)" accept="image/*" name="image">
            <span class="chose">选择LOGO</span>
        </p>
    </div>
    <div class="butn">
        <button>确定</button>
        <button>取消</button>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            // imgSrc: require('@/assets/images/test.jpg'),
            value: 30,
            ossRoot : process.env.VUE_APP_OSS_ROOT
        }
    },
    methods: {
        getFile (e) {
            // eslint-disable-next-line
            console.log(e.target.files[0]);
            this.imgSrc = window.URL.createObjectURL(e.target.files[0])
        },
    },
    props:["base"]
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .image {
        div {
            width: 148px;
            height: 148px;
            border-radius: 4px;
            border: 1px solid lightgrey;
            overflow: hidden;
            margin-bottom: 17px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        p {
            position: relative;
            background-color: #2C6EFF;
            margin: 0 auto;
            width: 100px;
            .chose {
                display: inline-block;
                width: 100px;
                height: 32px;
                line-height: 32px;
                color: #FFFFFF;
            }
            .upload {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                opacity: 0;
            }
        }
    }
    .butn {
        @include btnColor();
    }
}
</style>
