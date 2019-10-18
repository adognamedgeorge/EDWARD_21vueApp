<template>
    <div class="wrapper">
        <h4>视角</h4>
        <p class="title">初始视角</p>
        <img src="http://www.kentfaith.com.cn/uploads/180130/1-1P1300T94a52.jpg" alt="">
        <p class="checkbox">
            <span>巡游完成自动进入下一场景</span>
            <input type="checkbox">
        </p>
        <div class="block">
            <span class="demonstration">视角（FOV）设置：</span>
            <el-slider  class="slider" :marks="marks1" v-model="value1" range></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">垂直范围设置：</span>
            <el-slider  class="slider" :marks="marks2" v-model="value2" range></el-slider>
        </div>
        <button class="btn butn">视角应用至所有场景</button>
        <button class="btn">恢复默认</button>
    </div>
</template>

<script>
export default {
    name: 'VisualRt',
    data () {
        return {
            value1: [25, 75],
            marks1: {
                0: {
                    style: {
                        color: '#2A3862'
                    },
                    label: this.$createElement('strong', '最近')
                },
                100: {
                    style: {
                        color: '#2A3862'
                    },
                    label: this.$createElement('strong', '最远')
                },
                25: '50',
                75: '50',
                50: {
                    style: {
                        backgroundColor: '#2C6EFF',
                        width: '32px',
                        height: '19px',
                        borderRadius: '8px',
                        position: 'absolute',
                        bottom: '10px'
                    },
                    label: this.$createElement('strong', '50')
                }
            },
            value2: [20, 80],
            marks2: {
                0: '-90',
                100: '90',
                20: {
                    style: {
                        backgroundColor: '#2C6EFF',
                        width: '32px',
                        height: '19px',
                        borderRadius: '8px',
                        position: 'absolute',
                        bottom: '15px',
                        color: '#ffffff',
                        fontSize: '12px'
                    },
                    label: this.$createElement('strong', '100')
                },
                80: {
                    style: {
                        backgroundColor: '#2C6EFF',
                        width: '32px',
                        height: '19px',
                        borderRadius: '8px',
                        position: 'absolute',
                        bottom: '15px',
                        color: '#ffffff',
                        fontSize: '12px'
                    },
                    label: this.$createElement('strong', '100')
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    @include wrapper();
    .title {
        margin-bottom: 13px;
    }
    img {
        width: 100%;
        height: 90px;
        border-radius: 4px;
        margin-bottom: 29px;
    }
    .checkbox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 49px;
        input {
            width: 16px;
            height: 16px;
            background-color: #C6CBDD;
        }
    }
    .block {
        width: 100%;
        .demonstration {
            width: 100%;
            text-align: left;
            display: inline-block;
            margin-bottom: 41px;
        }
        .slider {
            margin-bottom: 51px;
        }
    }
    .butn {
        margin: 0px 0 28px 0;
    }
    .btn {
        height: 32px;
        font-size: 14px;
        padding: 0 25px;
        width: 100%;
    }
}
</style>
