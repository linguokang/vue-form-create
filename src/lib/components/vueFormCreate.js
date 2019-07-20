export default {
  name:'vueFormCreate',
  data() {
    return {
      msg: 0
    }
  },
  props: {
    level: {
      type: [Number, String],
      required: true
    }
  },
  render: function (createElement) {
      return createElement(
        'h' + this.level,   // 标签名称
        this.$slots.default // 子元素数组
      )
    },
}
