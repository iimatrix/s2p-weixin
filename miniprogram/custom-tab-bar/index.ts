import { nextTick } from "miniprogram/miniprogram_npm/@vant/weapp/common/utils"

// components/Tabbar.ts
type TabbarArg = {
  detail: number
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0, // tabbar activeIndex
    attacted: false,
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "工作"
      },
      {
        "pagePath": "pages/assident/assident",
        "text": "助手"
      },
      {
        "pagePath": "pages/commonly/commonly",
        "text": "常用"
      },
      {
        "pagePath": "pages/analysis/analysis",
        "text": "分析"
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我"
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange({detail: idx}: TabbarArg) {
      wx.switchTab({
        // @ts-ignore
        url: '/' + this.data.list[idx].pagePath,
        success:() => {
          wx.nextTick(() => {
              // @ts-ignore
              this.setData({
                active: idx,
              })
          })
        },
        
      })
    }
  },
  attached() {
    setTimeout(() => {
      this.setData({
        attached: 'attached'
      })
    }, 100);
  }
})
