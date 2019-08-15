<template>
  <div id="telist">
    <cube-index-list
      :data="telData"
      :pullUpLoad="true"
      @select="selectItem"></cube-index-list>
  </div>
</template>

<script>
export default {
  name: 'telist',
  data () {
    return {
      telData: [
        {
          'name': 'C',
          'items': [
            {
              'name': '楚留香',
              'value': 1
            },
            {
              'name': '陈家洛',
              'value': 2
            }
          ]
        },
        {
          'name': 'D',
          'items': [
            {
              'name': '东方不败',
              'value': 3
            }
          ]
        },
        {
          'name': 'H',
          'items': [
            {
              'name': '花满楼',
              'value': 4
            },
            {
              'name': '花无缺',
              'value': 5
            }
          ]
        },
        {
          'name': 'L',
          'items': [
            {
              'name': '李寻欢',
              'value': 6
            }
          ]
        },
        {
          'name': 'X',
          'items': [
            {
              'name': '西门吹雪',
              'value': 7
            }
          ]
        },
        {
          'name': 'Y',
          'items': [
            {
              'name': '叶孤城',
              'value': 8
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectItem (item) {
      console.log(item.name)
    }
  }
}
</script>

<style scoped lang="scss">
#telist {
  height: 10rem;
}
</style>
