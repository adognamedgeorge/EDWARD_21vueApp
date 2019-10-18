<template>
    <div class="input_range">
        <span class="demonstration">{{title}}</span>
        <div class="input_slider">
            <p class="popup" :style="{top: '0', left: (newValue - min)*100 / (max-min) + '%'}">{{newValue}}</p>
            <input type="range" v-model.trim="newValue" @change="setVoice(newValue)" :max="max" :min="min"
                   class="my_progress" :style="{backgroundSize: (newValue - min)*100 / (max-min) + '% 100%'}">
            <span class="lt">{{lfMark}}</span>
            <span class="rt">{{rtMark}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonSlider',
    data () {
      return {
          newValue: this.value
      }
    },
    props: {
        title: String,
        value: Number,
        lfMark: String,
        rtMark: String,
        max: Number,
        min: Number
    },
    methods: {
        setVoice (val) {
            this.$emit('parentEvent', val)
        }
    }
}
</script>

<style scoped lang="scss">
    .input_range {
        width: 100%;
        margin-bottom: 30px;
        .demonstration {
            width: 100%;
            text-align: left;
            display: inline-block;
        }
        .input_slider {
            position: relative;
            padding-top: 20px;
            .popup {
                background-image: url("../../../assets/myImg/popup.png");
                width: 32px;
                height: 19px;
                background-size: cover;
                color: #ffffff;
                font-size: 12px;
                margin-left: -16px;
            }
            .popup, .lt, .rt { position: absolute; }
            .lt {
                left: 0;
            }
            .rt {
                right: 0;
            }
        }
    }
    // 滑块样式
    .my_progress {
        -webkit-appearance: none;
        width: 192px;
        height: 6px;
        background: -webkit-linear-gradient(left, #2C6EFF, #2C6EFF) no-repeat, #C6CBDD;
        border-radius: 3px;
    }
    .my_progress::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #ffffff;
        border: 4px solid blue;
    }
</style>
