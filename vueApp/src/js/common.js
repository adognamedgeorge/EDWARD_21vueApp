exports.install = function (Vue, options) {
  Vue.prototype.$showToast = (txt, time, url, x) => {
    const toast = x({
      txt: txt,
      time: time,
      onTimeout: () => {
        this.$router.push(url)
      }
    })
    toast.show()
  }
}
