// components/func-B/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: false,
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
    onCloseFB() {
      //@ts-ignore
      this.setData({
        show: false,
      })
    }
  }
})
