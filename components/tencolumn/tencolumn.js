// components/tencolumn/tencolumn.js
Component({
  options: {
    multipleSlots: true // 多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    datalist: { //父组件传过来的数据
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */

  methods: {
    _bindWriteStar: function (e) { //第三步子组件定义的事件
      const str = e.currentTarget.dataset.val;
      this.triggerEvent("writeComment", str)
    },
  }
})